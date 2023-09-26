// Adicionando um registro na base de dados mongo (já aproveita pra testar a conexão)
// const HomeModel = require('../models/HomeModel');
// HomeModel.create({
//   titulo: 'Um título para testar',
//   descricao: 'Uma descricao para testar'
// })
// .then(dados => console.log(dados))
// .catch(e => console.log(e));

// Para procurar os registros ou para trazer os registros para o front. Ele retorna todos os registros(lista)
// HomeModel.find()
// .then(dados => console.log(dados))
// .catch(e => console.log(e));

exports.paginaInicial = (req, res) => {
  res.render('index');
  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
};
