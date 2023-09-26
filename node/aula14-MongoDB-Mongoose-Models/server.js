require('dotenv').config(); // usando o dotenv para pegar as variáveis de ambiente

const express = require('express');
const app = express();
const mongoose = require('mongoose'); // usando o mongoose para modelar os dados pra gente. Ele vai tratar os esquemas, validar dados e conectar com o banco


// conectar com o banco de dados mongoDB
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conectado ao banco de dados...');
    app.emit('pronto');
  })
  .catch(e => console.log(e), 'Erro ao tentar conectar com o banco de dados');

const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public'))); 

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Nossos próprios middlewares
app.use(middlewareGlobal);
app.use(routes);

app.on('pronto', () => { // vai ser executada quando recebet emitido na linha 11 'pronto'
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  });
});
