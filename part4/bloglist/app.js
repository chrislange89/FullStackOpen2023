const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const blogRouter = require('./controllers/blogs');

const config = require('./utils/config');
const logger = require('./utils/logger');
const middleware = require('./utils/middleware');

const app = express();

const mongooseConnectionString = config.MONGODB_URI.replace('<password>', config.MONGODB_PASSWORD).replace('<user>', config.MONGODB_USER);

mongoose.connect(mongooseConnectionString)
  .then(() => {
    logger.info('connected to MongoDB');
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message);
  });

app.use(middleware.requestLogger);
app.use('/api/blogs', blogRouter);

app.use(cors());
app.use(express.json());


app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
