const express = require("express");
const router = express.Router();
const alunoController = require("../controller/alunoController");
const controllerUsuario = require("../controller/User");

//usuario
router.post("/Criar/Usuario", controllerUsuario.CriarUsuario);
router.post("/cadastrar", alunoController.criarAluno); // Rota de cadastro

router.get("/cadastroAluno", function (req, res) {
  res.render("../src/view/page/formCadastroAluno.ejs");
});

router.post("/cadastro", function (req, res) {
  criarAluno
    .create({
      nome: req.body.inputNome,
      data_nascimento: req.body.inputDataNascimento,
      telefone: req.body.inpuTel,
      logradouro: req.body.inputLogradouro,
      numero: req.body.inputNumero,
      cidade: req.body.inputCidade,
      UF: req.body.inputUF,
      pais: req.body.inputPais,
      ponto_referencia: req.body.inputPontoReferencia,
      areaAtuacao: req.body.inputAreaAtuacao,
      experiencia: req.body.inputExp,
      habilidades: req.body.inputHabilidades,
      disponibilidade: req.body.inputDisponibilidade,
      localizacao: req.body.inputLocalizacao,
      faixa_etaria: req.body.inputFaixaEtaria,
    })
    .then(function () {
      res.redirect("/FormEnviadocomsucesso'");
    })
    .catch(function (erro) {
      res.send("Houve um erro: " + erro);
    });
});

module.exports = router;
