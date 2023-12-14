//cria logica para autecticação
const model=require('../db/models')
const  User=model.User;
const bcrypt=require('bcrypt')
// como estamos usando banco local  usaremos o passport-local
const LocalStrategy= require('passport-local')


//logica

// parei
module.exports= function(passport){
    passport.Use(new LocalStrategy({usernameField:"login",pass}))

}