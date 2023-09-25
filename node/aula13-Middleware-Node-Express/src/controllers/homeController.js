exports.paginaInicial = (req, res) => {
  res.render('index');
  // console.log(`Isso é o que tem na req.session.nome: ${req.session.nome}`);
  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
};
