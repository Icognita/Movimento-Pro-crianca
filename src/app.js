const express= require('express')
const ejs = require('ejs');
 const app =express()

 app.set('view engine', "ejs"); 

 app.listen(5656,()=>{
    console.log("servidor rodando na porta5656");
 })