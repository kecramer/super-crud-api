var mongoose = require("mongoose");
mongoose.connect(
  process.env.MONGODB_URI ||
  'mongodb://localhost/super-crud-api'
);

module.exports.Book = require('./book');
module.exports.Wine = require('./wine');
module.exports.Pokemon = require('./pokemon');
module.exports.Todo = require('./todo');
module.exports.Watcher = require('./watcher');
