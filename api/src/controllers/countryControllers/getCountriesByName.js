const { Country, Activity } = require("../../db");
const { Op } = require("sequelize");

const getCountriesByName = async (name) => {
  const bddCountries = await Country.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
  });
  return bddCountries;
};

module.exports = getCountriesByName;
