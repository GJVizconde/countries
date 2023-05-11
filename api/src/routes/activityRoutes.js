const createActivityHandler = require("../handlers/activity/createActivityHandler");

const { Router } = require("express");

const activityRouter = Router();

activityRouter.post("/", createActivityHandler);

module.exports = activityRouter;
