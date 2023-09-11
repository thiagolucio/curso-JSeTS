// Promisses



function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof msg !== 'string') {
        reject('Erro!'); // o erro pode ser tratado do jeito que vc quiser
        return;
      }

      resolve(msg.toUpperCase() + ' - Passei na promise');
      return; // ele é redundante porque não tem mais nada pra baixo.
    }, tempo);
  });
}

// Promisses - Exemplos de Promisse.all, Promisse.race, Promisse.resolve, Promisse.reject
// const promissesAll = [
//   'Primeiro valor',
//   esperaAi('Promisse 1', 200),
//   esperaAi('Promisse 2', 400),
//   esperaAi('Promisse 3', 600),
//   // esperaAi(1000, 1000), // vai gerar erro porque o primeiro parâmetro esperado é uma string. Vai direto para o catch de baixo. Ele captura o erro.
//   'Outro valor'
// ];

// Promisse.all - Faz com que todas as promisses sejam resolvidas
// Promise.all(promissesAll).then(
//   function(valor) {
//     console.log(valor);
//   }
// ).catch (
//   function(erro) {
//     console.log(erro);
//   }
// );



// Promisse.race - É como uma corrida. Cada promisse vai ser resolvida em ordem de chegada
// const promissesRace = [
//   esperaAi('Promisse 1', rand(1, 3)), // aqui o tempo é aleatório
//   esperaAi('Promisse 2', rand(1, 3)),
//   esperaAi('Promisse 3', rand(1, 3)),
// ];
// Promise.race(promissesRace).then(
//   function(valor) {
//     console.log(valor);
//   }
// ).catch (
//   function(erro) {
//     console.log(erro);
//   }
// );

// Promisse.resolve - Faz com que a promisse seja resolvida
function baixaPagina() {
  const emCache = false; // se passar pra false cai no erro .catch

  if(emCache) {
    return Promise.resolve('Página em cache');
  } else {
    return esperaAi('Baixei a página', 2000);
  }
}

baixaPagina()
  .then(dadosPagina => {
    console.log(dadosPagina);
  })
  .catch(e => console.log('ERRO:> ', e));

  // Promisse.reject
  function baixaPagina() {
    const emCache = true; // se passar pra false cai no erro .catch
  
    if(emCache) {
      return Promise.reject('Página em cache'); // reject passa o erro ou outro tratamento desejado
    } else {
      return esperaAi('Baixei a página', 2000);
    }
  }
  
  baixaPagina()
    .then(dadosPagina => {
      console.log(dadosPagina);
    })
    .catch(e => console.log('ERRO:> ', e));