const express= require('express')
const ejs = require('ejs');
 const app =express()

 //conexao com o bando
const db = require('./db/models/index')

 app.set('view engine', "ejs"); 

 app.listen(5656,()=>{
    console.log("servidor rodando na porta5656");
 })