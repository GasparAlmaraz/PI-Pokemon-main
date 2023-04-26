const { Type } = require('../../db');
const axios = require('axios');

async function creatingTypes(){
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
    return types;
}

module.exports = creatingTypes;