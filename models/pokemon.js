const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  readyToEat: Boolean
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;
