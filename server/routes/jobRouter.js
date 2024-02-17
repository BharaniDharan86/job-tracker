const express = require("express");
const jobRouter = express.Router();
const jobController = require("../controllers/jobController");
const authController = require("../controllers/authController");

jobRouter
  .route("/")
  .get(authController.protect, jobController.getJobByUser)
  .post(authController.protect, jobController.createJob);

jobRouter.route("/:id").get(jobController.getJobById);

module.exports = jobRouter;
