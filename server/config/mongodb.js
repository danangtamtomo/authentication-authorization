const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const mongoConnection = mongoose.connect('mongodb://localhost/authauth')

module.exports = mongoConnection