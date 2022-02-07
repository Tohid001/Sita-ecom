const express = require("express");
const {
  registerUserValidators,
  registerUserValidationResult,
} = require("../middleware/validationHandler");
const { checkLogin, checkAuthorizeRole } = require("../middleware/checkLogin");
const {
  registerUser,
  verifyUser,
  logInUser,
  logOut,
  forgotPassword,
  resetPassword,
  getUserDetails,
  updatePassword,
  updateProfile,
  getUserDetailsByAdmin,
  getAllUserDetailsByAdmin,
  updateUserRole,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

router
  .route("/register")
  .post(registerUserValidators, registerUserValidationResult, registerUser);
router.route("/email/varification/:token").put(verifyUser);
router.route("/login").post(logInUser);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/logout").get(logOut);
router.route("/me").get(checkLogin, getUserDetails);
router.route("/password/update").put(checkLogin, updatePassword);
router.route("/me/update").put(checkLogin, updateProfile);

router
  .route("/admin/user")
  .get(checkLogin, checkAuthorizeRole("admin"), getAllUserDetailsByAdmin);
router
  .route("/admin/user/:id")
  .get(checkLogin, checkAuthorizeRole("admin"), getUserDetailsByAdmin)
  .put(checkLogin, checkAuthorizeRole("admin"), updateUserRole)
  .delete(checkLogin, checkAuthorizeRole("admin"), deleteUser);

// router.route("/test").get((req, res, next) => {
//   console.log("i am user");
// });
// router
//   .route("/product/:id")
//   .put(updateProduct)
//   .delete(deleteProduct)
//   .get(getProductDetails);

module.exports = router;
