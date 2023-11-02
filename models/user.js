'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class User extends Model {
  static associate(models) {
    User.hasMany(models.CyclingEstimate, { foreignKey: 'UserID' });
  }
}
User.init(
  {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    sequelize,
    modelName: 'User',
  }
);

module.exports = User;
