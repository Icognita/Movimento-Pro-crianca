const express = require('express');
const router = express.Router();
const alunoController = require('../controller/alunoController')
const controllerUsuario=require('../controller/User')
const validarCadastroAluno = require('../middlewares/validacoes_cadastro_aluno')

//usuario
router.post('/Criar/Usuario',controllerUsuario.CriarUsuario)
router.post('/cadastrar', validarCadastroAluno, alunoController.criarAluno)  // Rota de cadastro
router.get('/cadastrar', alunoController.telaCadastro)

router.delete('/alunos/deletar/:id', alunoController.deletarAluno)
router.put('/alunos/atualizar/:id', alunoController.atualizarAluno)
router.get('/listar-alunos', alunoController.getAllAlunos) // Rota que lista todos já cadastrados

module.exports = router
