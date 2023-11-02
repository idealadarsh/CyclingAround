'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class CyclingEstimate extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    CyclingEstimate.belongsTo(models.User, { foreignKey: 'UserID' });
    CyclingEstimate.belongsTo(models.TouristSpot, { foreignKey: 'SpotID' });
  }
}
CyclingEstimate.init(
  {
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    SpotID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'TouristSpots',
        key: 'id',
      },
    },
    cyclingSpeed: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
    },
    dailyCyclingHours: {
      type: DataTypes.DECIMAL(4, 2),
      allowNull: false,
    },
    estimatedTime: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    timestamps: true,
    sequelize,
    modelName: 'CyclingEstimate',
  }
);
module.exports = CyclingEstimate;
