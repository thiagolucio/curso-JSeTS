function retornaData(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError('Esperando instância de Date.');
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit', // formata hora com dois digitos
    minute: '2-digit',  //  formata minutos com dois digitos
    second: '2-digit', // formata segundos com dois digitos
    hour12: false // usado para formatar a hora no formato de 12 ou 24 horas. false significa 24 horas (13, 14, 15h...)e true significa 12 horas (1, 2, 3h...)
  });
}

try {
  // const data = new Date('01-01-1970 12:58:12');
  const hora = retornaData();
  console.log(hora);
} catch(e) {
  // Tratar erro
  // console.log(e);
} finally {
  console.log('Tenha um bom dia.');
}
