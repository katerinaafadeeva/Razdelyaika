'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Products',
      [
        {
          productName: 'Ваза',
          productDescript: 'Ваза из винной бутылки "Разделяйка"',
          productPrice: 500,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productName: 'Свечи',
          productDescript:
            'Свеча жёлтая "Разделяйка". Свеча зелёная "Люди вместе, отходы раздельно"',
          productPrice: 550,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productName: 'Тарелка',
          productDescript: 'Тарелка из винной бутылки',
          productPrice: 600,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productName: 'Носки Разделяйка',
          productDescript: 'Носки вязаные',
          productPrice: 500,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productName: 'Футболка белая',
          productDescript: 'Футболка "Разделяйка". Материал 100% хлопок',
          productPrice: 850,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productName: 'Футболка черная',
          productDescript: 'Футболка "Разделяйка". Материал 100% хлопок',
          productPrice: 900,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productName: 'Футболка серая',
          productDescript: 'Футболка "Разделяйка". Материал 100% хлопок',
          productPrice: 950,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productName: 'Футболка белая',
          productDescript: 'Футболка "Разделяйка". Материал 100% хлопок',
          productPrice: 850,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productName: 'Футболка черная',
          productDescript: 'Футболка "Разделяйка". Материал 100% хлопок',
          productPrice: 900,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productName: 'Футболка серая',
          productDescript: 'Футболка "Разделяйка". Материал 100% хлопок',
          productPrice: 950,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
