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
        type: DataTypes.ENUM("1", "2", "3", "4", "5"),
        allowNull: false, //! Se puede colocar defaultValue: 1, en caso de necesitar un estado inicial
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNul: true,
      },
      season: {
        type: DataTypes.ENUM("Verano", "Otoño", "Invierno", "Primavera"),
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
