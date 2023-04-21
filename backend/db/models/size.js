'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Size extends Model {
    static associate(Product) {
      this.belongsTo(Product, { foreignKey: 'productId' });
    }
  }
  Size.init(
    {
      productId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Products',
          key: 'id',
        },
      },
      sizeText: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      avaliability: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Size',
    }
  );
  return Size;
};
