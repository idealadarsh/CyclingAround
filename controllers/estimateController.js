const TouristSpot = require('../models/spot');
const CyclingEstimate = require('../models/estimate');
const haversineDistance = require('../utils/haversineDistance');

const calculate = async (req, res) => {
  const { spotName, cyclingSpeed, dailyCyclingHours } = req.body;
  try {
    const spot = await TouristSpot.findOne({ where: { spotName } });
    if (spot && spot.accessibleByCycling) {
      const userLocation = {
        latitude: req.body.latitude,
        longitude: req.body.longitude,
      };
      const spotLocation = {
        latitude: spot.latitude,
        longitude: spot.longitude,
      };
      const distance = haversineDistance(userLocation, spotLocation);
      const estimatedTime = distance / (cyclingSpeed * dailyCyclingHours);
      await CyclingEstimate.create({
        ...req.body,
        estimatedTime,
        SpotID: spot.id,
        UserID: req.user.id,
      });
      res.json({ estimatedTime });
    } else {
      res
        .status(400)
        .send('Spot is not accessible by cycling or does not exist');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getEstimate = async (req, res) => {
  try {
    const estimates = await CyclingEstimate.findAll({
      where: { UserID: req.user.id },
    });
    res.json(estimates);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  calculate,
  getEstimate,
};
