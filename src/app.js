const express = require("express");
const ejs = require("ejs");
const bodyParser = require('body-parser')
const app = express();
const routes = require('./routes/routes')
PORT = 5656;

 //conexao com o bando
const db = require('./db/models');


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(routes);

app.set("view engine", "ejs");
app.set('views', 'src/view'); // Configurando ejs

app.get("/mpc/cadastroAluno", function (req, res) {
  res.render("../src/view/page/formCadastroAluno.ejs");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`); //Template String e exibir porta
});
