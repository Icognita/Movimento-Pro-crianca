const express = require('express');
const router = express.Router();
const alunoController = require('../controller/alunoController')
const controllerUsuario=require('../controller/User')
const controllerLogin=require('../controller/login')

const validarCadastroAluno = require('../middlewares/validacoes_cadastro_aluno')


//login
router.post('/Criar/Usuario',controllerUsuario.CriarUsuario)
router.post('/cadastrar', validarCadastroAluno, alunoController.criarAluno)  // Rota de cadastro
router.get('/cadastrar', alunoController.telaCadastro)
router.post('/login',controllerLogin.login)
//verificar autenticação

router.get()
module.exports=router;
const routes = express.Router();

routes.get("/teste", (req, res) => {
    res.send("Funcionado ...")
})
const validarCadastroAluno = require('../middlewares/validacoes_cadastro_aluno')

//usuario
router.post('/Criar/Usuario',controllerUsuario.CriarUsuario)
router.post('/cadastrar', validarCadastroAluno, alunoController.criarAluno)  // Rota de cadastro
router.get('/cadastrar', alunoController.telaCadastro)


module.exports = router
