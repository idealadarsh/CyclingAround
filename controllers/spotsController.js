const TouristSpot = require('../models/spot');

const listSpots = async (req, res) => {
  try {
    const spots = await TouristSpot.findAll({ attributes: ['spotName'] });
    res.json(spots);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getSpot = async (req, res) => {
  const { spotName } = req.params;
  try {
    const spot = await TouristSpot.findOne({ where: { spotName } });
    if (spot) {
      res.json(spot);
    } else {
      res.status(404).send('Spot not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  listSpots,
  getSpot,
};
