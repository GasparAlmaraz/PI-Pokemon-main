const { Pokemon, Type } = require('../db');

const postPokemon = async (req, res) => {
    try {
        // Extraemos los datos del body del request
        const { name, image, hp, attack, defense, speed, height, weight, type} = req.body;

        // Creamos el pokemon en la base de datos
        const newPokemon = await Pokemon.create({
            name,
            image,
            hp,
            attack,
            defense,
            speed: speed ? speed: null,
            height: height ? height: null,
            weight: weight ? weight : null,
        });

        // Buscamos los tipos asociados por su nombre en la base de datos
        const typeInstances = await Type.findAll({
            where: {
              name: type.map(type => type.name)
            }
        });
    
        // Asociamos los tipos al nuevo pokemon
        await newPokemon.addTypes(typeInstances);

        // Buscamos el pokemon recién creado con sus tipos asociados y lo enviamos como respuesta
        const createdPokemon = await Pokemon.findByPk(newPokemon.id, { include: {model: Type, attributes: ["name"], through: {attributes: []} }});
        res.status(200).json(createdPokemon);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

module.exports = postPokemon;