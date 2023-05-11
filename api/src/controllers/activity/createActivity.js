const { Activity } = require("../../db");

const createActivity = async (activity) => {
  const newUser = await Activity.create(activity);

  return newUser;
};

module.exports = createActivity;
