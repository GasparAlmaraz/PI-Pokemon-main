const express = require('express');
const { getTypes } = require('../controllers');
const getTypeById = require('../controllers/getTypeByID');
const updateTypes = require('../controllers/updateTypeByID');
const deleteTypes = require('../controllers/deleteTypes');

const typeRouter= express.Router();

typeRouter.get("/types", getTypes);
typeRouter.get("/types/:id", getTypeById);
typeRouter.put("/types/:id", updateTypes);
typeRouter.delete("/types/:id", deleteTypes);

module.exports = typeRouter;