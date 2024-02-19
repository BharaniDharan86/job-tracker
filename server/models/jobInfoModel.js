const mongoose = require("mongoose");

const jobInfoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    location: String,
    description: {
      type: String,
      required: true,
    },
    requirements: [String],
    responsibilities: [String],
    type: {
      type: String,
      enum: ["Full Time", "Part Time", "Internship", "Contract", "Freelance"],
      required: true,
    },
    salary: String,
    postedBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true, toJSON: true, toObject: true }
);

const JobInfo = mongoose.model("JobInfo", jobInfoSchema);

module.exports = JobInfo;
