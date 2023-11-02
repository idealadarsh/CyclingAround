const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hashedPassword = bcrypt.hashSync('password', 10);
    await queryInterface.bulkInsert('Users', [
      {
        username: 'demo',
        password: hashedPassword,
      },
    ]);
    await queryInterface.bulkInsert('TouristSpots', [
      {
        spotName: 'Eiffel Tower',
        latitude: 48.8584,
        longitude: 2.2945,
        accessibleByCycling: true,
      },
      {
        spotName: 'Great Wall of China',
        latitude: 40.4319,
        longitude: 116.5704,
        accessibleByCycling: true,
      },
      {
        spotName: 'Grand Canyon',
        latitude: 36.1069,
        longitude: -112.1129,
        accessibleByCycling: false,
      },
      {
        spotName: 'Statue of Liberty',
        latitude: 40.6892,
        longitude: -74.0445,
        accessibleByCycling: false,
      },
      {
        spotName: 'Machu Picchu',
        latitude: -13.1631,
        longitude: -72.545,
        accessibleByCycling: false,
      },
      {
        spotName: 'Sydney Opera House',
        latitude: -33.8568,
        longitude: 151.2153,
        accessibleByCycling: true,
      },
      {
        spotName: 'Mount Everest',
        latitude: 27.9881,
        longitude: 86.9253,
        accessibleByCycling: false,
      },
      {
        spotName: 'Taj Mahal',
        latitude: 27.1751,
        longitude: 78.0421,
        accessibleByCycling: true,
      },
      {
        spotName: 'Colosseum',
        latitude: 41.8902,
        longitude: 12.4924,
        accessibleByCycling: true,
      },
      {
        spotName: 'Stonehenge',
        latitude: 51.1789,
        longitude: -1.8262,
        accessibleByCycling: true,
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('TouristSpots', null, {});
  },
};
