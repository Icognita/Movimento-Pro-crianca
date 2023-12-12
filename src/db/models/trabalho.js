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
    id_trabalho: DataTypes.INTEGER,
    descricao_vaga: DataTypes.STRING,
    quantidade_vagas: DataTypes.INTEGER,
    localizacao: DataTypes.STRING,
    carga_horaria: DataTypes.STRING,
    habilidades: DataTypes.STRING,
    data_inicio: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'trabalho',
  });
  return trabalho;
};