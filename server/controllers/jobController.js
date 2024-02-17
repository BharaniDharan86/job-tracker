// create job
const Job = require("../models/jobModel");

exports.createJob = async (req, res, next) => {
  //get the all the information about the user
  const jobDetails = req.body;

  try {
    //create the job
    const newJob = await Job.create({ ...jobDetails, user: req.user._id });
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

exports.getJobById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const job = await Job.findById(id);

    if (!job) throw new Error("Invalid Job Id");

    return res.status(200).json({
      status: "success",
      success: true,
      job,
    });
  } catch (error) {
    return res.status(400).json({
      status: "failed",
      success: false,
      message: error.message,
    });
  }
};

exports.getJobByUser = async (req, res, next) => {
  const userId = req.user._id;

  try {
    const jobs = await Job.find({ user: userId });
    if (!jobs) throw new Error("Invalid Job Id");

    return res.status(200).json({
      status: "success",
      success: true,
      results: jobs.length,
      jobs,
    });
  } catch (error) {
    return res.status(400).json({
      status: "failed",
      success: false,
      message: error.message,
    });
  }
};

//update status

exports.updateStatus = async (req, res, next) => {
  const { id } = req.params;

  try {
    const updatedJob = await Job.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedJob) throw new Error("Invalid Job Id");

    return res.status(200).json({
      status: "success",
      success: true,
      message: "Updated Successfully",
    });
  } catch (error) {
    return res.status(400).json({
      status: "failed",
      success: false,
      message: error.message,
    });
  }
};

//update job de

//delete job
