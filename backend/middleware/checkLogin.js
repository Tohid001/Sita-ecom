asyncErrorHandler = require("./asyncErrorHandler");
const ErrorHandler = require("../utils/errorHandler");
const jwt = require("jsonwebtoken");
const User = require("../Model/userSchema");

//checkLogin middleware
exports.checkLogin = asyncErrorHandler(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return next(new ErrorHandler("Please log in to access this resource", 401));
  }

  const decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);
  //   console.log(decodedData);
  req.user = await User.findById(decodedData.id);
  //   console.log(req.user);
  //   console.log(req.user._id);
  next();
});

//checkAuthorizeRole middleware
exports.checkAuthorizeRole = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `Role: General ${req.user.role} is not allowed to access this resource except the admin.`
        )
      );
    }
    next();
  };
};
