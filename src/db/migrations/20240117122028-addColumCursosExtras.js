'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('alunos_MPCs', 'cursos_extras', {
      type: Sequelize.STRING(400),
      allowNull: false,
      defaultValue: 'Sem cursos extracurriculares'
    });
    await queryInterface.renameColumn('alunos_MPCs', 'faixa_etaria', 'idade');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('alunos_MPCs', 'cursos_extras');
    await queryInterface.renameColumn('alunos_MPCs', 'idade', 'faixa_etaria');
  }
};
