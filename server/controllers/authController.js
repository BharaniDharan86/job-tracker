const User = require("../models/userModel");
const Otp = require("../models/otpModel");
const generateOtp = require("../utils/generateOtp");
const sendMail = require("../utils/email");
const createToken = require("../utils/createJwtToken");

exports.verifyEmail = async (req, res, next) => {
  const { email, password, username } = req.body;

  try {
    const isUserExists = await User.findOne({ email });

    if (isUserExists) throw new Error("User With This Mail Already Exists");

    let otp = generateOtp();
    otp = otp.toString();

    const isOtp = await Otp.create({
      email,
      password,
      username,
      otp,
    });

    console.log(isOtp);

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
      });
  } catch (error) {
    return res.status(400).json({
      status: "failed",
      success: false,
      message: error.message,
    });
  }
};
