// Funcions em JS que possuem retornam valores de parâmetros
// Funcao com parametros: nome, idade, sexo

// function usuario(nome, idade, sexo) {
//     // console.log (`Olá, ${nome}!`);
//     return `Nome: ${nome}, idade: ${idade}, sexo: ${sexo}`;
// }

// const dadosUsuario = usuario('Thiago', 21, 'Masculino');
// console.log(dadosUsuario); // Nome: Thiago, idade: 21, sexo: Masculino

// Functions com exemplos:

// SOMA
// function soma(x,y) {
//     const resultado = x + y;
//     return resultado;
// }

// console.log(soma(2,2));
// console.log(soma(2,3));
// console.log(soma(2,9));

// vc não consegue acessar dentro da funcao soma. 
// console.log(resultado); // ERRO pois resultado não é acessível de FORA DA FUNÇÃO

// Melhoria da funcao - O ideal é sempre que possível setar um valor para inicializar as variaveis e até constantes.
// function soma(x = 1, y = 1) {
//     const resultado = x + y;
//     return resultado;
// }

// const raiz = function(n) {
//     return n ** 0.5;
// }

// console.log(raiz(9));
// console.log(raiz(16));
// console.log(raiz(25));

// Arrow Functions (melhoria da de cima)

// Forma padrao
// const raiz = (n) => {
//     return n ** 0.5;
// }

// Forma reduzida
// const raiz = (n) => n ** 0.5

// Super reduzida
// const raiz = n => n ** 0.5



// function teste(nome, idade) {
//     nome: nome;
//     idade: idade;
//     console.log(`Meu nome é:  ${nome}, e minha idade é: ${idade}`);
//   }  
//   teste('Ricardo', 18);
  
  // Diferença entre funcao normal(acima) e uma arrow function (abaixo)  
//   const teste2 = (nome, idade) => {
//     return `Meu nome é:  ${nome}, e minha idade é: ${idade}`;
//   }
  
//   const segundoNome = teste2('Jorge', 32);
//   console.log(segundoNome);

// Criando uma funcao de uma constante
const raiz = (n) => {
    return n ** 0.5;
}; // neste caso é necessário colocar ponto e vírgula no final


console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));