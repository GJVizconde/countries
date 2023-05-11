const { Router } = require("express");
const getCountriesHandler = require("../handlers/countriesHandlers/getcountrieshandler");

const countryRouter = Router();

countryRouter.get("/", getCountriesHandler);

// countryRouter.get("/", async (req, res) => {
//   const { name } = req.query;

//   try {
//     if (name) {
//       const getName = await getNamesQ(name);
//       res.status.send(getName);
//     } else {
//       const allCountries = await getAllCountries();
//       res.status(200).send(allCountries);
//     }
//   } catch (error) {
//     res.status(404).json({ error: error.message });
//   }
// });

module.exports = countryRouter;
