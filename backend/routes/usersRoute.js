const express = require("express");
const {
  registerUser,
  logInUser,
  logOut,
  forgotPassword,
} = require("../controllers/userController");

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(logInUser);
router.route("/password/forgot").post(forgotPassword);
router.route("/logout").get(logOut);

// router
//   .route("/product/:id")
//   .put(updateProduct)
//   .delete(deleteProduct)
//   .get(getProductDetails);

module.exports = router;
