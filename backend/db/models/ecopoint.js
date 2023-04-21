'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ecoPoint extends Model {
    static associate(models) {}
  }
  ecoPoint.init(
    {
      pointName: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      pointAddress: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'ecoPoint',
    }
  );
  return ecoPoint;
};
