const express = require("express");
const { applyJob } = require("../controllers/applicantController");
const { protect } = require("../controllers/authController");
const applyRoutes = express.Router();

applyRoutes.route("/:jobId").post(protect, applyJob);

module.exports = applyRoutes;
