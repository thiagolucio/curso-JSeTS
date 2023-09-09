class ValidaFormulario {
  constructor() { // A funcao construtora é construida aqui para que declarar os métodos que vc poderá usar em outras classes a partir desta / The constructor function it's build to declare the methods you can use in other classes.
    this.formulario = document.querySelector('.formulario');
    this.eventos();
  }

  eventos() {
    this.formulario.addEventListener('submit', e => { // Funcao de callback chamada por um evento enviar. A funcao arrow nao permite a alteração do this
      this.handleSubmit(e); 
    });
  }

  handleSubmit(e) {
    e.preventDefault(); // usado para não executar o evento padrao e poder continuar a tratar as validações e regras controlando a hora de enviar o formulário
    const camposValidos = this.camposSaoValidos();
    const senhasValidas = this.senhasSaoValidas();

    if(camposValidos && senhasValidas) { // se todas as regras forem atendidas ele enviar o formulário
      alert('Formulário enviado.');
      this.formulario.submit();
    }
  }

  senhasSaoValidas() {
    let valid = true;

    const senha = this.formulario.querySelector('.senha');
    const repetirSenha = this.formulario.querySelector('.repetir-senha');

    if(senha.value !== repetirSenha.value) {
      valid = false;
      this.criaErro(senha, 'Campos senha e repetir senha precisar ser iguais.');
      this.criaErro(repetirSenha, 'Campos senha e repetir senha precisar ser iguais.');
    }

    if(senha.value.length < 6 || senha.value.length > 12) {
      valid = false;
      this.criaErro(senha, 'Senha precisa estar entre 6 e 12 caracteres.');
    }

    return valid;
  }

  camposSaoValidos() {
    let valid = true;

    for(let errorText of this.formulario.querySelectorAll('.error-text')) {
      errorText.remove();
    }

    for(let campo of this.formulario.querySelectorAll('.validar')) {
      const label = campo.previousElementSibling.innerText; // Pega o text do label do campo anterior ao atual. previousElementSibling = Elemento irmão anterior.

      if(!campo.value) {
        this.criaErro(campo, `Campo "${label}" não pode estar em branco.`);
        valid = false;
      }

      if(campo.classList.contains('cpf')) {
        if(!this.validaCPF(campo)) valid = false;
      }

      if(campo.classList.contains('usuario')) {
        if(!this.validaUsuario(campo)) valid = false;
      }

    }

    return valid;
  }

  validaUsuario(campo) {
    const usuario = campo.value;
    let valid = true;

    if(usuario.length < 3 || usuario.length > 12) {
      this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.');
      valid = false;
    }

    if(!usuario.match(/^[a-zA-Z0-9]+$/g)) { // regex = qq letra entre a e z minúsculo, qq letra entre A e Z maiúsculo, qq número entre 0 a 9 isso repetidas (sinal de +$ ) vezes
      this.criaErro(campo, 'Nome de usuário precisar conter apenas letras e/ou números.');
      valid = false;
    }

    return valid;
  }

  validaCPF(campo) {
    const cpf = new ValidaCPF(campo.value);

    if(!cpf.valida()) {
      this.criaErro(campo, 'CPF inválido.');
      return false;
    }

    return true;
  }

  criaErro(campo, msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text');
    campo.insertAdjacentElement('afterend', div); // Esse comando insere depois do próprio campo a div error-text.
  }
}

const valida = new ValidaFormulario(); // cria um novo baseado no constructor do Original. Ele tipo clona a classe acima
