const { Router } = require("express");
const createActivity = require("../controllers/createActivity");

const activityRouter = Router();

activityRouter.get("/", createActivity);

module.exports = activityRouter;
