'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class trabalho extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  trabalho.init({
    id_trabalho: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    descricao_vaga: DataTypes.STRING,
    cidade_vaga: DataTypes.STRING,
    nome_vaga: DataTypes.STRING,
    empresa_vaga: DataTypes.STRING,
    requisitos_vaga: DataTypes.STRING,
    modalidade: DataTypes.STRING,
    beneficios: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'trabalho',
  });
  return trabalho;
};