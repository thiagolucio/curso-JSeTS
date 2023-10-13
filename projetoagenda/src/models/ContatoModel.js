const mongoose = require('mongoose');
const validator = require('validator');

const ContatoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  sobrenome: { type: String, required: false, default: '' },
  email: { type: String, required: false, default: '' },
  telefone: { type: String, required: false, default: '' },
  criadoEm: { type: Date, default: Date.now },
});

const ContatoModel = mongoose.model('Contato', ContatoSchema);

function Contato(body) {
  this.body = body;
  this.errors = [];
  this.contato = null;
}

Contato.prototype.register = async function() {
  this.valida();
  if(this.errors.length > 0) return;
  this.contato = await ContatoModel.create(this.body);
};

Contato.prototype.valida = function() {
  this.cleanUp();
  // O e-mail precisa ser válido
  if(this.body.email && !validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');
  if(!this.body.nome) this.errors.push('Nome é um campo obrigatório.');
  if(!this.body.email && !this.body.telefone) {
    this.errors.push('Pelo menos um contato precisa ser enviado: e-mail ou telefone.');
  }
};

Contato.prototype.cleanUp = function() {
  for(const key in this.body) {
    if(typeof this.body[key] !== 'string') {
      this.body[key] = '';
    }
  }

  this.body = {
    nome: this.body.nome,
    sobrenome: this.body.sobrenome,
    email: this.body.email,
    telefone: this.body.telefone,
  };
};

Contato.prototype.edit = async function(id) {
  if(typeof id !== 'string') return; // se o id for diferente de uma string já retorne o erro
  this.valida();
  if(this.errors.length > 0) return; // se tiver mais de 0 erros (qualquer erro) retornando de valida() entaum retorne o erro
  this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, { new: true }); // encontra o dado pelo id e atualiza as informações deste usuário cadastrado "findByIsAndUpdate" é uma funcao que procura pelo id e atualiza as infos
};

// Métodos estáticos
Contato.buscaPorId = async function(id) {
  if(typeof id !== 'string') return; // Se o ID for diferente de string retorna id
  const contato = await ContatoModel.findById(id); // procura por um id igual ao id enviado
  return contato; // retorna o contato se tudo ok
};

Contato.buscaContatos = async function() {
  const contatos = await ContatoModel.find()
    .sort({ criadoEm: -1 }); // para que os contatos mostrados sejam ordenados pela ordem em que foram criados decrescente. Isso é. Do mais recente pro menos recente. Ordem decrescente. Por isso o "-1". "-1 = descrescente/ 1 = crescente"
  return contatos;
};

Contato.delete = async function(id) { // a funcao recebe o id deletado da ContatoController (linha 68)
  if(typeof id !== 'string') return; // verifica se o id é diferente de string e se for retorna
  const contato = await ContatoModel.findOneAndDelete({_id: id}); // contato recebe o usuário procurado pelo ID e deletado...Vc deve indicar o objeto com filtro id pra poder deletar exatamente o id desejado
  return contato; // retornando o contato no final
};

module.exports = Contato;
