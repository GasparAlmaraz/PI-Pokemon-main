const { Type } = require('../db');

const postType = async (req, res) => {
  const { types } = req.body;

  try {
    const newTypes = await Promise.all(types.map(async (type) => {
      const { name } = type.type;
      const newType = await Type.create({ name });
      return newType;
    }));

    res.status(201).json(newTypes);
  } catch (error) {
    console.error(error);
    res.status(500).json(error.message);
  }
};

module.exports = postType;