var express = require('express')
var app = express()
var port = 5000

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
  extended: true
}))
// app.use('/city', city_routes)

var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/firestations-city')
mongoose.Promise = global.Promise

app.get('/', function(req, res) {
    res.send('Hi')
  })
  // create model
// var City = require('./models/city')


var firestationSchema = new mongoose.Schema({
  name: String,
  Address: String,
})

var citySchema = new mongoose.Schema({
  _id: Number,
  name: String,
  email: String,
})

var City = mongoose.model('City', citySchema)
var Firestations = mongoose.model('Firestations', firestationSchema)

// var firestation = new Firestations({
//   name: 'Jurong',
//   Address: 'Jurong West st 13'
// })
//
// var city = new City({
  // _id: 1,
//   name: 'Singapore',
//   email: 'singapore@gov.sg',
  // Firestations: [firestationSchema]
// })


City.create({
      City: [{
        _id: 1,
        name: 'Singapore',
        email: 'singapore@gov.sg'
      }],
      Firestations: [{
        name: 'Jurong',
        Address: 'Jurong West st 13'
      }, {
        name: 'East Coast',
        Address: 'East Coast Road'
      }, {
          name: 'Central',
          Address: 'Marina Boulevard Road'
      }]
    },
    function(err, city) {
      if (err) return console.log(err);
      console.log(City);
      console.log(Firestations)
    })

app.listen(port)
console.log('Server running at http://localhost:' + port + '/')
