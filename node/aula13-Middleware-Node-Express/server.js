const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
// const meuMiddleware = require('./src/middlewares/middleware'); // vc pode declarar assim tb fora das chaves "nominando" o arquivo
const { middlewareGlobal, outroMiddleware } = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Nossos próprios middlewares declarados antes das rotas
// app.use(meuMiddleware); // no caso da linha 5 ficaria declarado dessa forma
// app.use(middlewareGlobal);
// app.use(outroMiddleware);
app.use(middlewareGlobal, outroMiddleware);
app.use(outroMiddleware);
app.use(routes);

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando na porta 3000');
});

