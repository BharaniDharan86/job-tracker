const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const createToken = require("../utils/createJwtToken");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const multer = require("multer");

//get the current User

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/users");
  },
  filename: (req, file, cb) => {
    const fileExt = file.mimetype.split("/")[1];
    const ext = `user-${req.user.id}-${Date.now()}.${fileExt}`;

    cb(null, ext);
  },
});

const upload = multer({
  storage: multerStorage,
});

exports.userImage = upload.single("userphoto");

exports.getCurrentUser = async (req, res, next) => {
  const userId = req.user._id;

  const userDetail = await User.findById(userId).select(
    "username email jobapplication"
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
  const isValidPassword = bcrypt.compareSync(password, currUser.password);

  if (!isValidPassword) return next(new AppError("Invalid Password", 404));

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
});

exports.uploadImage = catchAsync(async (req, res, next) => {
  const userId = req.user._id;

  const currUser = await User.findById(userId);

  if (!currUser) return next(new AppError("User not found", 404));

  currUser.userimage = req.file.filename;

  await currUser.save();

  return res.status(200).json({
    status: "success",
    success: true,
    user: {
      username: currUser.username,
      email: currUser.email,
    },
  });
});
