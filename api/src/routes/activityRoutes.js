const createActivityHandler = require("../handlers/activity/createActivityHandler");
const getActivitiesHandler = require("../handlers/activity/getActivitiesHandler");

const { Router } = require("express");

const activityRouter = Router();

activityRouter.post("/", createActivityHandler);
activityRouter.get("/", getActivitiesHandler);

module.exports = activityRouter;
