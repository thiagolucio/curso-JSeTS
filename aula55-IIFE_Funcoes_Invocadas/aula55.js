// IIFE -> Immediately invoked function expression
// Esse tipo de funcao é invocada automaticamente é como se auto-executar. 
// Como esse tipo de funcao nao tem nome ele nao toca no escopo global (window)
(function(nome, peso, altura) { 

  const sobrenome = 'Lúcio Bittencourt';
  function criaNome(nome) {
    return nome + ' ' + sobrenome;
  }

  function falaNome() {
    console.log(criaNome('Thiago'));
  }

  falaNome();
  console.log(nome, peso, altura);

})(' ', 90, 1.96); // Incluindo os valores a serem passados menos o primeiro que já vai ser preenchido com o meu nome então passamos vazio.
// fora do escopo 
const nome = 'Este código está no escopo Global!';
console.log(nome);