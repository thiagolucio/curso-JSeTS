// NaN - Not a number parseInt (inteiro), parseFloat(decimais)
/**
 *   Aritméticos:
 *      + Operador de adiçao que concatena dois valores
 *      - Subtraçao que subtrai dois valores
 *      * Multiplicação que multiplica dois valores
 *      / Divisão que divide dois valores
 *      ** Potenciaçao que eleva o valor ao quadrado
 *      % Resto da divisão que retorna o resto da divisão
 * 
*      Precedência de operadores:  () ** * / + -
 */
const num1 = 10;
const num2 = Number('Luiz');
const num3 = 20;
const num4 = '1';

console.log(num1 + num2); // NaN
console.log(typeof num2); // number
console.log(num1 + num3); // 30
console.log(num1 - num3); // -10
console.log(num1 - num4); // 9
console.log(num1 + num4); // 101
console.log(typeof(num4)); // string
console.log(num1 ** num3); // 10 elevado a 20 = 100000000000000000000 (1 com 20 zeros)
console.log(num3 / num1); // 2
console.log(num3 / num1); // 2
console.log((num3 + num1) * num1); // 300


// Exemplo simples um contador
let contador = 1;
contador++; // depois do ele executa a ação e depois incrementa o valor. 
console.log('contador: ', contador);
++contador; // incrementa o valor e depois executa a ação
console.log('contador: ', contador);

// console.log(num3++);  Error - Isso porque para poder mudar o valor teria de ser um let

// Mostrando a diferença do operador antes e depois do incremento
let exemplo1 = 1;
console.log(exemplo1++); // 1
console.log(exemplo1); // 2

let exemplo2 = 1;
console.log(++exemplo2); // 2
console.log(exemplo2); // 2

// Decremento (pre e pro decremento)

let exemplo3 = 2;
console.log(exemplo3--); // 2
console.log(exemplo3); // 1

let exemplo4 = 2;
console.log(--exemplo4); // 1
console.log(exemplo4); // 1

// Estipulando os passos de contador

const passo = 2;
let contaPassos = 1;
contaPassos = contaPassos + passo;
console.log('contaPassos - 1: ', contaPassos); // 3
contaPassos = contaPassos + passo;
console.log('contaPassos - 2: ', contaPassos); // pula de 2 em 2
contaPassos +=passo; // 5 - contaPassos = contaPassos + passo (que é 2) 
console.log('contaPassos - 3: ', contaPassos); // 7 - pula de 2 em 2

contaPassos -=passo; // contaPassos = contaPassos - passo (que é 2)
console.log('contaPassos - 4: ', contaPassos); // 5


// Formas de converter Strings em números
const numInt = parseInt('5'); // converte para um número inteiro. 
const numFloat = parseFloat('5.5'); // converte para um número decimal
const numNumber = Number('10'); // converte para um número decimal

console.log('Conversão de String pra Inteiro: ', numInt);
console.log('Conversão de String pra Float: ', numFloat);
console.log('Conversão de String pra Number: ', numNumber);

console.log ('soma: ', numInt + numFloat + numNumber);