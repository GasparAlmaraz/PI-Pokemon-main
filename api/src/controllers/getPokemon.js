const axios = require("axios");


//Este controller solicita hasta 1000 pokemones de la api
const getPokemon = async (req, res) => {
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000')
        const pokemons = response.data.results.map(pokemon => ({
            name: pokemon.name,
            url: pokemon.url
        }));
        res.status(200).json(pokemons);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports = getPokemon;