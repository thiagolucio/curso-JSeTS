// vc vai declarar o mesmo nome do controller "paginaInicial" que foi criado anteriormente em homeController.js porque vc quer tratar na mesma página a mesma rota
exports.paginaInicial = (req, res) => {
  res.send('Obrigado por entrar em contato.');
};


/* 
Explicando ... quando o usuário entrar na URL "/contato" ele vai reseber o texto do send ali na linha 3 no corpo da requisição

Os arquivos de rota costumam a fica grandes de forma que é melhor vc descentralizar dessa forma por rotas criando um arquivo para cada rota como aqui um pra contato
*/