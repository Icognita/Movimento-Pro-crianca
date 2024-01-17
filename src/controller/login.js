const passport=require('passport')
module.exports={
    async login(req,res,next){
        passport.authenticate('local',{
            sucessREdirect:"/login/Sucesso",
            failureRedirect:"/login/Fracasso"
        }(req,res,next));
    },
    async loginSucess(req,res){
        return res.send("usario logado com sucesso");
    },
    async loginFailure(req,res){
        return res.send('Não foi possivel Logar: Verifique seu login e senha')
    }

}


        