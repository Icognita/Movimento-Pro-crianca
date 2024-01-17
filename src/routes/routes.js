const express = require('express');
const router =express.Router();
const controllerUsuario=require('../controller/User')
const controllerLogin=require('../controller/login')


//usuario
router.post('/Criar/Usuario',controllerUsuario.CriarUsuario)
router.post('/login',controllerLogin.login)
//verificar autenticação


module.exports=router;
const routes = express.Router();

routes.get("/teste", (req, res) => {
    res.send("Funcionado ...")
})

module.exports = router
