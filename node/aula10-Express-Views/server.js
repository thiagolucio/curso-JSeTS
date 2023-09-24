const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path'); // tratar os camimnhos absolutos do projeto - aconselhável trabalhar com caminhos absolutos nos projetos 

app.use(express.urlencoded({ extended: true }));

// indicacao de caminhos de projeto e engine que deve ser usada 
app.set('views', path.resolve(__dirname, 'src', 'views')); // seta o caminho absoluto para pasta "views" como pasta a ser usada
// app.set('views', path.resolve(__dirname, './src/views', 'views')); // seta o caminho relativo e é desaconselhável
app.set('view engine', 'ejs'); // seta o engine como ejs (npm install ejs) que é o que mais parece com html para usar JS dentro do HTML

app.use(routes);

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando na porta 3000');
});

