const verdadeira = true;

// Let tem escopo de bloco { ... bloco }
// Var só tem escopo de função. É global e pode ser usada em qualquer lugar dentro ou fora do escopo

// let nome = 'Luiz'; // criando aceito por estar dentro do escopo
// var nome2 = 'Luiz'; // criando


// if (verdadeira) {
//   let nome = 'Otávio'; // criando aceito por estar dentro do escopo
//   var nome2 = 'Rogério'; // redeclarando

//   if (verdadeira) {
//     var nome2 = 'Ronaldo'; // redeclarando
//     let nome = 'Outra coisa';
//   }
// }

// console.log(nome, nome2);  


// function falaOi () {

//   if (verdadeira) {
//     let nome = 'Luiz';
//     var sobrenome = 'Miranda';
//   }

//   console.log(sobrenome);

// }

// falaOi();
// A ordem de execução dos escopos é de dentro pra fora quando usamos a declaraçao let. Do escopo mais dentro da funcao para fora
// Os Blocos de função são especiais e protegem suas variáveis de escopos
let sobrenome = 'Miranda';
console.log(sobrenome);
