const express = require('express');
const router =express.Router();
const controllerUsuario=require('../controller/User')

//usuario
router.post('/Criar/Usuario',controllerUsuario.CriarUsuario)

module.exports=router;
const routes = express.Router();

routes.get("/teste", (req, res) => {
    res.send("Funcionado ...")
})

module.exports = router
