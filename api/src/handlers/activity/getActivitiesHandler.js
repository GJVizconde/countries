const getActivities = require("../../controllers/activity/getActivities");

const getActivitiesHandler = async (req, res) => {
  try {
    const showActivities = await getActivities();

    res.status(200).json(showActivities);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getActivitiesHandler;
