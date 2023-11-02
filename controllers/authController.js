const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

const JWT_SECRET = process.env.JWT_SECRET;

const authenticateUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { username } });
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign(
        { username: user.username, id: user.id },
        JWT_SECRET
      );
      res.json({ token });
    } else {
      res.status(401).send('Authentication failed');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  authenticateUser,
};
