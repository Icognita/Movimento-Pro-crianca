'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('alunos_MPCs', 'inform_adcionais', {
      type: Sequelize.STRING(120),
      allowNull: false,
      defaultValue: 'Sem informações adicionais'
    });
    await queryInterface.changeColumn('alunos_MPCs', 'CPF', {
      type: Sequelize.STRING(14),
      allowNull: false,
      defaultValue: '000.000.000-00'
    });
    await queryInterface.changeColumn('alunos_MPCs', 'numero', {
      type: Sequelize.STRING(30),
      allowNull: true,
      defaultValue: 'S/N'
    });
    await queryInterface.removeColumn('alunos_MPCs', 'ponto_referencia');
    await queryInterface.changeColumn('alunos_MPCs', 'areaAtuacao', {
      type: Sequelize.STRING(300),
      allowNull: false,
      defaultValue: 'Sem áreas de atuação cadastrada'
    });
    await queryInterface.changeColumn('alunos_MPCs', 'experiencia', {
      type: Sequelize.STRING(300),
      allowNull: true,
      defaultValue: 'Sem experiências cadastradas'
    });
    await queryInterface.changeColumn('alunos_MPCs', 'habilidades', {
      type: Sequelize.STRING(300),
      allowNull: false,
      defaultValue: 'Sem habilidades cadastradas'
    });
    await queryInterface.removeColumn('alunos_MPCs', 'disponibilidade');
    await queryInterface.changeColumn('alunos_MPCs', 'faixa_etaria', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '0'
    });
    await queryInterface.changeColumn('alunos_MPCs', 'CEP', {
      type: Sequelize.STRING(10),
      allowNull: false,
      defaultValue: '00000000'
    });
    await queryInterface.changeColumn('alunos_MPCs', 'Bairro', {
      type: Sequelize.STRING(70),
      allowNull: false,
      defaultValue: 'Sem bairro cadastrado'
    });
    await queryInterface.removeColumn('alunos_MPCs', 'unidade_pro_crianca');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn('alunos_MPCs', 'unidade_pro_crianca', {
      type: Sequelize.STRING(30),
      allowNull: true
    });
    await queryInterface.changeColumn('alunos_MPCs', 'Bairro', {
      type: Sequelize.STRING(70),
      allowNull: false,
      defaultValue: 'null'
    });
    await queryInterface.changeColumn('alunos_MPCs', 'CEP', {
      type: Sequelize.STRING(10),
      allowNull: false,
      defaultValue: 'null'
    });
    await queryInterface.changeColumn('alunos_MPCs', 'faixa_etaria', {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: '0'
    });
    await queryInterface.addColumn('alunos_MPCs', 'disponibilidade', {
      type: Sequelize.STRING(255),
      allowNull: true
    });
    await queryInterface.changeColumn('alunos_MPCs', 'habilidades', {
      type: Sequelize.STRING(255),
      allowNull: true,
      defaultValue: 'null'
    });
    await queryInterface.changeColumn('alunos_MPCs', 'experiencia', {
      type: Sequelize.STRING(255),
      allowNull: true,
      defaultValue: 'null'
    });
    await queryInterface.changeColumn('alunos_MPCs', 'areaAtuacao', {
      type: Sequelize.STRING(255),
      allowNull: true,
      defaultValue: 'null'
    });
    await queryInterface.addColumn('alunos_MPCs', 'ponto_referencia', {
      type: Sequelize.STRING(40),
      allowNull: 'null'
    });
    await queryInterface.changeColumn('alunos_MPCs', 'numero', {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: 1
    });
    await queryInterface.changeColumn('alunos_MPCs', 'CPF', {
      type: Sequelize.STRING(14),
      allowNull: false,
      defaultValue: 'null'
    });
    await queryInterface.removeColumn('alunos_MPCs', 'inform_adcionais');
  }
};
