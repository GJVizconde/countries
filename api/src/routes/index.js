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

// router.get("/countries/:id", (req, res) => {
//   try {
//     const { id } = req.params;
//     res
//       .status(200)
//       .send("Motrare el pais obtenido por Params, sus datos y sus actividades");
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// router.post("/activities/", (req, res) => {
//   try {
//     const { name } = req.body;
//     res
//       .status(200)
//       .send(
//         "Aqui creare actividades, por Body y tendra los paises que lo contengan "
//       );
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// router.get("/activities/", (req, res) => {
//   try {
//     const { id } = req.params;
//     res
//       .status(200)
//       .send(
//         "Obtener un arreglo de objetos donde estaran todas las actividades "
//       );
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

module.exports = router;
