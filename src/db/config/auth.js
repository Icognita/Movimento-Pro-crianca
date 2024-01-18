//cria logica para autecticação
const model=require('../db/models')
const  User=model.User;
const bcrypt=require('bcrypt')
// como estamos usando banco local  usaremos o passport-local
const LocalStrategy= require('passport-local')


//logica

// parei
module.exports= function(passport){
    passport.Use(new LocalStrategy({
        usernameField: "login",
        passworfiled: "senha"
    }, (login, password, done) => {
        User.findOne({
            where: {
                login: login
            }
        }).then((user) => {
            if (!user) {
                return done(null, false, {
                    msg: "Usuario não encontrado"
                });
            }
            const res = bcrypt.compare(password, user.password, (err, resposta) => {
                if (resposta) {
                    return done(null, user)
                } else {
                    return done(null, false, {
                        msg: "Erro ao logar!" + err
                    });
                }

            })

        });

    }));
    //validação de seguarança
    passport.seializeUser((user, done) => {
        done(null, user.id);
    });
    //para saber se o usuario realmente existe
    passport.deserializeUser((id, done) => {
        User.findOne({
            where: {  id: id }
        }).then((res) => {

            if (res) {
                return done(null, false, {
                    msg: "Nao encontrado"
                })
            } else {
                done(null, res);
            }
        })
    })
}





