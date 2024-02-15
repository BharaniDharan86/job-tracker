const express = require("express");
const { signUp, verifyEmail, login } = require("../controllers/authController");
const userRouter = express.Router();

userRouter.route("/verifyemail").post(verifyEmail);
userRouter.route("/signup").post(signUp);
userRouter.route("/login").post(login);

module.exports = userRouter;
