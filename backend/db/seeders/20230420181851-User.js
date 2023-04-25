const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          userName: 'Дмитрий',
          email: 'hitriy_dmitriy@gmail.com',
          password: await bcrypt.hash('Podbirayka', 10),
          // isAdmin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: 'Максим',
          email: 'admin@gmail.com',
          password: await bcrypt.hash('123', 10),
          // isAdmin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
