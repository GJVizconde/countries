const { Activity, Country } = require("../../db");

const findAllActivities = () => {
  const activities = Activity.findAll({
    include: {
      model: Country,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  return activities;
};

module.exports = findAllActivities;
