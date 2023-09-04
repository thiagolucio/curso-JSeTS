// Funcao MAP - Vai alterar valores do seu array. Com isso ele sempre terá o mesmo tamanho do que originou mas com os valores alterados.
//               0  1   2   3  4 .....
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const numerosEmDobro = numeros.map((function(valor) {
//   return `Thiago -> ${valor}`;
// }));
// console.log(numerosEmDobro);

// const numerosEmDobro = numeros.map(valor => valor * 2); // vai varrer o Array aplicando o dobro em cada valor de cada posição do Array gerando outro Array com os resultados
// console.log(numerosEmDobro);

// Para cada elemento:


// Adicione uma chave id em cada objeto (id)
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];
// EXERCICIOS DE FIXACAO

// 1 - Retorne apenas uma string com o nome da pessoa
// const nomes = pessoas.map(obj => obj.nome);
// const idades = pessoas.map(obj => ({ idade: obj.idade }));


// 2 - Remova apenas a chave "nome" do objeto

// Para mostrar só a chave idade podemos remover os nomes do objeto e retornar ele em seguida. Com o novo array contendo só idades
// const idades = pessoas.map(function(obj) {
//   delete obj.nome;
//   return obj;
// })
// console.log(idades);

// Aqui podemos mostrar só as idades construindo um novo array com map que possui a chave idade que recebe por atribuição as idades do objeto original
// const idades = pessoas.map(function(obj) {
//   return {idade: obj.idade}; // aqui está retornando um objeto novo e atribuindo a ele a chave idade
// })

// jeito mais fácil de resolver a expressão anterior
// const idades = pessoas.map(obj => ({ idade: obj.idade })); // no que vc coloca o objeto dentro de uma expressão retorna um objeto no caso de uma arrow function

// console.log(idades);


// 3 - Remova apenas a chave "nome" do objeto

// JEITO ERRADO - Vc realmente altera os valores no array original neste exemplo
// const comIds = pessoas.map(function(obj, indice) {
//   obj.id = (indice + 1) * 1000; // ou pode usar um id gerado por vc mesmo
//   obj.id = indice; // pode usar o id já existente
//   return obj;
// });

// JEITO CERTO - Vc cria um novo Array a partir do Array original alterado
const comIds = pessoas.map(function(obj, indice) {
  const newObj = { ...obj };
  newObj.id = indice; // pode usar o id já existente
  // newObj.id = (indice + 1) * 1000; // ou pode usar um id gerado por vc mesmo
  return newObj;
});

console.log(pessoas);
console.log(comIds);
