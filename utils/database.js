const mongoose = require('mongoose');
const config = require('../config/mongoose')

const dbConnectionSuccess = () => {
    console.log(`Connected to mongo database`);
  };

  const dbConnectionError = (error = "") => {
    console.log(`Could not connect to mongo database`);
  };
const connect = async () => {  
    // connecting to mongo database
    mongoose
      .connect(config.url)
      .then(dbConnectionSuccess)
      .catch(dbConnectionError);
  };

module.exports={connect}