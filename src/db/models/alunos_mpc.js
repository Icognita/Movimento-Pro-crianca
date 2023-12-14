'use strict';
const {
  Model
} = require('sequelize');
const categoria = require('./categoria.js');


module.exports = (sequelize, DataTypes) => {
  class alunos_MPC extends Model {
    /**
    * Helper method for defining associations.
    * This method is not a part of Sequelize lifecycle.
    * The `models/index` file will call this method automatically.
    */
    static associate(models) {
      // define association here
    }
  }

  alunos_MPC.init({
    codigo_aluno: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      allowNull:false,
      primaryKey:true,
    },
    nome: {
      type: sequelize.STRING
    },
    data_nascimento:{
      type: sequelize.DATE,
    },
    telefone: {
      type: sequelize.STRING,
    },
    logradouro: {
      type: sequelize.STRING,
    },
    numero: {
      type: sequelize.STRING,
    },
    cidade: {
      type: sequelize.STRING,
    },
    UF: {
      type: sequelize.STRING,
    },
    pais: {
      type: sequelize.STRING,
    },
    ponto_referencia: {
      type: sequelize.STRING,
    },
    areaAtuacao: {
      type: sequelize.STRING,
    },
    experiencia: {
      type: sequelize.STRING,
    },
    habilidades: {
      type: sequelize.STRING,
    },
    disponibilidade: {
      type: sequelize.STRING,
    },
    localizacao: {
      type: sequelize.INTEGER,
    },
    faixa_etaria: {
      type: sequelize.STRING,
    },
    id_categoria: {
      type: sequelize.INTEGER,
      allowNull: false
    }
  });
},
  alunos_MPC.associate = (models) => {
    alunos_MPC.belongsTo(models.categoria, {
      foreignKey: "id_categoria"
    });
  };

  {
    sequelize, modelName; 'alunos_MPC'
  };
  return alunos_MPC

