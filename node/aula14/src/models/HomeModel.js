const mongoose = require('mongoose');

// Abaixo vc pode criar um schema pra poder testar a conexão com o banco e também se está adicionando corretamente registros nele no MongoDB Remoto
// const HomeSchema = new mongoose.Schema({
//   titulo: { type: String, required: true },
//   descricao: String
// });


const HomeModel = mongoose.model('Home', HomeSchema);

class Home {
// ... trataria os dados como desejado ...
}

// module.exports = HomeModel; // caso use o HomeSchema da linha 4
module.exports = Home;
