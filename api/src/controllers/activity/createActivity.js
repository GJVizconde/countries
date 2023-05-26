const { Activity } = require("../../db");

const createActivity = async ({
  name,
  difficulty,
  duration,
  season,
  countries,
  images,
  description,
}) => {
  const newActivity = await Activity.create({
    name,
    difficulty,
    duration,
    season,
    images,
    description,
  });

  newActivity.addCountries(countries);

  return newActivity;
};

module.exports = createActivity;
