//job -model
const JobInfo = require("../models/jobInfoModel");

exports.postJob = async (req, res, next) => {
  //get the user from the protect controlller
  const user = req.user._id;

  try {
    const newJob = await JobInfo.create({ ...req.body, postedBy: user });

    if (!newJob) throw new Error("Something Went Wrong");

    return res.status(200).json({
      status: "success",
      success: true,
      newJob,
    });
  } catch (error) {
    return res.status(400).json({
      status: "failed",
      success: false,
      message: error.message,
    });
  }
};

exports.getAllJob = async (req, res, next) => {
  try {
    const allJobs = await JobInfo.find().populate({
      path: "postedBy",
      select: "username -_id",
    });
    return res.status(200).json({
      status: "success",
      success: false,
      results: allJobs.length,
      allJobs,
    });
  } catch (error) {
    return res.status(400).json({
      status: "failed",
      success: false,
      message: error.message,
    });
  }
};

exports.getMyJob = async (req, res, next) => {
  const postedBy = req.user._id;

  const jobsByUser = await JobInfo.find({ postedBy });

  return res.status(200).json({
    status: "success",
    success: false,
    results: jobsByUser.length,
    jobsByUser,
  });
};

exports.getJobById = async (req, res, next) => {
  const { id } = req.params;

  const job = await JobInfo.findById(id);

  return res.status(200).json({
    status: "success",
    success: true,
    job,
  });
};
