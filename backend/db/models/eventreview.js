'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class eventReview extends Model {
    static associate({ Event }) {
      this.belongsTo(Event, { foreignKey: 'eventId' });
    }
  }
  eventReview.init(
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
      },
      eventRevText: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'eventReview',
    }
  );
  return eventReview;
};
