const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

// Rotas da home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

// Rotas de contato
route.get('/contato', contatoController.paginaInicial);

// Os mesmos codigos abaixo podem ser encontrados em "src/middlewares/"

// function meuMiddleware(req, res, next) {
//    req.session = {nome: 'Thiago', senha: '123'};
//     console.log('Meu middleware');
//     next(); // vc usa o next() pra passar pro próximo middleware. Usa-se o next() para seguir executando
// }
// // route.get('/contato', meuMiddleware, contatoController.paginaInicial); // middleware é o nome dado para os nomes parametros
// // vc sempre vai usar o next pra poder continuar executando o outros items (middlewares) que devem ser executados depois. 
// // sem usar o next() ele não vai terminar de ficar carregando nunca no navegador
// segundo exemplo de rota pra middleware 
// route.get('/contato', meuMiddleware, contatoController.paginaInicial, function(req, res, next) {
//     console.log('::::Finalizando tudo agora:::::');
//     next();
// });


module.exports = route;

