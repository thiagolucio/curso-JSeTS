// Escopo léxico:  A função conhece o local onde ela foi declarada. A função vai automaticamente subindo o escopo até
// o escopo global

const nome = 'Luiz';

function falaNome() {
  // const nome = 'Otávio'; // se declarado todas funcoes abaixo vao mostrar Otávio.
  console.log(nome); // Luiz
}

function usaFalaNome() {
  const nome = 'Otávio';
  falaNome(); // Otávio
  console.log('nome:', nome, 'falaNome:', falaNome());
}

falaNome(); // Luiz
falaNome('Augusto');
usaFalaNome(); // Luiz
