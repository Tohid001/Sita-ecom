const mongoose = require("mongoose");
const validator = require("validator");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "please enter your firstName"],
      maxLength: [30, "Name cann't exceed 30 characters"],
      minLength: [4, "Name should have more than 4 characters"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "please enter your lastName"],
      maxLength: [30, "Name cann't exceed 30 characters"],
      minLength: [4, "Name should have more than 4 characters"],
      trim: true,
    },
    userName: {
      type: String,
      // required: [true, "please enter your userName"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "please enter your email"],
      unique: true,
      validate: [validator.isEmail, "Please enter a valid email"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "please enter your password"],
      minLength: [8, "password should have atleast 8 characters"],
      select: false,
    },

    avatar: {
      public_id: { type: String, required: true },
      url: { type: String },
    },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    verified: { type: String, default: false, required: true },
    emailVarificationToken: String,
    emailVarificationTokenExpire: String,
    resetPasswordToken: String,
    resetPasswordExpire: String,
  },
  { timestamps: true }
);

//encoding passWord
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcryptjs.hash(this.password, 10);
  next();
});

//JWT
userSchema.methods.getJwtToken = function () {
  const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRE,
  });
  return token;
};

//compare password
userSchema.methods.comparePassword = async function (enterPassword) {
  return await bcryptjs.compare(enterPassword, this.password);
};

//generating email varification token
userSchema.methods.getEmailVarificationToken = function () {
  //generating token
  const varificationToken = crypto.randomBytes(10).toString("hex");

  //hashing and adding emailVarificationToken to userSchema
  this.emailVarificationToken = crypto
    .createHash("sha256")
    .update(varificationToken)
    .digest("hex");

  this.emailVarificationTokenExpire = Date.now() + 15 * 60 * 1000;
  return varificationToken;
};

//generating password reset token
userSchema.methods.getResetPasswordToken = function () {
  //generating token
  const resetToken = crypto.randomBytes(10).toString("hex");

  //hashing and adding resetPasswordToken to userSchema
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
  return resetToken;
};

module.exports = mongoose.model("user", userSchema);
