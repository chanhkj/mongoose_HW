var mongoose = require('mongoose')
// create a Schema
var citySchema = new mongoose.Schema({
  // _id: Number,
  name: String,
  email: String
})

var City = mongoose.model('City', citySchema)

module.exports = City
