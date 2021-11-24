const express = require("express");
const { registerUser, logInUser } = require("../controllers/userController");

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(logInUser);

// router
//   .route("/product/:id")
//   .put(updateProduct)
//   .delete(deleteProduct)
//   .get(getProductDetails);

module.exports = router;
