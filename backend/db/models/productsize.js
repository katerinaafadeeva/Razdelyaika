'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductSize extends Model {
    static associate({ Size, Product }) {
      this.belongsTo(Size, { foreignKey: 'sizeId' });
      this.belongsTo(Product, { foreignKey: 'productSizeId' });
    }
  }
  ProductSize.init(
    {
      productId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Products',
          key: 'id',
        },
      },
      sizeId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Sizes',
          key: 'id',
        },
      },
      avaliability: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'ProductSize',
    }
  );
  return ProductSize;
};
