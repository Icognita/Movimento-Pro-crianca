// Arquivo criado para controller da busca avançada

const model = require('../db/models')
const aluno = model.alunos_MPC
const { Op } = require('sequelize');

async function verificarColunaExistente(coluna) { // Função para verificar coluna
  try {
    const descricaoTabela = await aluno.describe();
    const colunas = Object.keys(descricaoTabela);
    return colunas.includes(coluna);
  } catch (error) {
    console.error('Erro ao verificar coluna:', error);
    return false;
  }
}

class BuscasAvancadas {
  async buscarAlunosPorParametro(req, res) {
    try {
      const { coluna, valor } = req.params;
      if (!coluna || !valor) { // Verifica se os dois parâmetros foram passados
        return res.status(400).json({ error: 'Parâmetros "coluna" e "valor" são obrigatórios' });
      }
      const atributosModelo = Object.keys(aluno.rawAttributes);
      const colunaExistente = atributosModelo.includes(coluna);
      if (!colunaExistente) {
        return res.status(400).json({ error: `A coluna "${coluna}" não existe na tabela` });
      }
      const condition = { // Pesquisa da palavra especifica
        [coluna]: {
          [Op.like]: `%${valor}%`
        }
      };
      const alunosPorParametro = await aluno.findAll({
        where: condition
      });
      if (alunosPorParametro.length === 0) {
        return res.status(404).json({ message: 'Nenhum cadastro encontrado com os parâmetros fornecidos' });
      }
      res.json(alunosPorParametro);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
}

const buscaControllerInstance = new BuscasAvancadas();
module.exports = buscaControllerInstance;