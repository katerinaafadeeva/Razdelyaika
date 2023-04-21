'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'ecoPoints',
      [
        {
          pointName: 'Экоцентр',
          pointAddress: 'Челябинск, ул. Братьев Кашириных, 55',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pointName: 'Сад Победы',
          pointAddress: 'Челябинск, ул. Героев Такнограда, 75',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pointName: 'ЦДЮТур "Космос"',
          pointAddress: 'Челябинск, ул. Кулибина, д.54',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pointName: 'сквер "Станкомаш"',
          pointAddress: 'Челябинск, ул. Тухачевского, д.3',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pointName: 'ДК Строителей',
          pointAddress: 'Челябинск, шоссе Металлургов, д.70б',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pointName: 'Мкр-н Парковый',
          pointAddress: 'Челябинск, ул. Скульптура Головницкого, д.5',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pointName: 'Мкр-н Тополиная Аллея (сквер напротив)',
          pointAddress: 'ул. Братьев Кашириныхб д. 163',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pointName: 'Мкр-н Чурилово',
          pointAddress: 'ул. Зальцмана, д.18',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pointName: 'пос.Новосинеглазово',
          pointAddress: 'Челябинск, ул.Челябинская, д.7',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pointName: 'Копейск (школа №9)',
          pointAddress: 'Копейск, ул. Калинина, д.18',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('ecoPoints', null, {});
  },
};
