const mongoose = require('mongoose')
const router = require('express').Router()
const db = require('../models')

const placeSchema = new mongoose.Schema({
  name: { type:String, required: true },
  pic: String,
  cuisines: { type:String, required: true },
  city: { type:String, default: 'Anytown' },
  state: { type:String, default: 'USA' },
  founded: Number
})

const router = require('express').Router()
const db = require('../models')

router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
      res.render('places/index', { places })
    })
    .catch(err => {
      console.log(err) 
      res.render('error404')
    })
})

router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
      res.redirect('/places')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

module.exports = mongoose.model('Place', placeSchema)
