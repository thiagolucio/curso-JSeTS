// Map() - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map
const pessoas = [
  { id: 2, nome: 'Maria' },
  { id: 1, nome: 'Luiz' },
  { id: 3, nome: 'Eduardo' },
]
// const novasPessoas = {};
// for (const { id, nome } of pessoas) {
//   console.log(id, nome);
//   novasPessoas[id] = {id, nome};
// }
// Na situação abaixo a ordem dos elementos dentro do Objeto é alterada para uma ordem crescente e isso é ruim porque mexe na posição dos itens do objeto
// for (const pessoa of pessoas) {
//   const { id } = pessoa;
//   novasPessoas[id] = {...pessoa};
// }

// Neste caso não mexe nem muda a posição dos elementos no Objeto. Assim como o ID deles. 
const novasPessoas = new Map(); // Preciso fazer um Map para varrer o Array sem alterar ele
// for (const pessoa of pessoas) {
//   const { id } = pessoa;
//   novasPessoas.set(id, {...pessoa}); // seta o id como primeira chave e o objeto "pessoa" como segunda
// }
// for ( const [chave, {id, nome}] of novasPessoas) {
//   console.log('chave: ', chave, id, nome);
// }

for ( const pessoa of novasPessoas.values()) {
  console.log(pessoa);
}
novasPessoas.delete(2); // vai deletar a chave 2

console.log(novasPessoas);
// console.log(novasPessoas);
// console.log('Pessoa com ID 2:', novasPessoas.get(2)); // quer pegar a pessoa com id 2

/* O que foi exemplificado no caso acima é o fato do dev precisar fazer com que o ID do Objeto Pessoa fosse usado como referência
isso é, chave primária dos itens do objeto mas acontece que esses itens não estão ordenados por ordem crescente e sim desordenados
e não se deseja mudar a posição dos itens do objeto pra poder deixar na ordem numérica do ID pra ser retornado... 
Isso é, se a primeira posição é ID 4 e a segunda posição é o ID 1 ele mantém essa ordem original e com isso é necessário usar 
o Map para ordenar os itens pois o Map não altera a posição dos itens do objeto. */
// class Pessoa {
//   constructor(nome, sobrenome) {
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//   }

//   falar() {
//     console.log(`${this.nome} está falando.`);
//   }
// }

// function Pessoa2(nome, sobrenome) {
//   this.nome = nome;
//   this.sobrenome = sobrenome;
// }

// Pessoa2.prototype.falar = function() {
//   console.log(`${this.nome} está falando.`);
// };

// const p1 = new Pessoa('Luiz', 'Miranda');
// const p2 = new Pessoa2('Luiz', 'Miranda');

// console.log(p1);
// console.log(p2);
