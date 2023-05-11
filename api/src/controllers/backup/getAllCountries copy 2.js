const axios = require("axios");
const { Country } = require("../../db");

const getAllCountries = async (req, res) => {
  try {
    const bdd = await Country.findAll();

    if (!bdd.length) {
      const apiUrl = await axios.get("https://restcountries.com/v3/all");
      const apiInfo = apiUrl.data;
      const countriesData = await apiInfo.map((dat) => {
        return {
          id: dat.cca3,
          name: dat.translations.spa.common,
          flags: dat.flags[1],
          continent: dat.continents[0],
          capital: dat.capital ? dat.capital[0] : "Undefined capital city",
          subregion: dat.subregion ? dat.subregion : "Undefined subregion",
          area: dat.area,
          population: dat.population,
        };
      });

      await Country.bulkCreate(countriesData);

      const bddUpdated = await Country.findAll();
      return res.status(200).json(bddUpdated);
    } else {
      return res.status(200).json(bdd);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAllCountries;
