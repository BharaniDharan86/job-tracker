const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const createToken = require("../utils/createJwtToken");

//get the current User

exports.getCurrentUser = async (req, res, next) => {
  const userId = req.user._id;

  const userDetail = await User.findById(userId).select("username email");

  return res.status(200).json({
    status: "success",
    success: true,
    userDetail,
  });
};

//updating the user detail username

exports.updateMe = async (req, res, next) => {
  const userId = req.user._id;
  const { username } = req.body;

  const currUser = await User.findById(userId);

  if (username) {
    currUser.username = username;
    await currUser.save();
  }

  return res.status(200).json({
    status: "success",
    success: true,
    user: {
      username: currUser.username,
      email: currUser.email,
    },
  });
};

//update the user password

exports.updatePassword = async (req, res, next) => {
  const userId = req.user._id;
  const { password, newPassword } = req.body;
  const currUser = await User.findById(userId);
  try {
    const isValidPassword = bcrypt.compareSync(password, currUser.password);

    if (!isValidPassword) throw new Error("Invalid Password");

    if (isValidPassword) {
      currUser.password = newPassword;
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
  } catch (error) {
    return res.status(400).json({
      status: "success",
      success: false,
    });
  }
};
