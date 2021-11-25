const User = require("../Model/userSchema");
const ErrorHandler = require("../utils/errorHandler");
const asyncErrorHandler = require("../middleware/asyncErrorHandler");
const AppFeature = require("../utils/appFeatures");
const sendToken = require("../utils/getJwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");

//register user
exports.registerUser = asyncErrorHandler(async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    avatar: { public_id: "sample avatar", url: "sample url" },
  });
  sendToken(user, 200, res);
});

//logIn user
exports.logInUser = asyncErrorHandler(async (req, res, next) => {
  const { email, password } = req.body;

  //checking whether user has given email or pasword
  if (!email || !password) {
    return next(new ErrorHandler("Please enter email & password", 400));
  }
  const user = await User.findOne({ email }).select("+password");

  //validate email
  if (!user) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }
  //validate password
  const isPasswordMatched = user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }
  sendToken(user, 200, res);
});

//logout
exports.logOut = asyncErrorHandler((req, res, next) => {
  res
    .status(200)
    .cookie("token", null, { expires: new Date(Date.now()), httpOnly: true })
    .json({ success: true, message: "logged out successfully!" });
});

//Forgot Password
exports.forgotPassword = asyncErrorHandler(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }

  //get resetPasswordToken
  const resetToken = user.getResetPasswordToken();

  await user.save({ validateBeforeSave: false });

  //sending password reset email
  const resetPasswordUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/password/reset/${resetToken}`;
  const message = `Your password reset token is:\n\n${resetPasswordUrl}\n\nIf you havn't requested for it, please ignore it`;

  try {
    await sendEmail({
      email: user.email,
      subject: `Password recovery`,
      message,
    });
    res.status(200).json({
      success: true,
      message: `Email sent to ${user.email} successfully`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({ validateBeforeSave: false });
    return next(new ErrorHandler(error.message, 500));
  }
});

//reset password
exports.resetPassword = asyncErrorHandler(async (req, res, next) => {
  //creating token hash
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    return next(
      new ErrorHandler(
        "password reset token is invalid or has been expired",
        400
      )
    );
  }

  if (req.body.password !== req.body.confirmPassword) {
    return next(new ErrorHandler("password doesn't match", 400));
  }

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;
  await user.save();
  sendToken(user, 200, res);
});

//get user details
exports.getUserDetails = asyncErrorHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  res.status(200).json({ success: true, message: user });
});

//get updatePassword
exports.updatePassword = asyncErrorHandler(async (req, res, next) => {
  const { oldPassword, newPassword, confirmPassword } = req.body;
  const user = await User.findById(req.user.id).select("+password");

  //validate password
  const isPasswordMatched = user.comparePassword(oldPassword);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Old password is incorrect", 401));
  }

  if (newPassword !== confirmPassword) {
    return next(new ErrorHandler("Password doesn't match", 401));
  }

  user.password = newPassword;
  await user.save();

  sendToken(user, 200, res);
});
