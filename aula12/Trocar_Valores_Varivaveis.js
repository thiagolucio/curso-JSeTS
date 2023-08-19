// Fazer uma variável receber o valor da outra variável

let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const temp = varA;

[varA, varB, varC] = [varB, varC, varA]; // vc troca os valores em relação a posição declarada no segundo array

console.log(varA, varB, varC);
