const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

const LoginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true }
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.user = null;
  }

  // O processo de login
  async login() {
    this.valida(); // chama validacoes
    if(this.errors.length > 0) return; // retorna os erros destas validacoes e mostra
    this.user = await LoginModel.findOne({ email: this.body.email }); // busca usuários com o mesmo email 
    
    // Abaixo se ele não encontrar nenhum usuário ele retorna mensagem flash avisando que não encontrou o usuário
    if(!this.user) {
      this.errors.push('Usuário não existe.'); // para mair segurança melhor informar que usuário e senha estão errados somente
      return;
    }
    /*
      Aqui ele verifica se a senha digitada/ enviada é a mesma que está salva descriptografando ele pra comparar ou utilizando o mesmo calculo 
    criptográfico na senha que está enviando pra ver se ficam iguais as duas aplicando a criptografia.
    */
    if(!bcryptjs.compareSync(this.body.password, this.user.password)) {
      this.errors.push('Senha inválida');
      this.user = null;
      return;
    }
  }

  async register() {
    this.valida(); // executa a funcao valida
    if(this.errors.length > 0) return; // verifica se existe qualquer erro é retornado e se sim retorna o erro

    await this.userExists(); // vai chamar a funcao que verifica se o usuario já existe
    if(this.errors.length > 0) return; // verifica se existe qualquer erro é retornado e se sim retorna o erro

    // Criptografar a senha usando o bcryptjs importado pacote do node
    const salt = bcryptjs.genSaltSync(); // define um salto para ser aplicado no calculo do hash da senha (default = 10)
    this.body.password = bcryptjs.hashSync(this.body.password, salt); // o pacote bcryptjs faz o calculo do hash da senha e o salto aplicado

    // Ele recebe a promessa no hora certa dele e cria mais um usuário
    this.user = await LoginModel.create(this.body);
  }

  // compara se já existe um usuário com mesmo email
  async userExists() {
    this.user = await LoginModel.findOne({ email: this.body.email }); // procure um (findOne) registro de usuário com o mesmo email (this.body.email) que está sendo enviado
    if(this.user) this.errors.push('Usuário já existe.'); //  se sim entao mandar essa mensagem
  }

  valida() {
    this.cleanUp();
    // Validação dos campos de login
    // O e-mail precisa ser válido
    if(!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');

    // A senha precisa ter entre 3 e 50
    if(this.body.password.length < 3 || this.body.password.length > 50) {
      this.errors.push('A senha precisa ter entre 3 e 50 caracteres.');
    }
  }

  cleanUp() {
    for(const key in this.body) {
      if(typeof this.body[key] !== 'string') { // se a chave for diferente de string ... remove (pra remover espaços em branco)
        this.body[key] = '';
      }
    }

    this.body = {
      email: this.body.email,
      password: this.body.password
    };
  }
}

module.exports = Login;
