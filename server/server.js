const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());

app.use(express.json());

// Database connection setup
const { Pool } = require('pg');

const pool = new Pool({
  user: 'dryfy',
  host: 'localhost',
  database: 'tesla_db',
  port: 5432,
});

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error connecting to the database', err);
  } else {
    console.log('Connected to the database at', res.rows[0].now);
  }
});

// API routes
app.get('/car-models', async (req, res) => {
    console.log('Request to /car-models received');
    try {
      const { rows } = await pool.query('SELECT * FROM car_models');
      res.json(rows);
    } catch (error) {
      console.error('Error fetching car models', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/model3', async (req, res) => {
  console.log('Request to /model3 received');
  try {
    const { rows } = await pool.query('SELECT * FROM model3');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching model 3', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/model3/:version', async (req, res) => {
  const version = req.params.version;
  console.log(`Request to /model3/${version} received`);
  try {
    const { rows } = await pool.query('SELECT * FROM model3 WHERE version = $1', [version]);
    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).json({ error: 'Model 3 version not found' });
    }
  } catch (error) {
    console.error('Error fetching model 3', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

  