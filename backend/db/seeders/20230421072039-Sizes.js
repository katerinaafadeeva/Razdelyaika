'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Sizes',
      [
        {
          productId: 4,
          sizeText: '25-27',
          avaliability: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 5,
          sizeText: 'S',
          avaliability: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 5,
          sizeText: 'M',
          avaliability: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 5,
          sizeText: 'L',
          avaliability: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 6,
          sizeText: 'S',
          avaliability: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 6,
          sizeText: 'M',
          avaliability: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 6,
          sizeText: 'L',
          avaliability: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 7,
          sizeText: 'S',
          avaliability: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 7,
          sizeText: 'M',
          avaliability: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 7,
          sizeText: 'L',
          avaliability: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 8,
          sizeText: 'S',
          avaliability: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 8,
          sizeText: 'M',
          avaliability: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 8,
          sizeText: 'L',
          avaliability: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 9,
          sizeText: 'S',
          avaliability: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 9,
          sizeText: 'M',
          avaliability: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 9,
          sizeText: 'L',
          avaliability: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 10,
          sizeText: 'S',
          avaliability: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 10,
          sizeText: 'M',
          avaliability: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 10,
          sizeText: 'L',
          avaliability: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Sizes', null, {});
  },
};
