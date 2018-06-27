var mongoose = require('mongoose');

module.exports = mongoose.model('Pokemon', new mongoose.Schema({
  name: String,
  pokedex: String,
  evolves_from: String,
  image: String
}));

