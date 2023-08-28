// function falaFrase(comeco) {
//   function falaResto(resto) {
//     return comeco + ' ' + resto;
//   };
//   return falaResto
// }
// const olaMundo = falaFrase('Olá');
// console.log(olaMundo('Mundo')); // saída Olá Mundo



// Exemplo de funcao Clousure que fecha o escopo mesmo depois dele ter sido usado. Isso é...depois de ser declarado e usado só mais pra frente é que vc encontra a funcao que vai finalmente executá-lo.

function criaMultiplicador(multiplicador) {
  // multiplicador
  return function(n) {
    return n * multiplicador; // aqui o grande lance é o multiplicador. É retornado nessa funcao
  };
}
// É feito o fechamento da função ancestral dela. Uma FUNCAO CLOUSURE
const duplica = criaMultiplicador(2); // pega o valor passado no console.log abaixo e multiplica por 2. E armazena o fechamento na constante duplica...
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(3));
console.log(triplica(2));
console.log(quadriplica(10));