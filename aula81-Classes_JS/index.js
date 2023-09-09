// Classes JS - É a mesma coisa que uma função construtora. Elas são a mesma coisa com parâmetros especiais (constructor) 
class Pessoa { // exatamente o que foi feito com uma funcao construtora
  constructor(nome, sobrenome) { // vc precisa declarar um constructor
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  get nomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  }

  set nomeCompleto(valor) {
    valor = valor.split(' ');
    this.nome = valor.shift();
    this.sobrenome = valor.join(' ');
  }

  falar() {
    console.log('Meu nome é ' + this.nomeCompleto, 'E eu estou falando.');
  }
  comer() {
    console.log('Meu nome é ' + this.nomeCompleto, 'E eu estou comendo.');
  }
  dormir() {
    console.log('Meu nome é ' + this.nomeCompleto, 'E eu estou dormindo.');
  }

}

const p1 = new Pessoa('Luiz', 'Miranda'); // criou uma nova pessoa a partir da classe constructor Pessoa
// p1.nomeCompleto = 'Thiago Lúcio Bittencourt';

function Pessoa2(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
  console.log(`Pessoa 2 que é ${this.nomeCompleto} está falando.`);
}
const p2 = new Pessoa('Thiago', 'Bittencourt');

// console.log(p1.nome);
// console.log(p1.sobrenome);
// console.log(p1.falar());
// console.log(p1.comer());
// console.log(p1.dormir());
// console.log(p1.nomeCompleto);
console.log(p1);
console.log(p2);
