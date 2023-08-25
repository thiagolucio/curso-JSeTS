// For in -> lê os índices ou chaves do objeto
//                 0       1      2
const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otávio',
  idade: 30
};

// console.log(pessoa.nome);
// console.log(pessoa['nome']);

for (let chave in pessoa) {
  console.log(chave, pessoa[chave]); // ele pega a propriedade(chave) e também o valor da chave(Luiz, Otávio, 30)
}


const frutas = ['Banana', 'Maçã', 'Uva'];

for (let index in frutas) {
  console.log(frutas[index]);
}

// for (let i = 0; i < frutas.length; i++) {
//   console.log(frutas[i]);
// }