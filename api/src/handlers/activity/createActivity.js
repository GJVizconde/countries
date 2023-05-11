const createActivity = (req, res) => {
  const { name } = req.body;
  try {
    res
      .status(200)
      .send(
        "Aqui creare actividades, por Body y tendra los paises que lo contengan "
      );
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = createActivity;
