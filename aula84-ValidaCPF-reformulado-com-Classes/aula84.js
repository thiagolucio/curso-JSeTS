// 705.484.450-52 070.987.720-03
class ValidaCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, '')
    });
  }

  // Valida se é uma sequência de números
  eSequencia() {
    return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo; // o charAt(0) vai pegar o primeiro caracter e repetir 11 vezes.
  }

  /* Essa funcao vai pegar o CPF com os espaços e caracteres removidos e vai 
  - primeiro remover os dois último digitos
  - passar o primeiro digito para o digito1
  - passar o segundo digito para o digito2
  - vai reunir novamente os numeros do cpf com os dois digitos gerados */ 
  // Qualquer método que não faz uso do "this" ele pode se tornar "static" 
  static geraNovoCpf() {
    const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
    const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
    const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
    console.log('cpfSemDigitos:', cpfSemDigitos);
    // console.log('digito1:',digito1, '- digito2:',digito2);
    this.novoCPF = cpfSemDigitos + digito1 + digito2;
  }

  static geraDigito(cpfSemDigitos) {
    let total = 0; //  pegar a soma de todos
    let reverso = cpfSemDigitos.length + 1; // ele vai calcular o tamanho do array + 1 
    // abaixo ele vai multiplicar os números ao mesmo tempo que vai reduzindo o tamanho do array
    for(let stringNumerica of cpfSemDigitos) {
      total += reverso * Number(stringNumerica); // mesmo o operador de multiplicaçao sendo usado melhor garantir e converter para numero
      reverso--;
      console.log(stringNumerica, reverso);
      // vai retornar isso aqui
      // Ele pega cada valor do array e multiplica por valores de 10 até 1
      // 0 10
      // 7 9
      // 0 8
      // 9 7
      // 8 6
      // 7 5
      // 7 4
      // 2 3
      // 0 2
      // 0 1
    }
    console.log('total', total);
    const digito = 11 - (total % 11); // 11 - resto da divisão
    return digito <= 9 ? String(digito) : '0'; // se for menor ou igual a 9 devolve o valor como String, caso contrário retorna 0 (como no telefone maior que 9 é 10 que é representado pelo 0)
  }

  valida() {
    if(!this.cpfLimpo) return false; // se o CPF não estiver preenchido retorna falso
    if(typeof this.cpfLimpo !== 'string') return false; // se o cpf for números
    if(this.cpfLimpo.length !== 11) return false; // se for diferente que 11 casas decimais então é falso
    if(this.eSequencia()) return false; // se for uma sequência de números então retorna falso
    this.geraNovoCpf(); // por fim regera o novo cpf validado.

    return this.novoCPF === this.cpfLimpo; // finalmente ele verifica se o CPF validado/ gerado é igual ao CPF enviado
  }
}

let validacpf = new ValidaCPF('070.987.720-03');
// validacpf = new ValidaCPF('999.999.999-99');

if (validacpf.valida()) {
  console.log('CPF válido');
} else {
  console.log('CPF inválido');
}
