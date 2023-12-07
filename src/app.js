const express= require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const db = require('./db/models');
const routes = require('./routes/routes')
const app =express();
const PORT = 5656

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(routes);

app.set('view engine', 'ejs'); 

app.listen(PORT,()=>{
   console.log(`Servidor rodando na porta ${PORT}`);
});