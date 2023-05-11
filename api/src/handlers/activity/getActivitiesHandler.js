const findAllActivities = require("../../controllers/activity/findAllActivities");

const getActivitiesHandler = async (req, res) => {
  try {
    const showActivities = await findAllActivities();

    res.status(200).json(showActivities);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getActivitiesHandler;
