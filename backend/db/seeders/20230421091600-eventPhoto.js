'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'eventPhotos',
      [
        {
          eventId: 1,
          file: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 2,
          file: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 3,
          file: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 4,
          file: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('eventPhoto', null, {});
  },
};
