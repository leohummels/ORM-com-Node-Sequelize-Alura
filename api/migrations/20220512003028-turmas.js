'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable('turmas', {
        data_inicio: {
          type: Sequelize.DATEONLY
        }
      })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('turmas');
  }
};
