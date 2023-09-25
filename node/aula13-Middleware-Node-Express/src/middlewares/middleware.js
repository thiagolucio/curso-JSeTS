exports.middlewareGlobal = (req, res, next) => {
  if (req.body.cliente) { // o "name" do input do formulário é "cliente" na index
    console.log();

    console.log(`Vi que você postou ${req.body.cliente}`); // o "name" do input do formulário é "cliente" na index

    console.log();

  }
  next();
};

exports.outroMiddleware = (req, res, next) => {
  req.body.cliente = req.body.cliente.replace('Miranda', 'Thiago'); // vai interceptar a requisição e substituir o nome
  next();
};
