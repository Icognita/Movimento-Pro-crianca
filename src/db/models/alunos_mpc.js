'use strict';
const {
  Model
} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class alunos_MPC extends Model {
    /**
    * Helper method for defining associations.
    * This method is not a part of Sequelize lifecycle.
    * The `models/index` file will call this method automatically.
    */
    static associate(models) {
      // define association here

      alunos_MPC.belongsTo(models.categoria,{ // Correção de sintaxe aqui
        foreignKey:'id_categoria',
        onDelete:'CASCADE',

      })
    }
  }

  alunos_MPC.init({ // Alterações colocando novas colunas e alterando tipo de dado
   
    nome:  DataTypes.STRING,
    data_nascimento:DataTypes.DATE,
    telefone: DataTypes.STRING,
    logradouro: DataTypes.STRING,
    numero:DataTypes.INTEGER,
    cidade:DataTypes.STRING,
    UF: DataTypes.STRING,
    pais: DataTypes.STRING,
    ponto_referencia: DataTypes.STRING,
    areaAtuacao: DataTypes.STRING,
    experiencia:  DataTypes.STRING,
    habilidades:DataTypes.STRING,
    disponibilidade:DataTypes.STRING,
    localizacao: DataTypes.INTEGER,
    faixa_etaria:DataTypes.STRING,
    CEP:DataTypes.STRING,
    CPF:DataTypes.STRING,
    Bairro:DataTypes.STRING,
    unidade_pro_crianca:DataTypes.STRING
  },
  {
    sequelize,
    modelName: 'alunos_MPC', //Correção do erro que não retornava o model
  });
  return alunos_MPC;
};