const express = require("express");
const ejs = require("ejs");
const app = express();
PORT = 5656;

//conexao com o bando
const db = require("./db/models/index");

app.set("view engine", "ejs");

app.get("/mpc/cadastroAluno", function (req, res) {
  res.render("../src/view/page/formCadastroAluno.ejs");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando no endereco http://localhost:${PORT}/mpc`);
});
