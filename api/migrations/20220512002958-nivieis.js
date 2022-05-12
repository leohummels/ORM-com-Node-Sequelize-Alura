'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('nivieis', {
      descr_nivel: {
        type: Sequelize.STRING
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('nivieis');
  }
};
