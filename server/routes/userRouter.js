const express = require("express");
const {
  signUp,
  verifyEmail,
  login,
  protect,
} = require("../controllers/authController");
const {
  getCurrentUser,
  updateMe,
  updatePassword,
} = require("../controllers/userController");
const userRouter = express.Router();

userRouter.route("/verifyemail").post(verifyEmail);
userRouter.route("/signup").post(signUp);
userRouter.route("/login").post(login);
userRouter.route("/profile").get(protect, getCurrentUser);
userRouter.route("/updateme").post(protect, updateMe);
userRouter.route("/updatepassword").post(protect, updatePassword);

module.exports = userRouter;
