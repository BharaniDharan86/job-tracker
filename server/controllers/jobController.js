/* eslint-disable nonblock-statement-body-position */
/* eslint-disable multiline-ternary */
/* eslint-disable no-console */
// create job
const { default: mongoose } = require("mongoose");
const Job = require("../models/jobModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.createJob = catchAsync(async (req, res, next) => {
  //get the all the information about the user
  const jobDetails = req.body;

  console.log(req.body);

  //create the job
  const newJob = await Job.create({ ...jobDetails, user: req.user._id });
  if (!newJob)
    return next(
      new AppError("There was problem while creating a new job", 404)
    );
  //send the response
  return res.status(201).json({
    status: "success",
    success: true,
    message: "Job created successfully",
  });
});

exports.getJobById = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const job = await Job.findById(id);

  if (!job) return next(new AppError("Invalid Job Id", 404));

  return res.status(200).json({
    status: "success",
    success: true,
    job,
  });
});

exports.getJobByUser = catchAsync(async (req, res, next) => {
  const userId = req.user._id;

  const { filter, sort } = req.query;

  let query =
    filter === "All"
      ? Job.find({ user: userId })
      : Job.find({ user: userId, status: filter });
  if (sort) {
    query = query.sort(sort);
  }

  const jobs = await query;

  if (!jobs) return next(new AppError("Invalid Job Id", 404));
  return res.status(200).json({
    status: "success",
    success: true,
    results: jobs.length,
    jobs,
  });
});

//update status

exports.updateStatus = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const updatedJob = await Job.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!updatedJob) return next(new AppError("Invalid Job Id", 404));

  return res.status(200).json({
    status: "success",
    success: true,
    message: "Updated Successfully",
  });
});

//stats

exports.jobStats = catchAsync(async (req, res, next) => {
  const userId = new mongoose.Types.ObjectId(req.user._id);

  const query = await Job.aggregate([
    {
      $match: {
        user: userId,
      },
    },
    {
      $group: {
        _id: "$status",
        nums: {
          $sum: 1,
        },
      },
    },
  ]);

  const totalApplications = query.reduce((acc, curr) => {
    return (acc += curr.nums);
  }, 0);

  return res.status(200).json({
    totalApplications,
    query,
  });
});

exports.deleteJobById = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  await Job.findByIdAndDelete(id);
  return res.status(200).json({
    status: "success",
    success: true,
  });
});
