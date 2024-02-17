// create job
const Job = require("../models/jobModel");

exports.createJob = async (req, res, next) => {
  //get the all the information about the user
  const jobDetails = req.body;

  try {
    //create the job
    const newJob = await Job.create(jobDetails);
    if (!newJob) throw new Error("There was problem while creating a new job");
    //send the response
    return res.status(201).json({
      status: "success",
      success: true,
      message: "Job created successfully",
    });
  } catch (error) {
    return res.status(400).json({
      status: "failed",
      success: false,
      message: error.message,
    });
  }
};
