// Promisses  - São processos que ocorrem de forma paralela (assíncrono) ao código principal. 
/* 
Um exemplo clássico é que vc precisa se conectar na API de um Banco Remoto e não possui noção exata de quando esses dados serão retornados para vc. 
Usa-se as Promisses pra fazer o gerenciamento dessa operação.
*/

// Um exemplo de como era feito anteriormente com versoes mais velhas do JS
// Usando CallBacks
// function rand(min, max) {
//   min *= 1000;
//   max *= 1000;
//   return Math.floor(Math.random() * (max - min) + min);
// }

// function esperaAi(msg, tempo, cb) {
//   setTimeout(() => {
//     console.log(msg);
//     if (cb) cb();
//   }, tempo);
// }

// esperaAi("Frase 1", rand(1, 3), () => {
//   esperaAi("Frase 2", rand(1, 3), () => {
//     esperaAi("Frase 3", rand(1, 3));
//   });
// });

// Mostrando uma Promisse

// function esperaAi(msg, tempo) {
//   setTimeout(() => {
//     console.log(msg);
//   }, tempo);
// }
// esperaAi('"Frase 1"', 3000); // vai demorar 3000 milissegundos para mostrar "Frase 1"




function rand(min, max) {
  min *= 300;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    // if(typeof msg !== 'string') reject('false');
    // if(typeof msg !== 'string') reject('BAD VALUE');
    if(typeof msg !== 'string') reject(new Error());

    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

esperaAi('Conexão com o BD', rand(1, 3))
  .then(resposta => { // resposta é a resposta do "resolve"
    console.log(resposta);
    return esperaAi('Buscando dados da BASE', rand(1, 3));
  })
  .then(resposta => {
    console.log(resposta);
    return esperaAi(999999, rand(1, 3));
  })
  .then(resposta => { // vc pode usar encadiando os ".then"
    console.log(resposta);
  }).then(() => {
    console.log('Exibe dados na tela');
  })
  .catch(e => {
    console.log('ERRO:', e);
  });

console.log('Isso aqui será exibido antes de qualquer promisse.');
