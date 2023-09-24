exports.paginaInicial = (req, res) => {
  res.render('index'); // aqui vc passa a mandar renderizar a pagina index em "views". Que é a página inicial/ principal da aplicação
};

exports.trataPost = (req, res) => {
  res.send('Ei, sou sua nova rota de POST.');
};
