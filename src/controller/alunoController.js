const model = require('../db/models')
const aluno = model.alunos_MPC
const validacaoNome = require('../middlewares/validacoes_cadastro_aluno')

class AlunoController {
    async criarAluno(req, res){
        try{
            const {
                nome,
                data_nascimento,
                telefone,
                logradouro,
                numero,
                cidade,
                UF,
                pais,
                areaAtuacao,
                experiencia,
                habilidades,
                idade,
                CEP,
                CPF,
                Bairro,
                inform_adcionais,
                cursos_extras
            } = req.body;
            const salvarAluno = await aluno.create({
                                                nome,
                                                data_nascimento,
                                                telefone,
                                                logradouro,
                                                numero,
                                                cidade,
                                                UF,
                                                pais,
                                                areaAtuacao,
                                                experiencia,
                                                habilidades,
                                                idade,
                                                CEP,
                                                CPF,
                                                Bairro,
                                                inform_adcionais,
                                                cursos_extras
                                            });
                                            res.status(201).json({ aluno: salvarAluno, message: 'Aluno cadastrado com sucesso' });
        } catch(error) {
            res.status(500).json({ error: error.message });
        }
    }
    telaCadastro(req, res) { //Tela de cadastro do aluno
        res.render('page/formCadastroAluno') //Definindo qual arquivo ejs
    }

    async deletarAluno(req, res) {
        const id = req.params.id;
    
        try {
          const alunoDeletado = await aluno.findByPk(id);
    
          if (!alunoDeletado) {
            return res.status(404).json({ error: 'Aluno não encontrado na base de dados' });
          }
    
          await alunoDeletado.destroy();
    
          res.status(200).json({ id: alunoDeletado.id, message: 'Aluno excluído com sucesso' });
        } catch (err) {
          console.error('Erro ao deletar aluno:', err);
          res.status(500).json({ error: 'Erro ao deletar aluno.' });
        }
    }
    async getAllAlunos(req, res) {
        try {
          const allAlunos = await aluno.findAll();
          res.json(allAlunos);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }
    async atualizarAluno(req, res) {
        try {
          const { id } = req.params;
          const {
            nome,
            data_nascimento,
            telefone,
            logradouro,
            numero,
            cidade,
            UF,
            pais,
            areaAtuacao,
            experiencia,
            habilidades,
            idade,
            CEP,
            CPF,
            Bairro,
            inform_adcionais,
            cursos_extras
          } = req.body;
      
          const [qtdAtualizada] = await aluno.update({
            nome,
            data_nascimento,
            telefone,
            logradouro,
            numero,
            cidade,
            UF,
            pais,
            areaAtuacao,
            experiencia,
            habilidades,
            idade,
            CEP,
            CPF,
            Bairro,
            inform_adcionais,
            cursos_extras
          }, {
            where: { id: id }
          });
      
          if (qtdAtualizada > 0) {
            return res.status(200).json({ id: id, message: 'Aluno atualizado com sucesso' });
          } else {
            return res.status(404).json({ message: 'Aluno não encontrado' });
          }
        } catch (error) {
          return res.status(500).json({ error: error.message });
        }
        
      }
            
}

const alunoControllerInstance = new AlunoController();
module.exports = alunoControllerInstance;