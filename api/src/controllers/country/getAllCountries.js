const axios = require("axios");
const { Country } = require("../../db");

const getAllCountries = async () => {
  const bdd = await Country.findAll();

  if (!bdd.length) {
    const apiUrl = await axios.get(
      "https://rest-countries.up.railway.app/v3/all"
    );
    const apiInfo = apiUrl.data;
    const countriesData = await apiInfo.map((dat) => {
      return {
        id: dat.cca3,
        name: dat.name.common,
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
    return bddUpdated;
  } else {
    return bdd;
  }
};

module.exports = getAllCountries;
