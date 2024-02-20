const express = require("express");
const {
  postJob,
  getAllJob,
  getMyJob,
  getJobById,
} = require("../controllers/jobInfoController");
const { protect } = require("../controllers/authController");
const jobInfoRoutes = express.Router();

jobInfoRoutes.route("/").get(getAllJob).post(protect, postJob);
jobInfoRoutes.route("/myjobs").get(protect, getMyJob);
jobInfoRoutes.route("/:id").get(getJobById);

module.exports = jobInfoRoutes;
