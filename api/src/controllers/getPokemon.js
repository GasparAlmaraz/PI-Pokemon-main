const { Pokemon, Type } = require("../db.js");

const getPokemon = async (req, res) => {
    try {
        const pokemons = await Pokemon.findAll({
            attributes: ['id', 'apiId', 'name', 'image', 'hp', 'attack', 'defense', 'speed'],
            include: {
                model: Type,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }
        });
        res.status(200).json(pokemons);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports = getPokemon;