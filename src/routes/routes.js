const express = require('express');
const router = express.Router();
const alunoController = require('../controller/alunoController')
const controllerUsuario=require('../controller/User')

//usuario
router.post('/Criar/Usuario',controllerUsuario.CriarUsuario)
router.post('/cadastrar', alunoController.criarAluno)  // Rota de cadastro
router.get('/cadastrar', alunoController.telaCadastro)

module.exports = router
