require('dotenv').config();

module.exports = {
    url: `mongodb://127.0.0.1:27017/${process.env.DB_NAME}`,
    dbName: process.env.DB_NAME,
  };
  