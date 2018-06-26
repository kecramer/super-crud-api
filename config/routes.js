const express = require('express')
const router = express.Router()
const ctrl = require('../controllers');


// require models and seed data
const seedBooks = require('../seeds/books'),
    seedWines = require('../seeds/wines'),
    seedPokemon = require('../seeds/pokemon'),
    seedTodo = require('../seeds/todos');

router.route('/todos')
  .get(ctrl.todos.index)
  .post(ctrl.todos.create);

router.get('/todos/nuke', ctrl.todos.nuke);

router.route('/todos/:todoId')
  .get(ctrl.todos.show)
  .put(ctrl.todos.update)
  .delete(ctrl.todos.destroy);

router.route('/wines')
  .get(ctrl.wines.index)
  .post(ctrl.wines.create);

router.get('/wines/nuke', ctrl.wines.nuke);

router.route('/wines/:wineId')
  .get(ctrl.wines.show)
  .put(ctrl.wines.update)
  .delete(ctrl.wines.destroy);

router.route('/pokemon')
  .get(ctrl.pokemon.index)
  .post(ctrl.pokemon.create)

router.get('/pokemon/nuke', ctrl.pokemon.nuke);

router.route('/pokemon/:pokemonId')
  .get(ctrl.pokemon.show)
  .put(ctrl.pokemon.update)
  .delete(ctrl.pokemon.destroy);

router.route('/books').get(ctrl.books.index)
  .post(ctrl.books.create);

router.get('/books/nuke', ctrl.books.nuke);

router.route('/books/:bookId')
  .get(ctrl.books.show)
  .put(ctrl.books.update)
  .delete(ctrl.books.destroy);



// HOME & RESET ROUTES


module.exports = router