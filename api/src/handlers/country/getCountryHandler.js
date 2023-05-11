const getCountryById = require("../../controllers/country/getCountryById");

const getCountryHandler = async (req, res) => {
  try {
    const { id } = req.params;

    const getCountry = await getCountryById(id);

    res.status(200).json(getCountry);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getCountryHandler;
