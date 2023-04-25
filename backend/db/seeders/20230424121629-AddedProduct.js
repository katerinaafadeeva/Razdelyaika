'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('AddedProducts', [
      {
        productId: 1,
        orderId: 1,
        count: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 4,
        orderId: 2,
        count: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 1,
        orderId: 3,
        count: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('AddedProducts');
  },
};
