const { json } = require("body-parser");
const ErrorHandler = require("../utils/errorHandler");

errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal server error!";
  // console.log("tohid", err.code);
  // console.log("GlobalError", err.message);
  console.log("syncerrorHandler");
  console.log(err.message);

  //wrong mongodb _id error
  if (err.name === "CastError") {
    // console.log("cast error");
    const message = ` Resource not found. Invalid ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  //wrong mongodb key error
  if (err.code === 11000) {
    const message = `duplicate ${Object.keys(err.keyValue)} is detected`;
    console.log(`hello ${Object.keys(err.keyValue)}`);
    err = new ErrorHandler(message, 400);
  }

  //wrong jwt error
  if (err.name === "jsonWebTokenError") {
    const message = ` json web token is invalid, try again!`;
    err = new ErrorHandler(message, 400);
  }

  //wrong jwt expire error
  if (err.name === "TokenExpiredError") {
    const message = ` Json Web Token/Session is expired, try again!`;
    err = new ErrorHandler(message, 400);
  }
  // console.log("name", err.name);
  res.status(err.statusCode).json({
    success: false,
    error: err.message,
    stack: err.stack,
    // name: err.name,
    // cd: err.code,
  });
};

module.exports = errorHandler;
