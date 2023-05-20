const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "activity",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true, //! implica nn y un
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      difficulty: {
        type: DataTypes.INTEGER,
        allowNull: false, //! Se puede colocar defaultValue: 1, en caso de necesitar un estado inicial
        validate: {
          min: 1,
          max: 5,
        },
      },
      duration: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      season: {
        type: DataTypes.ENUM("Summer", "Autumn/Fall", "Winter", "Spring"),
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
