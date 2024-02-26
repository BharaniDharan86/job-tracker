const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const createToken = require("../utils/createJwtToken");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.getCurrentUser = async (req, res, next) => {
  const userId = req.user._id;
  const userDetail = await User.findById(userId).select(
    "username email jobapplication userimage"
  );

  return res.status(200).json({
    status: "success",
    success: true,
    userDetail,
  });
};

//updating the user detail username

exports.updateMe = catchAsync(async (req, res, next) => {
  const userId = req.user._id;

  const { username } = req.body;

  const currUser = await User.findById(userId);

  if (!currUser) return next(new AppError("User not found", 404));

  if (username) {
    currUser.username = username;

    await currUser.save(); // Attempt to save changes
  }

  return res.status(200).json({
    status: "success",
    success: true,
    user: {
      username: currUser.username,
      email: currUser.email,
    },
  });
});

//update the user password

exports.updatePassword = catchAsync(async (req, res, next) => {
  const userId = req.user._id;
  const { password, newPassword } = req.body;
  const currUser = await User.findById(userId);
  const isValidPassword = currUser.password === password;
  // const isValidPassword = await bcrypt.compare(password, currUser.password);

  if (!isValidPassword) return next(new AppError("Invalid Password", 404));

  const hashedPassword = await bcrypt.hash(newPassword, 12);
  if (isValidPassword) {
    currUser.password = hashedPassword;
    await currUser.save();
  }
  const token = createToken(currUser._id);
  return res
    .cookie("access_token", token, {
      withCredentials: true,
      httpOnly: false,
    })
    .status(200)
    .json({
      status: "success",
      token,
    });
});
