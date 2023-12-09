const express = require('express')
const ejs = require('ejs');
const app = express()
const router = require('./routes/routes')

//conexao com o bando
const db = require('./db/models/index');

app.use(express.json());
app.use(router)

app.set('view engine', "ejs");

app.listen(565, () => {
   console.log("servidor rodando na porta5656");
})