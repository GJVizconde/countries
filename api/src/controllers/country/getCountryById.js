const { Country, Activity } = require("../../db");

const getCountryById = async (id) => {
  const getCountry = await Country.findAll({
    where: {
      id,
    },
    include: [Activity],
  });
  return getCountry;
};

module.exports = getCountryById;
