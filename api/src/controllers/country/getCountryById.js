const { Country, Activity } = require("../../db");

const getCountryById = async (id) => {
  const getCountry = await Country.findAll({
    where: {
      id,
    },
    include: {
      model: Activity,
      attributes: ["name", "difficulty", "duration", "season"],
      through: {
        attributes: [],
      },
    },
  });
  return getCountry;
};

module.exports = getCountryById;
