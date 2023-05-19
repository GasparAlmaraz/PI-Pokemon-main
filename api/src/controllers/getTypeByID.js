const {Type} = require("../db");

const getTypeById = async (req,res) => {

    const {id} = req.params
    try {
        const result = await Type.findByPk(id);

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports = getTypeById;