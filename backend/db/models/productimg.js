'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductImg extends Model {
    static associate({ Product }) {
      this.belongsTo(Product, { foreignKey: 'productImgId' });
    }
  }
  ProductImg.init(
    {
      productId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Products',
          key: 'id',
        },
      },
      productImg: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'ProductImg',
    }
  );
  return ProductImg;
};
