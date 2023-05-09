const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const getApi = async () => {
  const apiUrl = await axios.get();
};

router.get("/countries", (req, res) => {
  res.send("Estoy en countries");
});

module.exports = router;
