'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EcoPoint extends Model {
    static associate(models) {}
  }
  EcoPoint.init(
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
      modelName: 'EcoPoint',
    }
  );
  return EcoPoint;
};
