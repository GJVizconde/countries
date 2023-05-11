const { Router } = require("express");
const getCountriesHandler = require("../handlers/country/getCountriesHandler");
const getCountryHandler = require("../handlers/country/getCountryHandler");

const countryRouter = Router();

countryRouter.get("/", getCountriesHandler);
countryRouter.get("/:id", getCountryHandler);

module.exports = countryRouter;
