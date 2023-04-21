const axios = require("axios");
const { Pokemon, Type } = require("../db");


// Función para obtener los detalles de un pokemon individual
const getPokemonDetails = async (pokemon) => {
    try {
        const response = await axios.get(pokemon.url);
        const { id, name, sprites, types, stats } = response.data;
        const image = sprites.front_default;
        const type = types.map(type => type.type.name);
        const attack = stats[1].base_stat;

        return { id, name, image, type, attack };
    } catch (error) {
        console.error(`Error getting details for ${pokemon.name}`, error);
        return null;
    }
};

// Controlador para obtener los pokemons de la base de datos y de la API
const getPokemon = async (req, res) => {
    try {
        const result = await Pokemon.findAll({
            attributes: ["id", "name", "image"],
            include: { model: Type, attributes: ["name"], through: { attributes: [] } }
        });

        let dbPokemons = [];
        if (result) {
            dbPokemons = result.map(pokemon => ({
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.image,
                type: pokemon.types.map((type) => type.name),
                attack: pokemon.stats[1].base_stat
            }));
        }

        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=60");
        const apiPokemons = await Promise.all(response.data.results.map(getPokemonDetails));
        const pokemons = [...dbPokemons, ...apiPokemons];


        res.status(200).json(pokemons);
    } catch (error) {
        res.status(500).json(error.message);
    }
};


module.exports = getPokemon;