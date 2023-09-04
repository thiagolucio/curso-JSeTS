// Factory functions / Constructor functions / Classes

// const pessoa = {
//   nome: 'Thiago',
//   sobrenome: 'Miranda',
// }
// forma de acessar os atributos de um objeto (chave: valor)
// console.log(pessoa.nome);
// console.log(pessoa.sobrenome);

// outra forma de acessar atributos usando notação de colchetes. Com a notação de colchetes a vantagem é que vc pode valores dinâmicos (*até mesmo de um BD ou de outro lugar)
// console.log(pessoa['nome', 'sobrenome']);

// Usando funcao construtora
const pessoa1 = new Object();
pessoa1.nome = 'Thiago';
pessoa1.sobrenome = 'Bittencourt';
pessoa1.idade = 33;
// console.log(pessoa1);

pessoa1.falarNome = function() {
  return (`Meu nome é ${this.nome} ${this.sobrenome}`);
};
// console.log (pessoa1.falarNome());

// criando uma funcao para pegar a data de nascimento
// pessoa1.getDataNascimento = function() {
//   const dataAtual = new Date();
//   return dataAtual.getFullYear() - this.idade; // retorna a idade da pessoa (diminuindo o ano pela idade)
// };
// console.log(pessoa1.getDataNascimento());


// pegando a chave e valor do objeto pessoa1
// for(let chave in pessoa1) {
//   console.log('chave:', chave, ' - valor:', pessoa1[chave]);
// }


// Funcoes que criam moldes. As chamadas Factory Functions e as Constructor functions
/* Fatcory e Constructor functions são padrões de projetos. Onde vc define qual dos dois modeladores vc quer usar e aplica eles. */
// function criaPessoa(nome, sobrenome) {
//   return {
//     nome,
//     sobrenome,
//     // nomeCompleto() {
//     get nomeCompleto() {
//       return `${this.nome} ${this.sobrenome}`;
//     }
//   };
// }

//  const p1 = criaPessoa('Anacleto', 'Hermenegildo');
// //  console.log(p1.nomeCompleto()); // Se declarada a linha 46 sem o "get" na funcao método
//  console.log(p1.nomeCompleto); // se declarado com "get" como na linha 47

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}
 

/* A palavra new vai criar um objeto vazio e atrelaar o this apontar para esse objeto na nova funcao */
 const p1 = new Pessoa('Luiz', 'Miranda');
 const p2 = new Pessoa('Thiago', 'Lucio Bittencourt');
 
//  Object.freeze(p1); // congelando o p1. Daqui em diante ele não mudará mais
//  Object.freeze(this); // daqui em diante congelando todos os objetos da funcao usando o this
p1.nome = "Hermenegildo"; // ele está alterando o valor do valor da variável. Por isso pode ser const o p1 porque ele não está sendo mudado e sim o valor da variável dentro dele. 

 console.log(p1); // retorno é Pessoa { nome: 'Luiz', sobrenome: 'Miranda' }
 console.log(p2); // retorno é Pessoa { nome: 'Luiz', sobrenome: 'Miranda' }

// function Pessoa(nome, sobrenome) {
//   this.nome = nome;
//   this.sobrenome = sobrenome;

//   Object.freeze(this);
// }

// const p1 = new Pessoa('Luiz', 'Miranda');
// const p2 = new Pessoa('Maria', 'Miranda');

// console.log(p1);
// console.log(p2); 
