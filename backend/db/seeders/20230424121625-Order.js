'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orders', [
      {
        userId: 1,
        status: 'выполнен',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        status: 'активен',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Orders');
  },
};
