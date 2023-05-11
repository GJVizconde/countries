const { Router } = require("express");
const axios = require("axios");
const countryRoutes = require("./countryRoutes");
const activityRoutes = require("./activityRoutes");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/countries", countryRoutes);
router.use("/activities", activityRoutes);

module.exports = router;
