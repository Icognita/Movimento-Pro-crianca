const express = require('express');
const router = express.Router();
const alunoController = require('../controller/alunoController')
const controllerUsuario=require('../controller/User')
const buscaAvancada = require('../controller/buscaAvancadaController')
const validarCadastroAluno = require('../middlewares/validacoes_cadastro_aluno')

router.post('/Criar/Usuario',controllerUsuario.CriarUsuario)
router.post('/cadastrar', validarCadastroAluno, alunoController.criarAluno)  // Rota de cadastro
router.get('/cadastrar', alunoController.telaCadastro)

router.delete('/alunos/deletar/:id', alunoController.deletarAluno)
router.put('/alunos/atualizar/:id', alunoController.atualizarAluno)
router.get('/listar-alunos', alunoController.buscaDeAlunos) // Rota que lista todos já cadastrados

router.get('/listar-alunos/filtros/:coluna/:valor', buscaAvancada.buscarAlunosPorParametro); // Busca avançada por coluna no BD e seu valor

module.exports = router
