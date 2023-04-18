const axios = require('axios');
const { Pokemon, Type } = require('../db');

const getPokeByID = async (req, res) => {
    const { idPokemon } = req.params;
    try {
        let pokemon = {};
        // Buscamos el pokemon en la base de datos, si el id ingresado no es de tipo numero
        // buscara por el id de la base de datos, osea, por UUID
        if (isNaN(idPokemon)) {
            result = await Pokemon.findByPk(idPokemon, {
                attributes: ["id", "name", "image", "attack", "defense", "speed", "weight", "height", "hp"]
                , include: { model: Type, attributes: ["name"], through: { attributes: [] } }
            }
            );

            pokemon = {
                id: result.id,
                name: result.name,
                image: result.image,
                attack: result.attack,
                defense: result.defense,
                speed: result.speed,
                weight: result.weight,
                height: result.height,
                hp: result.hp,
                type: result.types.map((type) => type.name),
            };
        } else {
            // Si el id enviado es de tipo numero, lo buscamos en la API
            const response = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${idPokemon}`
            );
            const apiPokemon = response.data;
            pokemon = {
                id: apiPokemon.id,
                name: apiPokemon.name,
                image: apiPokemon.sprites.front_default,
                type: apiPokemon.types.map((type) => type.type.name),
                hp: apiPokemon.stats[0].base_stat,
                attack: apiPokemon.stats[1].base_stat,
                defense: apiPokemon.stats[2].base_stat,
                speed: apiPokemon.stats[5].base_stat || null,
                height: apiPokemon.height || null,
                weight: apiPokemon.weight || null,
            };
        };
        res.status(200).json(pokemon);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

module.exports = getPokeByID;