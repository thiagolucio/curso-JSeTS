require('dotenv').config(); //  para tratar as variaveis de ambiente e os arquivos .env
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.emit('pronto');
  })
  .catch(e => console.log(e));
const session = require('express-session'); // identificar e gerenciar o navegador do cliente (cookies)
const MongoStore = require('connect-mongo')(session); // é para salvar a sessao no banco de dados
const flash = require('connect-flash'); // para tratar as mensagens. Sao mensagens que depois que vc Lê essas mensagens elas são removidas. Isso é bom pra mandar mensagens pros usuários (erros, etc). Essas mensagens são salvas somente em sessões
const routes = require('./routes');
const path = require('path'); // lida com os caminhos e declaração de path / ou \ em windows e linux por exemplo
const helmet = require('helmet'); // proteger mas desaconselhável em localhost ou servidor sem ssl
const csrf = require('csurf'); // criador de token de formularios internos
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');

app.use(helmet()); // desative para rodar o projeto localhost e também servidor externo sem ssl

app.use(express.urlencoded({ extended: true })); // pode postar formulários para dentro da nossa aplicaçao
app.use(express.json()); // permite que o JSON seja enviado para dentro da nossa aplicacao e se necessário já faça os parses
app.use(express.static(path.resolve(__dirname, 'public'))); // arquivos estaticos que podem ser acessados diretamente

// Abaixo é a configuração de sessão
const sessionOptions = session({
  secret: 'akasdfj0út23453456+54qt23qv  qwf qwer qwer qewr asdasdasda a6()',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
});
app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views')); // arquivos que renderizam na tela setados na pasta views
app.set('view engine', 'ejs'); // usar o EJS

app.use(csrf()); // cria um token
// Nossos próprios middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

// condicao "pronto" atendida entao podemos executar a conexao no BD
app.on('pronto', () => {
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  });
});
