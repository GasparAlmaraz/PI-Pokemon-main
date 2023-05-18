const axios = require("axios");
const { Pokemon, Type } = require("../db");
const getPokemonInfo = require("./utils/getPokemonInfo");
const setXTotalCount = require("./utils/setXTotalCount");
const sortNorder = require("./utils/sort&Order");
const filterData = require("./utils/filter");


// Controlador para obtener los pokemons de la base de datos y de la API
const getPokemon = async (req, res) => {
    try {
        const result = await Pokemon.findAll({
            attributes: ["id", "name", "image", "attack"],
            include: { model: Type, attributes: ["name"] }
        });
        const { _end, _order, _sort, _start, name } = req.query;

        let dbPokemons = [];

        if (result) {
            dbPokemons = result.map(pokemon => ({
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.image,
                type: pokemon.types.map(type => type.name),
                attack: pokemon.attack
            }));
        } else {
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=60");
            const apiPokemons = await Promise.all(response.data.results.map(getPokemonInfo));
            dbPokemons = await Promise.all(
                apiPokemons.map(async pokemon => {
                    const pokeData = {
                        id: pokemon.id,
                        name: pokemon.name,
                        image: pokemon.image,
                        type: pokemon.types.map(type => type.name),
                        attack: pokemon.attack
                    };
                    return await Pokemon.create(pokeData);
                })
            );
        }


        const pokemons = [...dbPokemons];

        let finalResult = pokemons;
        if (name) {
            finalResult = filterData(name, pokemons);
        }

        sortNorder(_sort, _order, pokemons);
        const total = pokemons.length;
        setXTotalCount(res, total);
        console.log(dbPokemons);
        console.log(pokemons);
        res.status(200).json(finalResult);
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message);
    }
};


module.exports = getPokemon;

//NOT WORKING PROPERLY