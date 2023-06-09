'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Sizes',
      [
        {
          sizeText: '25-27',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sizeText: '27-29',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sizeText: '29-31',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sizeText: 'XS',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sizeText: 'S',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sizeText: 'M',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sizeText: 'XL',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Sizes');
  },
};
