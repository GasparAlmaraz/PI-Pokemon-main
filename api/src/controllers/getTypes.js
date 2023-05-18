const { Type } = require('../db');
const axios = require("axios");
const setXTotalCount = require('./utils/setXTotalCount');
const sortNorder = require('./utils/sort&Order');
const filterData = require('./utils/filter');

const getTypes = async (req, res) => {

  const { _sort, _order, _end, _start, name } = req.query;
  let page = _start;
  let limit = _end;
  //const end = page + limit;
  //const totalPages = Math.ceil(types.lenght/ limit);

  try {

    let types = await Type.findAll();

    //Si la base de datos está vacía, obtenemos los tipos desde la API
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
    let finalResult = types;
    if(name){
      finalResult = filterData(name,finalResult);
    }
    sortNorder(_sort, _order, finalResult);
    setXTotalCount(res, finalResult.length);

    
    // const pageCount = Math.ceil(finalResult.length / limit);
    // if (!page) page = 1;
    // if (!limit) limit = 10;
    // if (page > pageCount) page = pageCount;
    // const start = page - 1 * limit;
    // const end = page + limit;
    //console.log(finalResult.slice(start, end));




    res.status(200).json(finalResult);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};

module.exports = getTypes;