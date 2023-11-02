'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');
class TouristSpot extends Model {
  static associate(models) {
    TouristSpot.hasMany(models.CyclingEstimate, { foreignKey: 'SpotID' });
  }
}

TouristSpot.init(
  {
    spotName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.DECIMAL(9, 6),
      allowNull: false,
    },
    longitude: {
      type: DataTypes.DECIMAL(9, 6),
      allowNull: false,
    },
    accessibleByCycling: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    sequelize,
    modelName: 'TouristSpot',
  }
);

module.exports = TouristSpot;
