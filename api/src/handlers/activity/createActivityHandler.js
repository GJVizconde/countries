const createActivity = require("../../controllers/activity/createActivity");

const createActivityHandler = async (req, res) => {
  try {
    const {
      name,
      difficulty,
      duration,
      season,
      countries,
      images,
      description,
    } = req.body;

    const newActivity = await createActivity({
      name,
      difficulty,
      duration,
      season,
      countries,
      images,
      description,
    });

    res.status(201).json(newActivity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = createActivityHandler;
