const model=require('../db/models')
const  User=model.User;

// criando funcao assicrona
module.exports={
    async CriarUsuario(req, res){
       try{
         const {
          name,
          login,
          senha_hash
         }=req.body;

        const SalvarUsuario=await User.create({
            name,
            login,
            senha_hash
        });
        //para a senha não aparecer para no banco
        SalvarUsuario.senha_hash=undefined
        
        return res.json({ SalvarUsuario})
    }catch (err){
        return res.json({msg:"Error ao salvar usuario"+err})
    }
    }
}