function validacoes(req, res, next) { //Função para as validações de dados do cadastro
    let erros = [];
    const minCaracter = 5;
    const maxCaracter = 255;

    if (!req.body.nome || typeof req.body.nome === undefined || req.body.nome === null) {
        erros.push({ Texto: "O nome é obrigatório" });
    }if(req.body.nome.length < minCaracter || req.body.nome.length > maxCaracter){
        erros.push({ Texto: `O nome deve ter entre ${minCaracter} e ${maxCaracter} caracteres` });
    }if (!/^[a-záàâãéèêíïóôõöúçñ ]+$/i.test(req.body.nome)) {
        erros.push({ Texto: "O nome não pode conter números ou caracteres especiais" });
    }if (!/^\d+$/.test(req.body.numero)) {
        erros.push({ Texto: "O número de residência deve conter apenas números" });
    }

    if (erros.length > 0) {
        return res.status(400).json({ errors: erros });
    }

    next();
}

module.exports = validacoes;
