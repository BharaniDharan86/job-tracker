const Applicant = require("../models/applicantModel");
const User = require("../models/userModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.applyJob = catchAsync(async (req, res, next) => {
  const { yearsOfExperience } = req.body;
  const user = req.user._id;
  const { jobId } = req.params;

  

  const newApplication = await Applicant.create({
    job: jobId,
    user,
    yearsOfExperience,
  });

  if (!newApplication) {
    return next(new AppError("Error Creating the new Application", 4000));
  }

  if (!newApplication) {
    next(new AppError("Cannot to Apply for this Job", 400));
  }

  await User.findByIdAndUpdate(
    user,
    {
      $addToSet: {
        jobapplication: jobId,
      },
    },
    {
      new: true,
      runValidators: true,
    }
  );

  return res.status(200).json({
    status: "success",
    success: true,
    message: "applied for the job",
    newApplication,
  });
});

exports.viewApplicantDetail = catchAsync(async (req, res, next) => {
  const { jobId } = req.params;

  const applicants = await Applicant.find({ job: jobId }).populate({
    path: "user",
    select: "email username",
  });

  if (!applicants) return next(new AppError("failed to fetch the jobs", 404));

  return res.status(200).json({
    status: "success",
    success: true,
    applicants,
  });
});
