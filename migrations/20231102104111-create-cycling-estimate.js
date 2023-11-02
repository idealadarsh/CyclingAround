'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CyclingEstimates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      UserID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        allowNull: false,
      },
      SpotID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'TouristSpots',
          key: 'id',
        },
        allowNull: false,
      },
      cyclingSpeed: {
        type: Sequelize.DECIMAL(5, 2),
        allowNull: false,
      },
      dailyCyclingHours: {
        type: Sequelize.DECIMAL(4, 2),
        allowNull: false,
      },
      estimatedTime: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CyclingEstimates');
  },
};
