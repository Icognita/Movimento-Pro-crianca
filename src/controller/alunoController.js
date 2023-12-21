const model = require('../db/models')
const aluno = model.alunos_MPC

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
                ponto_referencia,
                areaAtuacao,
                experiencia,
                habilidades,
                disponibilidade,
                localizacao,
                faixa_etaria
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
                                                ponto_referencia,
                                                areaAtuacao,
                                                experiencia,
                                                habilidades,
                                                disponibilidade,
                                                localizacao,
                                                faixa_etaria
                                            });
            res.status(201).json({ aluno: salvarAluno, message: 'Aluno cadastrado com sucesso' });
        } catch(error) {
            res.status(500).json({ error: error.message });
        }
    }
}

const alunoControllerInstance = new AlunoController();
module.exports = alunoControllerInstance;