/* Declaração de função (Function hoisting) - Leva a função para o topo. Isso é vc poderia ter chamado essa função 
declarando ela antes da própria função. O local onde vc declarar pouco importaria. 
*/
falaOi();
function falaOi() {
  console.log('Oie');
}

// First-class objects (Objetos de primeira classe). Só podem ser invocados após terem sido declarados.
// Function expression
const souUmDado = function() {
  console.log('Sou um dado.');
};
souUmDado();

// Arrow function
const funcaoArrow = () => {
  console.log('Sou uma arrow function');
};
funcaoArrow();

// Dentro de um objeto
const obj = {
  falar() {
    console.log('Estou falando...');
  }
};
obj.falar();


// Hoisting é o comportamento padrão do JavaScript para que funções e variáveis sejam declaradas antes de serem usadas. 
// No topo do documento. De forma elevada