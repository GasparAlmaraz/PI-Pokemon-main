const axios = require("axios");
const { Pokemon, Type } = require("../db");


// Función para obtener los detalles de un pokemon individual
const getPokemonDetails = async (pokemon) => {
    try {
        const response = await axios.get(pokemon.url);
        const { name, sprites, types } = response.data;
        const image = sprites.front_default;
        const type = types.map(type => type.type.name);

        return { name, image, type };
    } catch (error) {
        console.error(`Error getting details for ${pokemon.name}`, error);
        return null;
    }
};

// Controlador para obtener los pokemons de la base de datos y de la API
const getPokemon = async (req, res) => {
    try {
        const dbPokemons = await Pokemon.findAll({
            attributes: ["name", "image"],
            include: {model: Type, attributes: ["name"], through: {attributes: []} }
        });
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
        const apiPokemons = await Promise.all(response.data.results.map(getPokemonDetails));
        const pokemons = [...dbPokemons, ...apiPokemons];
        

        res.status(200).json(pokemons);
    } catch (error) {
        res.status(500).json(error.message);
    }
};


module.exports = getPokemon;