// Escreva uma função que recebe 2 números e 
// retorne o maior deles

// Forma mais simples
// function max(x,y) {
//     if(x > y) {
//         return x;
//     } 
//         return y;
//     }

// console.log(max(10, 5));

// Forma melhorada
// function max(x,y) {
//     if(x > y) {
//         return x;
//     } 
//         return y;
//     }

// console.log(max(10, 5));

// Forma Arrow Function
// const max = (x, y) => {
//   return x > y ? x : y;
// };


// Forma mais melhorada possível
const max2 = (x, y) => x > y ? x : y;
console.log(max2(10, 5));