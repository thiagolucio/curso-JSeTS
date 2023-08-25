function mostraHora() {
  let data = new Date();

  return data.toLocaleTimeString('pt-BR', {
    hour12: false
  });
}

// console.log('HORA ATUAL: ', mostraHora());

// function doInterval() {
//   console.log(mostraHora());
// }
// setInterval(doInterval, 1000);

const timer = setInterval(function() {
  console.log(mostraHora());
}, 1000);


setTimeout(function() { // setTimeOut executa somente uma vez. Ele é usado para parar o código rodando em um determinado tempo
  clearInterval(timer);
}, 3000);


setTimeout(function() {
  console.log('Mensagem do SetTimeout');
}, 5000);

