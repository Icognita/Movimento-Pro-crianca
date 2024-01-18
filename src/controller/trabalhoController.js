const { Op } = require('sequelize');
const db = require('../db/models');
const trabalho = require('../db/models/trabalho');
const tabelaTrabalho = db.trabalho;

class VagasController {
  async criarVaga(req, res) {
    try {
      const {
        nome_vaga,
        empresa_vaga,
        cidade_vaga,
        modalidade,
        descricao_vaga,
        requisitos_vaga,
        beneficios
      } = req.body;
      const novoTrabalho = await tabelaTrabalho.create({
        nome_vaga,
        empresa_vaga,
        cidade_vaga,
        modalidade,
        descricao_vaga,
        requisitos_vaga,
        beneficios
      });
      res.status(201).json({ trabalho: novoTrabalho, message: 'Vaga cadastrada com sucesso' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro interno ao criar vaga' });
    }
  }

  async buscarVagas(req, res) {
    try {
      const todasVagas = await tabelaTrabalho.findAll();
      res.json(todasVagas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro interno ao buscar vagas' });
    }
  }

  async atualizarVaga(req, res) {
    try {
      const { id } = req.params;
      const {
        nome_vaga,
        empresa_vaga,
        cidade_vaga,
        modalidade,
        descricao_vaga,
        requisitos_vaga,
        beneficios
      } = req.body;

      const [qtdAtualizada] = await tabelaTrabalho.update({
        nome_vaga,
        empresa_vaga,
        cidade_vaga,
        modalidade,
        descricao_vaga,
        requisitos_vaga,
        beneficios
      }, {
        where: { id_trabalho: id }
      });

      if (qtdAtualizada > 0) {
        return res.status(200).json({ id: id, message: 'Vaga atualizada com sucesso' });
      } else {
        return res.status(404).json({ message: 'Vaga não encontrada na base de dados' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro interno ao atualizar vaga' });
    }
  }

  async deletarVaga(req, res) {
    const { id } = req.params;

    try {
      const idVaga = await tabelaTrabalho.findByPk(id);

      if (!idVaga) {
        return res.status(404).json({ error: 'Vaga não encontrada na base de dados' });
      }

      await idVaga.destroy();

      res.status(200).json({ id: idVaga.id, message: 'Vaga excluída com sucesso' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro interno ao deletar vaga' });
    }
  }
}

const vagaControllerInstance = new VagasController();
module.exports = vagaControllerInstance;
