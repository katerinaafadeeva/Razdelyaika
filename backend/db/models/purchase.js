'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Purchase extends Model {
    static associate({ User, Product }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.hasMany(Product, { foreignKey: 'productId' });
    }
  }
  Purchase.init(
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      productId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Products',
          key: 'id',
        },
      },
      purchaseStatus: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: 'Purchase',
    }
  );
  return Purchase;
};
