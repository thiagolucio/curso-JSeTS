const express = require('express');
const app = express();
const routes = require('./routes'); // importa rotas do arquivo "routes.js"

/* a declaração abaixo é o que permite que seja tratado o body da requisição (no post). 
Sem declarar não haverá tratamento, o body virá como undefined */
app.use(express.urlencoded({ extended: true })); 
app.use(routes); // declarando para que o server use o routes para tratar as rotas

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando na porta 3000');
});

