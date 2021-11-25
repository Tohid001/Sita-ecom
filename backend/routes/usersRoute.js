const express = require("express");
const {
  registerUser,
  logInUser,
  logOut,
  forgotPassword,
  resetPassword,
} = require("../controllers/userController");

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(logInUser);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/logout").get(logOut);

// router.route("/test").get((req, res, next) => {
//   console.log("i am user");
// });
// router
//   .route("/product/:id")
//   .put(updateProduct)
//   .delete(deleteProduct)
//   .get(getProductDetails);

module.exports = router;
