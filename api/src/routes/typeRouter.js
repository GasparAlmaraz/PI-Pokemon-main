const express = require('express');
const { getTypes, postType } = require('../controllers');

const typeRouter= express.Router();

typeRouter.get("/types", getTypes);
typeRouter.post("/types", postType);

module.exports = typeRouter;