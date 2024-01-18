function validacoes(req, res, next) { //Função para as validações de dados do cadastro
    let erros = [];
    
    // Validações de valores obrigatórios
    const camposObrigatorios = [
        'nome',
        'data_nascimento',
        'telefone',
        'logradouro',
        'cidade',
        'UF',
        'pais',
        'CPF',
        'CEP',
        'Bairro',
        'inform_adcionais',
        'cursos_extras'
    ];
    camposObrigatorios.forEach(campo => {
        if (!req.body[campo]) {
            erros.push({ Texto: `${campo} é obrigatório` });
        }
    });

    // Validações específicas para o campo 'nome'
    if (req.body.nome) {
        const minCaracter = 5;
        const maxCaracter = 120;
        if (req.body.nome.length < minCaracter || req.body.nome.length > maxCaracter) {
            erros.push({ Texto: `O nome deve ter entre ${minCaracter} e ${maxCaracter} caracteres` });
        }if (!/^[a-záàâãéèêíïóôõöúçñ ]+$/i.test(req.body.nome)) {
            erros.push({ Texto: "O nome não pode conter números ou caracteres especiais" });
        }
    }

    // Validação específica para o campo 'logradouro'
    if (req.body.logradouro) {
        const regexLogradouro = /^[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ' ]+$/;
        if (!regexLogradouro.test(req.body.logradouro) || req.body.logradouro.length > 80) {
            erros.push({ Texto: 'Logradouro deve conter apenas letras e acentos, com no máximo 80 caracteres' });
        }
    }

    // Validações específicas para o campo de cidade e pais
    const camposCidadePais = ['cidade', 'pais'];
    camposCidadePais.forEach(campo => {
        if (req.body[campo]) {
            const regexAcentos = /^[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ\s']+$/;
            if (!regexAcentos.test(req.body[campo]) || req.body[campo].length > 30) {
                erros.push({ Texto: `${campo} deve conter apenas letras e acentos, com no máximo 30 caracteres` });
            }
        }
    });

    if (req.body.idade) {
        const regexIdade = /^\d+$/;
        if (!regexIdade.test(req.body.idade) || parseInt(req.body.idade, 10) < 16 || parseInt(req.body.idade, 10) > 100) {
            erros.push({ Texto: 'A idade deve ser um número inteiro entre 16 e 100' });
        }
    }

    // Validação específica para o campo 'UF'
    if (req.body.UF) {
        const regexUF = /^[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ']+$/;
        if (!regexUF.test(req.body.UF) || req.body.UF.length > 21) {
            erros.push({ Texto: 'UF deve conter apenas letras e acentos, com no máximo 21 caracteres' });
        }
    }


    if (erros.length > 0) {
        return res.status(400).json({ errors: erros });
    }

    next();
}

module.exports = validacoes;
