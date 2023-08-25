const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otávio'
};

// For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)

// for (let i = 0; i < pessoa.length; i++) {
//   console.log(pessoa[i]);
// }

// console.log('####');

// for (let i in pessoa) {
//   console.log(pessoa[i]);
// }

// console.log('####');

// for (let valor of pessoa) {
//   console.log(valor);
// }

// for (let valor of pessoa.nome) {
//   console.log(valor);
// }

// console.log('####');

pessoa.forEach(function(valor, indice, array) {
  console.log(valor, indice, array);
});


const nomes = ['Luiz', 'Otávio', 'thiago', 'gustavo', 'Henrique'];

// for (let i = 0; i < nomes.length; i++) {
//   console.log(nomes[i]);
// }

// for (let i in nomes) {
//   console.log(nomes[i]);
// }

// for (let valor of nomes) {
//   console.log(valor);
// }

// for (let valor of nomes[0]) {
//   console.log(valor);
// }



// nomes.forEach(function(valor, indice, array) {
//   console.log(valor, indice, `\n`, array);
// });