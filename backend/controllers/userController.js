const User = require("../Model/userSchema");
const ErrorHandler = require("../utils/errorHandler");
const asyncErrorHandler = require("../middleware/asyncErrorHandler");
const AppFeature = require("../utils/appFeatures");
const sendToken = require("../utils/getJwtToken");

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
  console.log(user);
  if (!user) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }
  const isPasswordMatched = user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }
  sendToken(user, 200, res);
});
