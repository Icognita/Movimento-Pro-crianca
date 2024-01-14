function validacoes(req, res, next) { //Função para as validações de dados do cadastro
    let erros = [];
    const minCaracter = 5;
    const maxCaracter = 255;
    const maxCaracterNome = 120;

    // // Validações de Nome
    // if (!req.body.nome || typeof req.body.nome === undefined || req.body.nome === null) {
    //     erros.push({ Texto: "O nome é obrigatório" });
    // }if(req.body.nome.length < minCaracter || req.body.nome.length > maxCaracter){
    //     erros.push({ Texto: `O nome deve ter entre ${minCaracter} e ${maxCaracterNome} caracteres` });
    // }if (!/^[a-záàâãéèêíïóôõöúçñ ]+$/i.test(req.body.nome)) {
    //     erros.push({ Texto: "O nome não pode conter números ou caracteres especiais" });
    // }
    
    // // Validações de número e telefone
    // if (!/^\d+$/.test(req.body.numero)) {
    //     erros.push({ Texto: "O número de residência deve conter apenas números" });
    // }if (!req.body.telefone || !/^\d+$/.test(req.body.telefone)) {
    //     erros.push({ Texto: "Telefone é obrigatório e deve conter apenas números" });
    // }if (!req.body.logradouro || typeof req.body.logradouro === undefined || req.body.logradouro === null) {
    //     erros.push({ Texto: "Logradouro é obrigatório" });
    // }if (!req.body.cidade || typeof req.body.cidade === undefined || req.body.cidade === null) {
    //     erros.push({ Texto: "Cidade é obrigatória" });
    // }if (!req.body.UF || typeof req.body.UF === undefined || req.body.UF === null) {
    //     erros.push({ Texto: "UF é obrigatório" });
    // }if (!req.body.pais || typeof req.body.pais === undefined || req.body.pais === null) {
    //     erros.push({ Texto: "País é obrigatório" });
    // }if (!req.body.CEP || !/^\d{8}$/.test(req.body.CEP)) {
    //     erros.push({ Texto: "CEP é obrigatório e deve conter exatamente 8 dígitos" });
    // }

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
        'Bairro'
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
        const regexLogradouro = /^[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ']+$/;
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
