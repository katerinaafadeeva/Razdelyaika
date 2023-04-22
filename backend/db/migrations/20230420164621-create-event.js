'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      eventName: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      eventDescription: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      eventAddress: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      eventDate: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      detailsLink: {
        type: Sequelize.TEXT,
      },
      isActive: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Events');
  },
};
