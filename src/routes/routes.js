const express = require('express');
const router = express.Router();
const alunoController = require('../controller/alunoController')
const controllerUsuario=require('../controller/User')
const controllerLogin=require('../controller/login')


const validarCadastroAluno = require('../middlewares/validacoes_cadastro_aluno')


// cadastar UsuarioLogin
router.post('/Criar/Usuario',controllerUsuario.CriarUsuario)
//Login
router.post('/login',controllerLogin.login)
router.get('/login/Sucesso',controllerLogin.loginSucess)
router.get('/login/Fracasso',controllerLogin.loginFailure)



//verificar autenticação


//usuario
router.get('/cadastrar', alunoController.telaCadastro)
router.post('/cadastrar', validarCadastroAluno, alunoController.criarAluno)  // Rota de cadastro
router.post('/Criar/Usuario',controllerUsuario.CriarUsuario)
router.get('/cadastrar', alunoController.telaCadastro)
router.post('/cadastrar', validarCadastroAluno, alunoController.criarAluno)  // Rota de cadastro


// routes.get("/", (req, res) => {
//    return res.render('page/home')
// })




module.exports = router
