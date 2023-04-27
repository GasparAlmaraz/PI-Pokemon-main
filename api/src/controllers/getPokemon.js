const axios = require("axios");
const { Pokemon, Type } = require("../db");
const getPokemonInfo = require("./utils/getPokemonInfo");


// Controlador para obtener los pokemons de la base de datos y de la API
const getPokemon = async (req, res) => {
    try {
        const result = await Pokemon.findAll({
            attributes: ["id", "name", "image", "attack"],
            include: { model: Type, attributes: ["name"] }
        });

        let dbPokemons = [];
        
        if (result) {
            dbPokemons = result.map(pokemon => ({
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.image,
                type: pokemon.types.map((type) => type.name),
                attack: pokemon.attack
            }));
        }

        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");
        const apiPokemons = await Promise.all(response.data.results.map(getPokemonInfo));
        const pokemons = [...dbPokemons, ...apiPokemons];


        res.status(200).json(pokemons);
    } catch (error) {
        res.status(500).json(error.message);
    }
};


module.exports = getPokemon;