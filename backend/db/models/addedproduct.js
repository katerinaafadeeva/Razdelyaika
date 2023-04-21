'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AddedProduct extends Model {
    static associate({ Product, Order }) {
      this.belongsTo(Product, { foreignKey: 'productId' });
      this.belongsTo(Order, { foreignKey: 'orderId' });
    }
  }
  AddedProduct.init(
    {
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      orderId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Orders',
          key: 'id',
        },
      },
      count: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'AddedProduct',
    }
  );
  return AddedProduct;
};
