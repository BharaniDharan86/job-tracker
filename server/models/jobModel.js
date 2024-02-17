const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  companyname: String,
  jobtitle: String,
  dateapplied: {
    type: Date,
    default: Date.now(),
  },
  location: String,
  employmenttype: {
    type: String,
    enum: ["Full Time", "Part Time", "Internship", "Remote", "Freelance"],
  },
  status: {
    type: String,
    default: "Pending",
    enum: ["Pending", "Rejected", "Interviewed", "Offered"],
  },
  salary: String,
  appliedplatform: String,
  notes: String,
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
