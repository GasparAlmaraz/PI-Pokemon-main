const express = require('express');
const { getPokemon, getPokeByID, getPokeByName, postPokemon } = require('../controllers');

const pokeRouter = express.Router();

pokeRouter.get("/pokemons", getPokemon);
pokeRouter.get("/pokemons/name", getPokeByName);
pokeRouter.get("/pokemons/:idPokemon", getPokeByID);

pokeRouter.post("/pokemons", postPokemon);

module.exports = pokeRouter;