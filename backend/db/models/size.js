'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Size extends Model {
    static associate({ productSize }) {
      this.hasMany(productSize, { foreignKey: 'sizeId' });
    }
  }
  Size.init(
    {
      sizeText: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Size',
    }
  );
  return Size;
};
