const Applicant = require("../models/applicantModel");
const User = require("../models/userModel");
exports.applyJob = async (req, res, next) => {
  const { yearsOfExperience } = req.body;
  const user = req.user._id;
  const { jobId } = req.params;

  const newApplication = await Applicant.create({
    job: jobId,
    user,
    yearsOfExperience,
  });

  const currUser = await User.findByIdAndUpdate(
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
  });
};
