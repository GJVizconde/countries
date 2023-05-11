const axios = require("axios");
const { Country } = require("../db");

const getAllCountries = async (req, res) => {
  try {
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

    const bdd = await Country.findAll();

    if (bdd.length === 0) {
      await Country.bulkCreate(countriesData);
      bdd;
    } else {
      bdd;
    }

    const result = await Promise.all([countriesData, bdd]);

    return res.status(200).json(result[1]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAllCountries;
