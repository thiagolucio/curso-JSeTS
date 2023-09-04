// Filter -> Sempre retornar um array, com a mesma quantidade de elementos ou menos

// Retorne os números maiores que 10
//               0  1   2   3  4 .....
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// pode trabalhar com o valor ou índice do array ou até mesmo o próprio array
// function callbackFilter(valor, indice, array) { 
// mas no caso abaixo só estamos usando o valor como parâmetro
// function callbackFilter(valor) {  
  // jeito menos eficiente
  // if (valor > 10) {
  //   return true;
  // }
  // return false;

  // jeito mais eficiente ou até mesmo o jeito normal
  // return valor > 10;
// }
// const numerosFiltrados = numeros.filter(callbackFilter); // vc pode eliminar esse código declarando a funcao anonima direto no parametro do filter

// Eliminando a chamada acima declarando direto dentro do filter convertendo em funcao anonima
// const numerosFiltrados = numeros.filter(valor => valor > 10);


// mostrando os índices e arrays tb
// const numerosFiltrados = numeros.filter((valor, indice, array) => {
//   console.log("valor: ", valor);
//   console.log("indice: ", indice);
//   console.log("Array: ", array);
// });

// console.log(numerosFiltrados);

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const numerosFiltrados = numeros.filter(function(valor, indice, array) {
//   console.log('valor: ', valor, ' - indice: ', indice, ' - array: ', array);
//   return valor > 10;
  // console.log(valor.nome);
  // console.log(valor.idade);
  // return valor.nome.length >= 7; // funciona e verifica o tamanho do String maior que 5
// })

// console.log(numerosFiltrados)

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];

// const pessoasComNomeGrande = pessoas.filter(function(obj) {
  // console.log(obj);
  // console.log(obj.nome);
  // console.log(obj.idade);
  // return obj.nome.length >= 7; // funciona com Strings e arrays e verifica o tamanho do String maior que 7
// })

// usando arrow function de callback 

// const pessoasComNome = pessoas.filter(obj => obj.nome !== 'Eduardo'); // CallBack que Varre todo o array e retorna todos os nomes diferentes de Eduardo
// const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 6); // CallBack que Varre todo o array e retorna os que tem mais de 8 caracteres
// const pessoasComMaisDeCinquentaAnos = pessoas.filter(obj => obj.idade > 50); // CallBack que Varre todo o array e retorna pessoas com mais de 50 anos
// const nomeTerminaComA = pessoas.filter(obj => {obj.nome.toLowerCase().endsWith('a')}); // aqui vc converte todos os Strings de nomes pra minúsculo e não correr o risco de não encontrar o 'a' o "endsWith" é apenas "que termina com..."



// console.log('pessoasComNome', pessoasComNome);
// console.log('pessoasComMaisDeCinquentaAnos', pessoasComMaisDeCinquentaAnos); 
// console.log('pessoasComNomeGrande', pessoasComNomeGrande);
console.log('nomeTerminaComA', nomeTerminaComA);
