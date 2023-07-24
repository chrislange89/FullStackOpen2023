const express = require('express');

const app = express();

// node packages
const cors = require('cors');
const mongoose = require('mongoose');

// config
const config = require('./utils/config');
const logger = require('./utils/logger');
const middleware = require('./utils/middleware');

// routers
const blogRouter = require('./controllers/blogs');

const mongooseConnectionString = config.MONGODB_URI.replace('password', config.MONGODB_PASSWORD).replace('user', config.MONGODB_USER);

logger.info('Connecting to:', mongooseConnectionString, '\n');

mongoose.connect(mongooseConnectionString)
  .then(() => {
    logger.info('connected to MongoDB');
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message);
  });

app.use(cors());
app.use(express.static('build'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(middleware.requestLogger);

app.use('/api/blogs', blogRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
