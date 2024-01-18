PORT = 5656;
const express = require("express");
const path= require("path");
const ejs = require("ejs");
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/routes');
const session =require('express-session');

const passport =require('passport');
// require('./db/config/auth')(passport); 



//conexao com o bando
// const db = require('./db/models');

app.use(session({
  secret:"PassPortLogin",
  resave:true,
  saveUninitialized:true,
}))

app.use(passport.initialize())
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(routes);
app.use(express.static(__dirname + '/public'));

app.set("view engine", "ejs");
app.set('views', 'src/view'); // Configurando ejs


app.get("/mpc/cadastroAluno", function (req, res) {
  res.render("../src/view/page/formCadastroAluno.ejs");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`); //Template String e exibir porta
});
