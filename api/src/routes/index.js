const { Router } = require('express');
const pokeRouter = require('./pokerouter');
const typeRouter = require('./typerouter');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(pokeRouter);
router.use(typeRouter);

module.exports = router;
