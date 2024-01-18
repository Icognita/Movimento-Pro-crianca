'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('trabalhos', 'nome_vaga', {
      type: Sequelize.STRING(120),
      allowNull: false,
      defaultValue: 'Sem vaga cadastrada'
    });
    await queryInterface.addColumn('trabalhos', 'empresa_vaga', {
      type: Sequelize.STRING(120),
      allowNull: false,
      defaultValue: 'Sem empresa cadastrada'
    });
    await queryInterface.addColumn('trabalhos', 'requisitos_vaga', {
      type: Sequelize.STRING(255),
      allowNull: false,
      defaultValue: 'Sem requisitos cadastrados'
    });
    await queryInterface.changeColumn('trabalhos', 'descricao_vaga', {
      type: Sequelize.STRING(400),
      allowNull: false,
      defaultValue: 'Sem descrição cadastrada'
    });
    await queryInterface.addColumn('trabalhos', 'modalidade', {
      type: Sequelize.STRING(50),
      allowNull: false,
      defaultValue: 'Sem modaliade cadastrada'
    });
    await queryInterface.addColumn('trabalhos', 'beneficios', {
      type: Sequelize.STRING(255),
      allowNull: true,
      defaultValue: 'Sem beneficios cadastrados'
    });
    await queryInterface.renameColumn('trabalhos', 'localizacao', 'cidade_vaga');
    await queryInterface.removeColumn('trabalhos', 'quantidade_vagas');
    await queryInterface.removeColumn('trabalhos', 'carga_horaria');
    await queryInterface.removeColumn('trabalhos', 'habilidades');
    await queryInterface.removeColumn('trabalhos', 'data_inicio');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn('trabalhos', 'cidade_vaga', 'localizacao');
    await queryInterface.removeColumn('trabalhos', 'nome_vaga');
    await queryInterface.removeColumn('trabalhos', 'empresa_vaga');
    await queryInterface.removeColumn('trabalhos', 'requisitos_vaga');
    await queryInterface.removeColumn('trabalhos', 'modalidade');
    await queryInterface.removeColumn('trabalhos', 'beneficios');

    await queryInterface.addColumn('trabalhos', 'quantidade_vagas', {
      type: Sequelize.INTEGER 
    });
    await queryInterface.addColumn('trabalhos', 'carga_horaria', {
      type: Sequelize.STRING 
    });
    await queryInterface.addColumn('trabalhos', 'habilidades', {
      type: Sequelize.STRING 
    });
    await queryInterface.addColumn('trabalhos', 'data_inicio', {
      type: Sequelize.DATE
    });
    await queryInterface.changeColumn('trabalhos', 'descricao_vaga', {
      type: Sequelize.STRING
    });
  }
};
