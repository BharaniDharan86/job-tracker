const mongoose = require("mongoose");

const applicantSchema = new mongoose.Schema({
  yearsOfExperience: {
    type: Number,
    required: [true, "user should provide the years of experience"],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  job: {
    type: mongoose.Schema.ObjectId,
    ref: "JobInfo",
  },
});

const Applicant = mongoose.model("Applicant", applicantSchema);

module.exports = Applicant;
