/* eslint-disable nonblock-statement-body-position */
const User = require("../models/userModel");
const Otp = require("../models/otpModel");
const generateOtp = require("../utils/generateOtp");
const sendMail = require("../utils/email");
const createToken = require("../utils/createJwtToken");
const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.protect = catchAsync(async (req, res, next) => {
  //check the presence of the token if not they are not logged in
  if (
    !req.headers.authorization ||
    !req.headers.authorization.startsWith("Bearer")
  ) {
    return next(new AppError("You're not logged in", 403));
  }

  const access_token = req.headers.authorization.split(" ")[1];
  const decoded = await promisify(jwt.verify)(
    access_token,
    process.env.JWT_SECRET
  );

  if (!decoded) {
    return next(new AppError("Invalid Token Please Sign in Again", 404));
  }
  const currUser = await User.findById(decoded.id);

  if (!currUser)
    return next(
      new AppError("Your are not valid user please login again", 403)
    );

  req.user = currUser;

  next();
});

exports.verifyEmail = catchAsync(async (req, res, next) => {
  const { email, password, username } = req.body;

  const isUserExists = await User.findOne({ email });

  if (isUserExists) {
    return next(new AppError("User With This Mail Already Exists", 404));
  }
  let otp = generateOtp();
  otp = otp.toString();

  await Otp.create({
    email,
    password,
    username,
    otp,
  });

  await sendMail({
    email,
    subject: "User Verification - CareerSync",
    text: otp,
  });

  return res.status(200).json({
    status: "success",
    success: true,
    message: "Check Your Email For the Verification Code",
  });
});

exports.signUp = catchAsync(async (req, res, next) => {
  const { otp } = req.body;

  const isValidOtp = await Otp.findOne({ otp });

  if (!isValidOtp) return next(new AppError("Invalid Otp", 404));

  const { username, password, email } = isValidOtp;

  const newUser = await User.create({ username, password, email });

  if (!newUser) return next(new AppError("Problem in Creating new User"), 500);

  const token = createToken(newUser._id);

  return res
    .cookie("access_token", token, {
      withCredentials: true,
      httpOnly: false,
    })
    .status(200)
    .json({
      status: "success",
      success: true,
      message: "Signed Up Successfully !!",
    });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  const currUser = await User.findOne({ email });

  if (!currUser) return next(new AppError("User Not exists", 404));

  const isValidPass = await currUser.comparePassword(
    password,
    currUser.password
  );

  if (!isValidPass) {
    return next(new AppError("Please Provide Valid Email or Password", 404));
  }
  const token = createToken(currUser._id);

  return res
    .cookie("access_token", token, {
      // httpOnly: true,
      sameSite: "None",
      secure: true,
    })
    .status(200)
    .json({
      status: "success",
      success: true,
      message: "Logged in Successfully !!",
      token,
    });
});
