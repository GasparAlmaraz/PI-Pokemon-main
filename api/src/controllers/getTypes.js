
const { creatingTypes } = require('./utils/creatingTypes');

const getTypes = async (req, res) => {
  try {
    
    const types = creatingTypes();

    res.status(200).json(types);
  } catch (error) {
    console.error(error);
    res.status(500).json(error.message);
  }
};

module.exports = getTypes;