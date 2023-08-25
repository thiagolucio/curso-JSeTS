// Escreva uma função chamada ePaisagem que 
// que recebe dois argumentos, largura e altura 
// de uma imagem (number).
// Retorne true se a imagem estiver no modo
// paisagem.


// const ePaisagem = (largura, altura) => {
//     const  result =  largura >= altura ? true : false;
//     console.log(result);
// }

// ePaisagem(300, 199);

// Simplificando 1
// function ePaisagem(largura, altura) {
//   return largura >= altura ? true : false;
// }



// Simplificando 2
// function ePaisagem(largura, altura) {
//   return largura >= altura;
// }

// Simplificando 3
const ePaisagem = (largura, altura) => largura > altura;
console.log(ePaisagem(1920, 1080));
