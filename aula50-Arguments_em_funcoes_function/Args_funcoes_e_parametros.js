/*
 Arguments : É uma propriedade implicita do JS que tem a funçao de receber os argumentos que vc declarar na chamada da funcao. 
 Mesmo que não declarados como parâmetros. Entre os () da funcao declarada. 
 */

 // A funcao definida com a palavra "function" possui uma variável especial que se chama "arguments" 
 // que sustenta todos os argumentos enviados na chamada da função Mesmo que não declarados como parâmetros. 
 // Entre os () da funcao declarada.

//  function funcao() {
//   console.log(arguments)
// }
// funcao('+', 1, 20, 30, 40, 50);


//  function funcao() {
//   console.log(arguments[0])
// }
// funcao('+', 1, 20, 30, 40, 50);


//  function funcao() {
//   let total = 0;
//   for (let argumento of arguments) {
//     total += argumento;
//   }
//   console.log(total);
// }
// funcao(1, 20, 30, 40, 50);


// function funcao() {
//   console.log(a, b, c, d, e, f);
// }
// funcao(1,2,3); // 1, 2, 3, undefined, undefined, undefined


// function funcao(a,b = 2) {
// function funcao(a,b) {
//   b = b || 2;
//   console.log(a + b);
// }
// funcao(2);


// function funcao(a,b=2, c=4) {
//   b = b || 2;
//   console.log(a + b + c);
// }
// funcao(2, undefined, 10); // Só o "undefinned" fará com que não dê erro no b


// const conta = (...args) => {
//   console.log(args);
// };
// conta('+', 1, 20, 30, 40, 50);


// function funcao({nome, sobrenome, idade}) {
//   console.log(nome, sobrenome, idade);
// }
// funcao({nome: 'Thiago', sobrenome: 'Lucio', idade: 22});


// function funcao([valor1, valor2, valor3]) {
//   console.log(valor1, valor2, valor3);
// }
// funcao(['Thiago', "Lucio", 44])

// function conta(operador, acumulador, ...numeros) {
//   console.log(operador, acumulador,numeros);
// }
// conta('+', 1, 20, 30, 40, 50); // operador = '+ ',  acumulador = 1,  ..numeros = 20...50 (todo resto)



// function conta(operador, acumulador, ...numeros) {
//   for(let numero of numeros) {
//     acumulador += numero;
//     console.log(numero);
//   }
//   console.log('ACUMULADOR>', acumulador);
// }
// conta('+', 1, 20, 30, 40, 50); 


// Melhoria da funcao anterior
// function conta(operador, acumulador, ...numeros) {
//   for(let numero of numeros) {
//     if(operador === '+') acumulador += numero;
//     if(operador === '-') acumulador -= numero;
//     if(operador === '/') acumulador /= numero;
//     if(operador === '*') acumulador *= numero;
//     console.log(numero);
//   }
//     if(operador === '+') console.log('ACUMULADOR SOMA = ', acumulador);
//     if(operador === '-') console.log('ACUMULADOR SUBTRAÇÃO = ', acumulador);
//     if(operador === '/') console.log('ACUMULADOR DIVISÃO = ', acumulador);
//     if(operador === '*') console.log('ACUMULADOR MULTIPLICAÇÃO = ', acumulador);
// }
// conta('+', 1, 20, 30, 40, 50); 
// conta('-', 1, 20, 30, 40, 50); 
// conta('/', 1, 20, 30, 40, 50); 
// conta('*', 1, 20, 30, 40, 50); 


// Função anterior com atribuição de variável

// const conta = function(operador, acumulador, ...numeros) {
//   for(let numero of numeros) {
//     if(operador === '+') acumulador += numero;
//     if(operador === '-') acumulador -= numero;
//     if(operador === '/') acumulador /= numero;
//     if(operador === '*') acumulador *= numero;
//     console.log(numero);
//   }
//     if(operador === '+') console.log('ACUMULADOR SOMA = ', acumulador);
//     if(operador === '-') console.log('ACUMULADOR SUBTRAÇÃO = ', acumulador);
//     if(operador === '/') console.log('ACUMULADOR DIVISÃO = ', acumulador);
//     if(operador === '*') console.log('ACUMULADOR MULTIPLICAÇÃO = ', acumulador);
// };
// conta('+', 1, 20, 30, 40, 50); 
// conta('-', 1, 20, 30, 40, 50); 
// conta('/', 1, 20, 30, 40, 50); 
// conta('*', 1, 20, 30, 40, 50); 


// const conta = function(operador, acumulador, ...numeros) {
//   console.log(arguments);
// };
// conta('+', 1, 20, 30, 40, 50); 


// Como ficaria a função anterior usando Arrow Functions
// Arrow Functions não aceitam recursos arguments de functions. 

// const conta = (operador, acumulador, ...numeros) => {
//   console.log(operador, acumulador, numeros);
// };
// conta('+', 1, 20, 30, 40, 50);


// Mais simplificada ainda
const conta = (...args) => {
  console.log(args);
}
conta('+', 1, 20, 30, 40, 50);