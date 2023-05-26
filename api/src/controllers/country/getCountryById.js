const { Country, Activity } = require("../../db");

const getCountryById = async (id) => {
  const getCountry = await Country.findAll({
    where: {
      id,
    },
    include: {
      model: Activity,
      attributes: [
        "id",
        "name",
        "difficulty",
        "duration",
        "season",
        "images",
        "description",
      ],
      through: {
        attributes: [],
      },
    },
  });
  return getCountry;
};

module.exports = getCountryById;
