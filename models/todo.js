var mongoose = require('mongoose'); 

module.exports = mongoose.model('Todo', new mongoose.Schema({
  body: String,
  priority: Number,
  completed: Boolean
}));
