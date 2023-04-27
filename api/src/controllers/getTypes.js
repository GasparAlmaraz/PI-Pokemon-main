const { Type } = require('../db');
const axios = require("axios");

const getTypes = async (req, res) => {
  try {

    let types = await Type.findAll();

    // Si la base de datos está vacía, obtenemos los tipos desde la API
    if (types.length === 0) {
      const response = await axios.get('https://pokeapi.co/api/v2/type');
      const apiTypes = response.data.results;

      // Mapeamos los datos de los tipos para guardarlos en la base de datos
      types = await Promise.all(
        apiTypes.map(async (type, index) => {
          const typeData = {
            id: index + 1, // Usamos el índice + 1 como id
            name: type.name,
          };
          return await Type.create(typeData);
        })
      );
    }

    res.status(200).json(types);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = getTypes;