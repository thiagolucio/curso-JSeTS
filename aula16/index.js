// Array é um objeto indexado para o javascript
//               0       1        2          3      4
let alunos = ['Luiz', 'Maria', 'João']; // Luiza, Eduardo 
// console.log(typeof alunos);
// console.log(alunos instanceof Array);
// alunos = 123;
alunos.push('Luiza'); // Adiciona no fim
alunos.push('Eduardo');

// alunos.push('Luiza'); // Adiciona no final do array o nome Luiza
// alunos.push('Eduardo'); // igual acima
// alunos.unshift('Fábio'); // Adiciona no inicio - primeira posicao
// alunos.unshift('Luiza');

console.log(alunos.slice(0, -3)); // 

// console.log(alunos[50]);

// delete alunos[1];
// console.log(alunos[1]);

// const removido = alunos.shift(); // remove o PRIMEIRO item do array e salva numa const chamda removido
// console.log(removido);
// console.log(alunos);

// const removido = alunos.pop(); // remove o ULTIMO item do array e salva numa const chamda removido
// console.log(removido);
// console.log(alunos);

// alunos.push('Luiza'); // Adiciona no fim
// alunos.push('Fábio');

// alunos[alunos.length] = 'Luiza';  // Adiciona no fim
// alunos[alunos.length] = 'Fábio';
// alunos[alunos.length] = 'Luana';

// alunos[0] = 'Eduardo'; // Altera
// alunos[3] = 'Luiza'; // Adicionando

// console.log(alunos);
// console.log(alunos[0]);
// console.log(alunos[2]);

delete alunos[1]; // deleta o indice 1 de alunos e deixa o espaço no array vazio
console.log(alunos); // [ 'Luiz', <1 empty item>, 'João' ]
console.log(alunos[1]); // undefined