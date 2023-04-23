'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate({ eventPhoto, EventReview }) {
      this.hasMany(eventPhoto, { foreignKey: 'eventId' });
      this.hasMany(EventReview, { foreignKey: 'eventId' });
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
      detailsLink: {
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
