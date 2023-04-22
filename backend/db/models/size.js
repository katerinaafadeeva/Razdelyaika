'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Size extends Model {
    static associate({ ProductSize }) {
      this.hasMany(ProductSize, { foreignKey: 'sizeId' });
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
