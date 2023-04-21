'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate({
      ProductImg,
      productSize,
      ProductReview,
      Cart,
      Purchase,
    }) {
      this.hasMany(ProductImg, { foreignKey: 'productId' });
      this.hasMany(productSize, { foreignKey: 'productId' });
      this.hasMany(ProductReview, { foreignKey: 'productId' });
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
