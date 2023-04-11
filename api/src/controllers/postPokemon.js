const { Pokemon, Type } = require('../db');

const postPokemon = async (req, res) => {
    try {
        // Extraemos los datos del body del request
        const { name, image, hp, attack, defense, speed, height, weight, types } = req.body;

        // Creamos el pokemon en la base de datos
        const newPokemon = await Pokemon.create({
            name,
            image,
            hp,
            attack,
            defense,
            speed,
            height,
            weight,
        });

        // Buscamos los tipos asociados por su nombre en la base de datos
        const typesDb = await Type.findAll({
            where: { name: types },
        });

        // Asociamos los tipos al nuevo pokemon
        await newPokemon.addTypes(typesDb);

        // Buscamos el pokemon recién creado con sus tipos asociados y lo enviamos como respuesta
        const createdPokemon = await Pokemon.findByPk(newPokemon.id, { include: Type });
        res.status(200).json(createdPokemon);
    } catch (error) {
        console.error(error);
        res.status(500).json(error.message);
    }
};

module.exports = postPokemon;