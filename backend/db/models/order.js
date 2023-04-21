'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({ AddedProduct, User }) {
      this.hasMany(AddedProduct, { foreignKey: 'orderId' });
      this.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  Order.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      status: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Order',
    }
  );
  return Order;
};
