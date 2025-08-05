const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const dotenvx = require('@dotenvx/dotenvx').config()
const connectToMongoDB = require('./connect');
const routes = require('./routes/urlRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:5173', // allow requests from your React frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

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
