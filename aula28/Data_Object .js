// const data = new Date(); // ano, mes, dia, hora, minuto, segundos, milisegundos
// Mais informacoes: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
function zeroAEsquerda (num) {
  return num >= 10 ? num : `0${num}`; // se o numero for menor que 10 adiciona um 0 antes do numero

function formataData(data) {
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1); // mes começa do zero
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const seg = zeroAEsquerda(data.getSeconds());
  const diaSemana = zeroAEsquerda(data.getDay()); // 0: domingo, 1: segunda, 2: terça, 3: quarta, 4: quinta, 5: sexta, 6: sábado, 7: domingo

  return ` Dia da semana: ${diaSemana} - Data: ${dia}/${mes}/${ano} - Hora: ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);


