const ErrorHandler = require("../utils/errorHandler");
const asyncErrorHandler = require("../middleware/asyncErrorHandler");
const User = require("../Model/userSchema");
const { check, body, validationResult } = require("express-validator");

const registerUserValidators = [
  check("firstName", "First name cann't be blank!")
    .exists()
    .notEmpty()
    .withMessage("First name cann't be blank!")
    .isAlpha("en-US", { ignore: " " })
    .withMessage("First name must not contain anything other than alphabets")
    .trim(),
  check("lastName", "Last name cann't be blank")
    .exists()
    .notEmpty()
    .withMessage("Last name cann't be blank")
    .isAlpha("en-US", { ignore: " " })
    .withMessage("Last name must not contain anything other than alphabets")
    .trim(),
  check("email", "Email cann't be blank!")
    .normalizeEmail()
    .exists()
    .notEmpty()
    .withMessage("Email cann't be blank!")
    .isEmail()
    .withMessage("invalid email format!")
    .custom(async (value, { req }) => {
      try {
        console.log("custom email validator");
        const user = await User.findOne({ email: value });
        if (user) {
          throw new Error("E-mail already in use");
        }
      } catch (error) {
        console.log("custom email validation error");
        req.serverError = true;
      }
    }),
  check("password")
    .exists()
    .notEmpty()
    .withMessage("Password cann't be blank!")
    .isStrongPassword()
    .withMessage(
      "Password should be at least 8 characters long & should contain at least 1 lowercase, 1 uppercase, 1 number & 1 symbol"
    ),
  check("confirmPassword").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Password confirmation does not match password");
    }
    return true;
  }),
  check("userName")
    .optional({ checkFalsy: true })
    .matches("^[A-Za-z][A-Za-z0-9_-]$")
    .withMessage(
      "Username must start with an alphabet & may only contain A-Z, 0-9, underscores, and dashes"
    )
    .custom(async (value, { req }) => {
      try {
        console.log("custom userName validator");
        const user = await User.findOne({ userName: value });
        if (user) {
          throw new Error("User-name already in use");
        }
      } catch (error) {
        console.log("custom userName validation error");
        req.serverError = true;
      }
    }),
];

const registerUserValidationResult = (req, res, next) => {
  console.log("userValidationResult");
  if ("serverError" in req) {
    console.log("validation server errror");
    return next(new ErrorHandler());
  }
  delete req.serverError;
  const errors = validationResult(req);
  console.log("errors", errors);
  console.log("errors.array", errors.array());
  console.log("errors.mapped", errors.mapped());
  if (!errors.isEmpty()) {
    console.log("hello error");
    return next(new ErrorHandler(errors.mapped(), 400));
  }
  next();
};

module.exports = { registerUserValidators, registerUserValidationResult };
