require('dotenv').config();

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/bloglist';
const { MONGODB_USER, MONGODB_PASSWORD } = process.env;

module.exports = {
  MONGODB_URI,
  PORT,
  MONGODB_USER,
  MONGODB_PASSWORD,
};
