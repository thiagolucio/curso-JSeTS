// new Object é um novo objeto baseado em um construtor
/* new Object -> Object.prototype */
// const objA = {
//   chaveA: 'A',
//   // __proto__: Object.prototype
// }

// const objB = {
//   chaveB: 'B',
//   // __proto__: objA
// }

// const objC = {
//   chaveC: 'C',
//   // __proto__: objB
// }
// Encadeando os objetos como prototypes uns dos outros.
// Object.setPrototypeOf(objB, objA);
// Object.setPrototypeOf(objC, objB);
// // console.log(objB);
// console.log(objB.chaveA);
// console.log(objC.chaveA);
// console.log(objC.chaveB); // vc pode pegar as chaves dos objetos B e A

// Object.getPrototypeOf // funcao do getter pra prototype
// Object.setPrototypeOf // funcao do setter pra prototype


// OUTRO EXEMPLO
function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
  this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual) {
  this.preco = this.preco + (this.preco * (percentual / 100));
};

// const p1 = new Produto('Camiseta', 50);
// p1.desconto(10);
// p1.aumento(10);

// console.log(p1);


// Literal
// const p2 = {
//   nome: 'Vassoura',
//   preco: 15
// };
// Object.setPrototypeOf(p2, Produto.prototype); // setou o prototype do Produto como prototype de p2 

// p2.aumento(10);
// console.log(p2);

// console.log(p1.preco);
// console.log(p2.preco);


// OUTRO EXEMPLO
// NO exemplo abaixo é criado um objeto e já é setado os atributos/ propriedades do Objeto.
const p3 = Object.create(Produto.prototype, { // O Objeto é criado com o "Object.create" baseado em Produto
  preco: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 99
  },
  tamanho: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 42
  },
});
p3.aumento(10); // vai retornar 108.9
console.log(p3);

