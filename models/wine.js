var mongoose = require('mongoose');

module.exports = mongoose.model('Wine', new mongoose.Schema({
  name: String,
  year: String,
  country: String,
  description: String,
  image: String,
  price: Number
}));