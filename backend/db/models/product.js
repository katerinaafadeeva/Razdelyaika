'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(Size, productReview, Cart, Purchase) {
      this.hasMany(Size, { foreignKey: 'productId' });
      this.hasMany(productReview, { foreignKey: 'productId' });
      this.belongsTo(Cart, { foreignKey: 'productId' });
      this.belongsTo(Purchase, { foreignKey: 'productId' });
    }
  }
  Product.init(
    {
      productName: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      productDescript: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      productImg: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      productPrice: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Product',
    }
  );
  return Product;
};
