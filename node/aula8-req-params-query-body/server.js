const express = require("express");
const app = express();

// a declaração abaixo é o que permite que seja tratado o body da requisição (no post). Sem declarar não haverá tratamento, o body virá como undefined
app.use(express.urlencoded({ extended: true })); // precisa dele pro método post tratar o dado no corpo da requisicao. Ele é que inclusive mostra no log o que foi mandado na requisicao

app.get("/", (req, res) => {
  res.send(`
  <form action="/" method="POST">
  <p>Nome do cliente: <input type="text" name="qualquercoisa"></p>
  <p>Outro campo: <input type="text" name="aquioutrocampo"></p>
  <button>Clicar</button>
  </form>
  `);
});

app.get("/testes/:idUsuarios?/:parametro?", (req, res) => {
  // "/profiles/3"
  // "/profiles/?chave1=valor1&chave2=valor2&chave3=valor3" // "?" para iniciar query  "&" para adicionar mais um parametro "=" para receber os parametro que será digitado pelo usuario ou que possui tal nome programado
  //
  console.log(req.params); // é o que vem na rota da URL  - retorno aqui será "qualquercoisa" recebendo o que for escrito no primeiro input e "aquioutrocampo" recebendo o que digitado no segundo input
  // console.log(req.query); // é o que vem na query string
  // console.log(req.body); // é o que vem na rquisição do body
  res.send(req.query.facebookprofile);
});

app.post("/", (req, res) => {
  console.log(req.body); // e sempre o que vem dentro do corpo da requisiçao. Ele nao e tratado por padrao. Pra ele poder ser tratado é preciso usar o codigo da linha 4
  res.send(`O que você me enviou foi: ${req.body.qualquercoisa} e ${req.body.aquioutrocampo}`); // ele ta pegando o retorno (req) e (body) ... o que está dentro dele
});

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Servidor executando na porta 3000");
});
