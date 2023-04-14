const axios = require('axios');
const { Pokemon, Type } = require('../db');

const getPokeByID = async (req, res) => {
    const { idPokemon } = req.params;
    try {
        let pokemon = {};
        // Buscamos el pokemon en la base de datos, si el id ingresado no es de tipo numero
        // buscara por el id de la base de datos, osea, por UUID
        if(isNaN(idPokemon)) {
            pokemon = await Pokemon.findByPk(idPokemon, { include: Type })
        }else{
            // Si el id enviado es de tipo numero, lo buscamos en la API
            const response = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${idPokemon}`
            );
            const apiPokemon = response.data;
            pokemon = {
                id: apiPokemon.id,
                name: apiPokemon.name,
                image: apiPokemon.sprites.front_default,
                types: apiPokemon.types.map((type) => type.type.name),
                hp: apiPokemon.stats[0].base_stat,
                attack: apiPokemon.stats[1].base_stat,
                defense: apiPokemon.stats[2].base_stat,
                speed: apiPokemon.stats[5].base_stat,
                height: apiPokemon.height || null,
                weight: apiPokemon.weight || null,
            };
        };
        res.status(200).json(pokemon);
    } catch (error) {
        console.error(error);
        res.status(500).json(error.message);
    }
};

module.exports = getPokeByID;