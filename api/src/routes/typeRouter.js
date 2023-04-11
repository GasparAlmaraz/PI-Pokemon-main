const express = require('express');
const { getTypes } = require('../controllers');

const typeRouter= express.Router();

typeRouter.get("/types", getTypes);

module.exports = typeRouter;