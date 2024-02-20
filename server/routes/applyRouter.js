const express = require("express");
const {
  applyJob,
  viewApplicantDetail,
} = require("../controllers/applicantController");
const { protect } = require("../controllers/authController");
const applyRoutes = express.Router();

applyRoutes
  .route("/:jobId")
  .post(protect, applyJob)
  .get(protect, viewApplicantDetail);

module.exports = applyRoutes;
