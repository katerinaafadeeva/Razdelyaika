'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ eventReview, ProductReview, Order }) {
      this.hasOne(Order, { foreignKey: 'userId' });
      this.hasMany(eventReview, { foreignKey: 'userId' });
      this.hasMany(ProductReview, { foreignKey: 'userId' });
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
