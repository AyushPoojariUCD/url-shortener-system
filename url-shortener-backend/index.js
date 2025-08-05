const express = require('express');
const dotenv = require('dotenv');
const dotenvx = require('@dotenvx/dotenvx').config()
const connectToMongoDB = require('./connect');
const routes = require('./routes/urlRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectToMongoDB(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');

    // Middleware
    app.use(express.json());

    // Routes
    app.use('/', routes);

    // Start the server after DB connection
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err.message);
    process.exit(1);
  });
