'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate({ ProductImg, ProductSize, ProductReview, AddedProduct }) {
      this.hasMany(ProductImg, { foreignKey: 'productImgId' });
      this.hasMany(ProductSize, { foreignKey: 'productSizeId' });
      this.hasMany(ProductReview, { foreignKey: 'productRevId' });
      this.hasMany(AddedProduct, { foreignKey: 'productId' });
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
