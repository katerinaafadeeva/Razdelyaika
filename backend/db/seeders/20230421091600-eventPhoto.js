'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'eventPhotos',
      [
        {
          eventId: 1,
          file: 'https://global-uploads.webflow.com/64022de562115a8189fe542a/6417b36f08936723575c992c_event-evaluation.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 2,
          file: 'https://spotme.com/wp-content/uploads/2020/07/Hero-1.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 3,
          file: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3_yVkKPo6tBxR_QpM1DeJapogxIYHPsh6W9C6sLcEnr6r58jHj2OnZ-TStIm2HXQxWLw&usqp=CAU',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 4,
          file: 'https://spotme.com/wp-content/uploads/2020/07/Hero-1.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('eventPhotos', null, {});
  },
};
