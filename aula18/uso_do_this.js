// const array = [1, 2, 3];
// Vc consegue alterar os valores dentro da constante Array
// console.log(array);
// array.push(4);
// array[2] = 'Thiago';
// console.log(array);

// Vc NÃO CONSEGUE reatribuir valor a constante em sí. Para isso deve mudar de 'const' para 'let'
// array = 'Outra'
// console.log(array);

// Acessando o valor dentro do objeto
// const pessoa = {
//   nome: 'Luiz',
//   sobrenome: 'Miranda',
//   idade: 25
// }
// console.log(pessoa.nome, pessoa.sobrenome);


// // Funcao para criar o objeto pessoa
// function criaPessoa (nome, sobrenome, idade) {
//  return {
    // nome: nome,
    // sobrenome: sobrenome,
    // idade: idade
//     nome,
//     sobrenome,
//     idade
//   }
// }
// const pessoal = criaPessoa('Thiago', 'Bittencourt', 45);
// const pessoal2 = criaPessoa('Otavio', 'Bittencourt', 45);
// const pessoal3 = criaPessoa('Ricardo', 'Bittencourt', 45);
// console.log(pessoal);
// console.log(pessoal2);
// console.log(pessoal3);
// console.log(pessoal3.nome, pessoal3.sobrenome, pessoal3.idade);


// Usando o "this" dentro da funcao para ter acesso ao método do objeto. 
// const pessoa = {
//   nome: 'Luiz',
//   sobrenome: 'Miranda',
//   idade: 25,

//   fala() {
//     console.log(`A minha idade atual é ${this.idade}.`); // o this dentro da função nos permite acessar o método dentro do objeto
//   }
// }
// console.log(pessoa.fala());



// executando métodos/ funcoes dentro de um objeto para o mesmo retornar valores. 
// Sao Objetos que são tratados por funções internas e chamados de métodos.
// Usando o "this" dentro da funcao para ter acesso ao método do objeto. 
const pessoa1 = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 25,

  // Esse método usando o this dentro da função nos permite acessar o método dentro do objeto
  fala() {
    
    console.log(`Idade++: ${this.idade}.`); 
  },
  // Esse método usando o this dentro da função nos permite acessar o método dentro do objeto
  incrementaIdade() {
    this.idade++;
  }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();