 const Contato = require('../models/ContatoModel');

exports.index = async(req, res) => {
  const contatos = await Contato.buscaContatos(); // vai receber o resultado da promisse em "ContatoModel, na linha 67" que será uma lista decrescente pela data de criação.
  res.render('index', { contatos }); // aqui está injetando contatos dentro do "index/ pagina principal a home". Que será a lista decrescente recebida acima.
};