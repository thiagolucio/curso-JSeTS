const Contato = require('../models/ContatoModel');

exports.index = (req, res) => {
  res.render('contato', {
    contato: {}
  });
};

exports.register = async(req, res) => {
  try {
    const contato = new Contato(req.body);
    await contato.register();

    if(contato.errors.length > 0) {
      req.flash('errors', contato.errors);
      req.session.save(() => res.redirect('back'));
      return;
    }

    req.flash('success', 'Contato registrado com sucesso.');
    req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`));
    return;
  } catch(e) {
    console.log(e);
    return res.render('404');
  }
};

exports.editIndex = async function(req, res) {
  if(!req.params.id) return res.render('404'); // se o parametro "ID" do usuário não for enviado ele já retorna o erro 404

  const contato = await Contato.buscaPorId(req.params.id);
  if(!contato) return res.render('404');

  res.render('contato', { contato });
};

// editar o contato quando já existente
exports.edit = async function(req, res) {
  try {
    if(!req.params.id) return res.render('404');
    const contato = new Contato(req.body);
    await contato.edit(req.params.id);

    if(contato.errors.length > 0) {
      req.flash('errors', contato.errors);
      req.session.save(() => res.redirect('back'));
      return;
    }

    req.flash('success', 'Contato editado com sucesso.');
    req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`));
    return;
  } catch(e) {
    console.log(e);
    res.render('404');
  }
};

exports.delete = async function(req, res) {
  if(!req.params.id) return res.render('404'); // se não receber um ID retorna o 404

  const contato = await Contato.delete(req.params.id); // vai varrer em busca do contato  pelo id e delete ele
  if(!contato) return res.render('404'); // se ele não encontrar o contato, ele retorna o erro

  req.flash('success', 'Contato apagado com sucesso.'); // se encontrou o contato e também deletou ele manda mensagem de sucesso
  req.session.save(() => res.redirect('back')); // aqui ele salva a sessão primeiro e redireciona para página anterior
  return;
};
