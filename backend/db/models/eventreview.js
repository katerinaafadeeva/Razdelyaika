'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EventReview extends Model {
    static associate({ Event, User }) {
      this.belongsTo(Event, { foreignKey: 'eventId' });
      this.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  EventReview.init(
    {
      eventId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Events',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      eventRevText: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'EventReview',
    }
  );
  return EventReview;
};
