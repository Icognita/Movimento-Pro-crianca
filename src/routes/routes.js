const express = require('express');
const router = express.Router();
const alunoController = require('../controller/alunoController')
const controllerUsuario=require('../controller/User')
const controllerLogin=require('../controller/login')
const routes = express.Router();

const validarCadastroAluno = require('../middlewares/validacoes_cadastro_aluno')


//login
router.post('/Criar/Usuario',controllerUsuario.CriarUsuario)
// router.post('/cadastrar', validarCadastroAluno, alunoController.criarAluno)  // Rota de cadastro
router.get('/cadastrar', alunoController.telaCadastro)
router.post('/login',controllerLogin.login)
//verificar autenticação




routes.get("/home", (req, res) => {
    res.send("Funcionado ...")
})


//usuario
router.post('/Criar/Usuario',controllerUsuario.CriarUsuario)
router.get('/cadastrar', alunoController.telaCadastro)
router.post('/cadastrar', validarCadastroAluno, alunoController.criarAluno)  // Rota de cadastro


module.exports = router
