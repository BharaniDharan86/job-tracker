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
jobInfoRoutes.route("/:id").get(getJobById);
jobInfoRoutes.route("/myjobs").get(protect, getMyJob);

module.exports = jobInfoRoutes;
