'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('trabalhos', {
      id_trabalho: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      descricao_vaga: {
        type: Sequelize.STRING
      },
      quantidade_vagas: {
        type: Sequelize.INTEGER
      },
      localizacao: {
        type: Sequelize.STRING
      },
      carga_horaria: {
        type: Sequelize.STRING
      },
      habilidades: {
        type: Sequelize.STRING
      },
      data_inicio: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('trabalhos');
  }
};