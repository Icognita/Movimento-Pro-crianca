'use strict';
// Migration de alterações da tabela principal
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Alterando quantidade de caracter e NN
    await queryInterface.changeColumn('alunos_MPCs', 'nome', {
      type: Sequelize.STRING(120),
      allowNull: false
    });
    await queryInterface.addColumn('alunos_MPCs', 'CPF', {
      type: Sequelize.STRING(14),
      allowNull: false,
      defaultValue: 'aleartório'
    });
    await queryInterface.changeColumn('alunos_MPCs', 'telefone', {
      type: Sequelize.STRING(16),
      allowNull: false
    });
    // Adicionar nova coluna CEP
    await queryInterface.addColumn('alunos_MPCs', 'CEP', {
      type: Sequelize.STRING(9),
      allowNull: false,
      defaultValue: 'aleart'
    });
    await queryInterface.changeColumn('alunos_MPCs', 'logradouro', {
      type: Sequelize.STRING(80),
      allowNull: false
    });
    await queryInterface.addColumn('alunos_MPCs', 'Bairro', {
      type: Sequelize.STRING(70),
      allowNull: false,
      defaultValue: 'aleartório'
    });
    await queryInterface.changeColumn('alunos_MPCs', 'cidade', {
      type: Sequelize.STRING(30),
      allowNull: false
    });
    await queryInterface.changeColumn('alunos_MPCs', 'UF', {
      type: Sequelize.STRING(21),
      allowNull: false
    });
    await queryInterface.changeColumn('alunos_MPCs', 'pais', {
      type: Sequelize.STRING(30),
      allowNull: false
    });
    await queryInterface.changeColumn('alunos_MPCs', 'ponto_referencia', {
      type: Sequelize.STRING(40),
      allowNull: true
    });
    // await queryInterface.renameColumn('alunos_MPCs', 'localizacao', 'unidade_pro_crianca'); // Renomear coluna localização
    // Alterar o tipo de dado da coluna 'telefone'
    await queryInterface.changeColumn('alunos_MPCs', 'numero', {
      type: Sequelize.INTEGER
    });
    await queryInterface.removeColumn('alunos_MPCs', 'localizacao');
    await queryInterface.addColumn('alunos_MPCs', 'unidade_pro_crianca', {
      type: Sequelize.STRING(30),
      allowNull: true
    });
  },

  async down (queryInterface, Sequelize) {
    // Reverter as alterações feitas no método up
    await queryInterface.changeColumn('alunos_MPCs', 'nome', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.removeColumn('alunos_MPCs', 'CPF');
    await queryInterface.changeColumn('alunos_MPCs', 'telefone', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.removeColumn('alunos_MPCs', 'CEP');
    await queryInterface.changeColumn('alunos_MPCs', 'logradouro', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.removeColumn('alunos_MPCs', 'Bairro');
    await queryInterface.changeColumn('alunos_MPCs', 'cidade', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.changeColumn('alunos_MPCs', 'UF', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.changeColumn('alunos_MPCs', 'pais', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.changeColumn('alunos_MPCs', 'ponto_referencia', {
      type: Sequelize.STRING,
      allowNull: true
    });
    // await queryInterface.renameColumn('alunos_MPCs', 'unidade_pro_crianca', 'localizacao');
    await queryInterface.changeColumn('alunos_MPCs', 'numero', {
      type: Sequelize.STRING
    });
    await queryInterface.removeColumn('alunos_MPCs', 'unidade_pro_crianca');
    await queryInterface.addColumn('alunos_MPCs', 'localizacao', {
      type: Sequelize.STRING(30),
      allowNull: true
    });
  }
};
