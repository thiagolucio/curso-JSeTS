exports.paginaInicial = (req, res) => {
  // req.session.usuario = {nome: 'Thiago', logado: true}; // Esse usuário vai ficar com sessao ativa por 7 dias
  // console.log(req.session.usuario);
  //Testando flash Message - Só funciona uma vez só
  // req.flash('info', 'Seja bem vindo(a)!');
  // req.flash('error', 'Ops! Algo deu errado!');
  // req.flash('success', 'Sucesso!!');
  
  // console.log('info', req.flash('info'));
  // console.log('error', req.flash('error'));
  // console.log('success', req.flash('success'));
  res.render('index');
  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
};
