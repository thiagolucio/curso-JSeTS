const express = require('express');
const route = express.Router(); // importa a fuuncao de rotas do express e deu nome de "route"
const homeController = require('./controllers/homeController'); // importando o controller da home
const contatoController = require('./controllers/contatoController'); // importando o controler do contato

// Ao invés de usar "app.get" a gente usa "route.get"
// Rotas da home. Vc importa o "homeController" porque vc quer importar tudo que tiver nesse arquivo (paginaInicial, trastaPost, etc)
route.get('/', homeController.paginaInicial); // rota de GET - nome do arquivo e do controller
route.post('/', homeController.trataPost); // rota de POST - nome do arquivo e controller

// Rotas de contato
route.get('/contato', contatoController.paginaInicial); // rota de GET - nome do arquivo e do controller


module.exports = route; // exportando como "route" - linha 2
