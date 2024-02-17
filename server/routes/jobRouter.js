const express = require("express");
const jobRouter = express.Router();
const jobController = require("../controllers/jobController");
const authController = require("../controllers/authController");

jobRouter.route("/").post(authController.protect, jobController.createJob);

module.exports = jobRouter;
