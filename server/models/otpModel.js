const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Must provide the email"],
  },
  password: {
    type: String,
    required: [true, "Must Provide the Password"],
  },
  username: {
    type: String,
    required: [true, "Must Provide the Username"],
  },
  otp: {
    type: String,
    required: [true, "Must have the OTP"],
  },
});

otpSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  next();
});

const Otp = mongoose.model("Otp", otpSchema);

async function deleteOtp() {
  await Otp.deleteMany({});
}

setInterval(deleteOtp, 60 * 1000 * 3);

module.exports = Otp;
