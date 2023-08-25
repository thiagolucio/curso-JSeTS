// Indica o dia da semana em funcao do numero do dia
function getDiaSemanaTexto(diaSemanaParametro) {
  let diaSemanaTexto;

  switch (diaSemanaParametro) {
  case 0:
    diaSemanaTexto = 'Domingo';
    return diaSemanaTexto; // o return substitui o break para parar de executar a sequencia e já devolver o valor  
  case 1:
    diaSemanaTexto = 'Segunda';
    return diaSemanaTexto;
  case 2:
    diaSemanaTexto = 'Terça';
    return diaSemanaTexto;
  case 3:
    diaSemanaTexto = 'Quarta';
    return diaSemanaTexto;
  case 4:
    diaSemanaTexto = 'Quinta';
    return diaSemanaTexto;
  case 5:
    diaSemanaTexto = 'Sexta';
    return diaSemanaTexto;
  case 6:
    diaSemanaTexto = 'Sábado';
    return diaSemanaTexto;
  default:
    diaSemanaTexto = '';
    return diaSemanaTexto;
  }
}

const data = new Date('1987-04-21 00:00:00');
const diaSemana = data.getDay();
const diaSemanaTextoForaFuncao = getDiaSemanaTexto(diaSemana);

console.log(diaSemana, diaSemanaTextoForaFuncao);