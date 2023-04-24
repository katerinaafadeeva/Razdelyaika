'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ProductSizes', [
      {
        productSizeId: 1,
        sizeId: 2,
        avaliability: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productSizeId: 1,
        sizeId: 1,
        avaliability: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ProductSizes');
  },
};
