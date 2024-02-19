const User = require("../models/userModel");
const Otp = require("../models/otpModel");
const generateOtp = require("../utils/generateOtp");
const sendMail = require("../utils/email");
const createToken = require("../utils/createJwtToken");
const { promisify } = require("util");
const jwt = require("jsonwebtoken");

exports.protect = async (req, res, next) => {
  //check the presence of the token if not they are not logged in

  if (
    !req.headers.authorization ||
    !req.headers.authorization.startsWith("Bearer")
  ) {
    throw new Error("You're not logged in");
  }

  const access_token = req.headers.authorization.split(" ")[1];
  console.log(access_token);
  const decoded = await promisify(jwt.verify)(
    access_token,
    process.env.JWT_SECRET
  );

  if (!decoded) throw new Error("Invalid Token Please Sign in Again");

  const currUser = await User.findById(decoded.id);

  if (!currUser) throw new Error("Your are not valid user please login again");

  req.user = currUser;

  next();
};

exports.verifyEmail = async (req, res, next) => {
  const { email, password, username } = req.body;

  try {
    const isUserExists = await User.findOne({ email });

    if (isUserExists) throw new Error("User With This Mail Already Exists");

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
  } catch (error) {
    return res.status(400).json({
      status: "failed",
      success: false,
      message: error.message,
    });
  }
};

exports.signUp = async (req, res, next) => {
  const { otp } = req.body;

  try {
    const isValidOtp = await Otp.findOne({ otp });

    if (!isValidOtp) throw new Error("Invalid Otp");

    const { username, password, email } = isValidOtp;

    const newUser = await User.create({ username, password, email });

    if (!newUser) throw new Error("Problem in Creating new User");

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
  } catch (error) {
    return res.status(400).json({
      status: "failed",
      success: false,
      message: error.message,
    });
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const currUser = await User.findOne({ email });

    if (!currUser) throw new Error("User Not Found");

    const isValidPass = await currUser.comparePassword(
      password,
      currUser.password
    );

    if (!isValidPass) throw new Error("Please Provide Valid Email or Password");

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
  } catch (error) {
    return res.status(400).json({
      status: "failed",
      success: false,
      message: error.message,
    });
  }
};