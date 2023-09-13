// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

// renomeou nome pra nome2
// import Pessoa, { nome as nome2, sobrenome, idade, genderType, soma } from './modulo1';


// console.log(genderType); // importou variavel renomeada

// const nome = 'Thiago';
// console.log(nome);


// console.log(nome2, sobrenome, idade);
// console.log(soma(5,5));


// const p1 = new Pessoa(nome, sobrenome);
// console.log(p1);



/* 
Voce tambem pode importar tudo que esta em ./modulo1 de uma vez
criando um modulo so pra isso como pode ser visto abaixo
*/

// import * as MeuModulo from './modulo1';

// console.log(MeuModulo);
// console.log(MeuModulo.idade);



// Uma forma mais simples ainda é escolhendo um export como default
// So pode ter um default por arquivo
import qualquerNome from './modulo1';
console.log(qualquerNome(5,5)); // estamos importando a classe default que é soma