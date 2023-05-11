const getCountriesByName = require("../../controllers/countryControllers/getCountriesByName");
const getAllCountries = require("../../controllers/countryControllers/getAllCountries");

const getCountriesHandler = async (req, res) => {
  try {
    const { name } = req.query;

    results = name ? await getCountriesByName(name) : await getAllCountries();

    res.status(200).json(results);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getCountriesHandler;
