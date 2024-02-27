//job -model

const JobInfo = require("../models/jobInfoModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.postJob = catchAsync(async (req, res, next) => {
  //get the user from the protect controlller
  const user = req.user._id;

  const newJob = await JobInfo.create({ ...req.body, postedBy: user });

  if (!newJob) return next(new AppError("Something Went Wrong", 404));

  return res.status(200).json({
    status: "success",
    success: true,
    newJob,
  });
});

exports.getAllJob = catchAsync(async (req, res, next) => {
  const { searchTerm } = req.query;
  const regex = new RegExp(searchTerm, "i");
  const query = JobInfo.find({
    $or: [{ title: { $regex: regex } }, { company: { $regex: regex } }],
  });
  const allJobs = await query.populate({
    path: "postedBy",
    select: "username ",
  });

  return res.status(200).json({
    status: "success",
    success: false,
    results: allJobs.length,
    allJobs,
  });
});

exports.getMyJob = catchAsync(async (req, res, next) => {
  const postedBy = req.user._id;

  const jobsByUser = await JobInfo.find({ postedBy });

  return res.status(200).json({
    status: "success",
    success: false,
    results: jobsByUser.length,
    jobsByUser,
  });
});

exports.getJobById = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const job = await JobInfo.findById(id).populate({
    path: "postedBy",
    select: "username ",
  });

  return res.status(200).json({
    status: "success",
    success: true,
    job,
  });
});

exports.searchJob = catchAsync(async (req, res, next) => {
  const jobs = await JobInfo.find();
  return res.status(200).json({
    status: "success",
    sucess: true,
    jobs,
  });
});
