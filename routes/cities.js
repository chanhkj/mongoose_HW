var express = require('express')
var router = express.Router()

var City = require('../models/cities')

router.get('/', function(req, res) {
  City.find({}, function(err, moviesArr) {
    if (err) throw new Error(err)
  })
}).get('/new', function (req, res) {
  // NEW route under NEW.EJS
  res.render('movies/new')
}).get('/:id', function (req, res) {
  res.send('citie\'s ' + req.params.id + ' details')
}).get('/:id/edit', function (req, res) {
  res.send('edit citie\'s ' + req.params.id + ' details')
})
