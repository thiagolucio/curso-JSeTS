// paginaInicial é o nome desse controler
exports.paginaInicial = (req, res) => {
  res.send(`
  <form action="/" method="POST">
  Nome do cliente: <input type="text" name="qualquercoisa"><br>
  Outro campo: <input type="text" name="aquioutrocampo">
  <button>Olá mundo</button>
  </form>
  `);
};

// criando uma nova rota e um nome de controller pra ela "trataPost"
exports.trataPost = (req, res) => {
  res.send('Ei, sou sua nova rota de POST.');
};

