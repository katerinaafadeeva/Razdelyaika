'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate(eventPhoto, eventReview) {
      this.hasMany(eventPhoto, { foreignKey: 'eventId' });
      this.hasMany(eventReview, { foreignKey: 'eventId' });
    }
  }
  Event.init(
    {
      eventName: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      eventDescription: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      eventAddress: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      eventDate: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      isActive: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: 'Event',
    }
  );
  return Event;
};
