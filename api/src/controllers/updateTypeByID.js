const { Type } = require('../db');

const updateTypes = async (req, res) => {

    const body = req.body;
    const { id } = req.params;

    try {
        let response = {};
        await Type.update(body, { where: { id: id } })
            .then(num => {
                if (num == 1) response = body;
            });

        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message);
    }
};

module.exports = updateTypes;