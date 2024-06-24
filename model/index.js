const mongoose = require('mongoose')
const collectionNames = require('../config/collectionNames')
 
module.exports = {
    Users: require('./user')(mongoose,collectionNames.USERS)
}