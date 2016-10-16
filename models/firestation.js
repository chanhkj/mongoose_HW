var mongoose = require('mongoose')

// create a Schema
var firestationSchema = new mongoose.Schema({
  name: String,
  Address: String
})

var Firestation = mongoose.model('Firestation', firestationSchema)

module.exports = Firestation
