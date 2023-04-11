const axios = require('axios');
const { Op } = require('sequelize');
const { Pokemon, Type } = require('../db');

const getPokeByName = async (req, res) => {
    const { name } = req.query;
    try {
        let pokemon = {};
        // Buscamos el pokemon en la base de datos
        pokemon = await Pokemon.findOne({
            where: { name: { [Op.iLike]: `%${name}%` } },
            include: Type,
        });
        // Si no se encontró el pokemon en la base de datos, lo buscamos en la API
        if (!pokemon) {
            const response = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${name}`
            );
            const apiPokemon = response.data;
            pokemon = {
                id: apiPokemon.id,
                name: apiPokemon.name,
                image: apiPokemon.sprites.other.dream_world.front_default,
                types: apiPokemon.types.map((type) => type.type.name),
                hp: apiPokemon.stats[0].base_stat,
                attack: apiPokemon.stats[1].base_stat,
                defense: apiPokemon.stats[2].base_stat,
                speed: apiPokemon.stats[5].base_stat,
                height: apiPokemon.height || null,
                weight: apiPokemon.weight || null,
            };
        }
        // Si no se encontró el pokemon en la base de datos ni en la API, mostramos un mensaje adecuado
        if (!pokemon) {
            return res.status(404).json({ message: 'Pokemon not found' });
        }
        res.status(200).json(pokemon);
    } catch (error) {
        console.error(error);
        res.status(500).json(error.message);
    }
};

module.exports = getPokeByName;