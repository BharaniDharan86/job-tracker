const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Please provide the Email Address"],
    },
    password: {
      type: String,
      required: [true, "Please provide the Password"],
    },
  },
  {
    timestamps: true,
    toJSON: true,
    toObject: true,
  }
);

userSchema.methods.comparePassword = async function (userPass, hashedPass) {
  return await bcrypt.compare(userPass, hashedPass);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
