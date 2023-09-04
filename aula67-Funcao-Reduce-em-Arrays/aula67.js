// REDUCE - É usado para se reduzir os itens de um array original para um novo array

// Some todos os números (reduce)
//               0  1   2   3  4 .....
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//                                  //  (acumulador, valor, indice, Array) ...
// const total = numeros.reduce(function(acumulador, valor, indice, array) {
//     acumulador += valor; // somando todos os valores do array
//     // console.log(acumulador, valor);

//     return acumulador;
//   }, 0); // 0 é o valor inicial 


// Retorna somente os números pares
// const total = numeros.reduce(function(acumulador, valor, indice, array) {
//   if(valor % 2 === 0) acumulador.push(valor); // ele dá push em um novo array os números pares (divisíveis por dois com resto 0) do array original
//   if(valor % 2 !== 0) // neste exemplo o push é de valores ímpares que o resto da divisão por 2 for diferente de 0
//   acumulador.push(valor * 2); // Aqui está sendo multiplicado por 2 todos os valores do array original
//   return acumulador;
// }, []); // ele inicia com um array vazio para ser preechido pelo retorno
// console.log(total);

// Retorne a pessoa mais velha
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 105 },
  { nome: 'Letícia', idade: 10 },
  { nome: 'Rosana', idade: 64 },
  { nome: 'Wallace', idade: 100},
];
const maisVelha = pessoas.reduce(function(acumulador, valor) {
  if(acumulador.idade > valor.idade) return acumulador; // o acumulador compara a idade anterior com o valor da idade atual e vai retornando a que for maior
  return valor; // se a condição de cima for falsa ele vai retornar o valor atual que já é o maior comparados a todos os posteriores
});
console.log(maisVelha);
