'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('alunos_MPCs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      data_nascimento: {
        type: Sequelize.DATE
      },
      telefone: {
        type: Sequelize.STRING
      },
      logradouro: {
        type: Sequelize.STRING
      },
      numero: {
        type: Sequelize.STRING
      },
      cidade: {
        type: Sequelize.STRING
      },
      UF: {
        type: Sequelize.STRING
      },
      pais: {
        type: Sequelize.STRING
      },
      ponto_referencia: {
        type: Sequelize.STRING
      },
      areaAtuacao: {
        type: Sequelize.STRING
      },
      experiencia: {
        type: Sequelize.STRING
      },
      habilidades: {
        type: Sequelize.STRING
      },
      disponibilidade: {
        type: Sequelize.STRING
      },
      localizacao: {
        type: Sequelize.INTEGER
      },
      faixa_etaria: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('alunos_MPCs');
  }
};