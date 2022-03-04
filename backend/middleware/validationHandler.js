const ErrorHandler = require("../utils/errorHandler");
// const asyncErrorHandler = require("../middleware/asyncErrorHandler");
const User = require("../Model/userSchema");
const { check, body, validationResult } = require("express-validator");

const registerUserValidators = [
  check("firstName", "First name cann't be blank!")
    .exists()
    .notEmpty()
    .withMessage("First name cann't be blank!")
    .bail()
    .isAlpha("en-US", { ignore: " " })
    .withMessage("First name must not contain anything other than alphabets")
    .bail()
    .trim(),
  check("lastName", "Last name cann't be blank")
    .exists()
    .notEmpty()
    .withMessage("Last name cann't be blank")
    .bail()
    .isAlpha("en-US", { ignore: " " })
    .withMessage("Last name must not contain anything other than alphabets")
    .bail()
    .trim(),
  check("email", "Email cann't be blank!")
    .normalizeEmail()
    .exists()
    .notEmpty()
    .withMessage("Email cann't be blank!")
    .bail()
    .isEmail()
    .withMessage("invalid email format!")
    .bail()
    .custom(async (value, { req }) => {
      console.log("custom email validator");
      const user = await User.findOne({ email: value });
      console.log("user", user);
      if (user) {
        throw new Error("E-mail already in use");
      }
      // return true;
    }),
  check("password")
    .exists()
    .notEmpty()
    .withMessage("Password cann't be blank!")
    .bail()
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
    .matches(/^[a-zA-Z]+([a-zA-Z0-9-_]+[a-zA-Z0-9]+){5,8}$/g)
    .withMessage(
      "Username must start with an alphabet, end with an alphabet or digt & may only contain aA-zZ, 0-9, underscores,dashes in between"
    )
    .bail()
    .custom(async (value, { req }) => {
      console.log("custom userName validator");
      const user = await User.findOne({ userName: value });
      if (user) {
        throw new Error("User name already in use");
      }
    }),
];

const registerUserValidationResult = (req, res, next) => {
  console.log("userValidationResult");

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log("hello validation errors");
    return next(new ErrorHandler(errors.mapped(), 400));
  }
  next();
};

module.exports = { registerUserValidators, registerUserValidationResult };
