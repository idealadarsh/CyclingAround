require('dotenv').config();
const express = require('express');

const authRoutes = require('./routes/authRoutes');
const spotsRoutes = require('./routes/spotsRoutes');
const estimateRoutes = require('./routes/estimateRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/spots', spotsRoutes);
app.use('/estimate', estimateRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the CyclingAround API!');
});

app.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}/`);
});
