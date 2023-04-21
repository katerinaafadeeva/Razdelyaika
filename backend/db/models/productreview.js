'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductReview extends Model {
    static associate({ Product, User }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Product, { foreignKey: 'productId' });
    }
  }
  ProductReview.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Products',
          key: 'id',
        },
      },
      isModerate: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'ProductReview',
    }
  );
  return ProductReview;
};
