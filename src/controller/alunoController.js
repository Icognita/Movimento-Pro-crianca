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
}

const alunoControllerInstance = new AlunoController();
module.exports = alunoControllerInstance;