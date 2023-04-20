'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(eventReview, productReview, Cart, Purchase) {
      this.hasMany(eventReview, { foreignKey: 'userId' });
      this.hasMany(productReview, { foreignKey: 'userId' });
      this.hasOne(Cart, { foreignKey: 'userId' });
      this.hasOne(Purchase, { foreignKey: 'userId' });
    }
  }
  User.init(
    {
      userName: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      email: {
        allowNull: false,
        unique: true,
        type: DataTypes.TEXT,
      },
      password: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      isAdmin: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
