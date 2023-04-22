'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class eventPhoto extends Model {
    static associate({Event}) {
      this.belongsTo(Event, { foreignKey: 'eventId' });
    }
  }
  eventPhoto.init(
    {
      eventId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Events',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      file: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'eventPhoto',
    }
  );
  return eventPhoto;
};
