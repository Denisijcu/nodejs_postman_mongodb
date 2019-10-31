const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: 'config/config.env.env' });

const app = express();

const PORT = process.env.PORT || 5100;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);