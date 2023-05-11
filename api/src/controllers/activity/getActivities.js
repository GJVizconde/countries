const { Activity } = require("../../db");

const getActivities = () => {
  const activities = Activity.findAll();
  return activities;
};

module.exports = getActivities;
