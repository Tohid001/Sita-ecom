const express = require("express");
const {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  getProductDetails,
  createProductReview,
  getAllReviews,
  deleteReview,
} = require("../controllers/productsController");
const { checkLogin, checkAuthorizeRole } = require("../middleware/checkLogin");

const router = express.Router();

router.get("/products", getProducts);
router.post(
  "/admin/product/new",
  checkLogin,
  checkAuthorizeRole("admin"),
  createProduct
);
router
  .route("/admin/product/:id")
  .put(checkLogin, checkAuthorizeRole("admin"), updateProduct)
  .delete(checkLogin, checkAuthorizeRole("admin"), deleteProduct);

router.route("/product/:id").get(getProductDetails);
router.route("/review").put(checkLogin, createProductReview);
router.route("/reviews").get(getAllReviews).put(checkLogin, deleteReview);

// router.route("/test").get((req, res, next) => {
//   console.log("i am product");
//   res.json({ test: "test" });
//   next();
// });
// router.route("/test").get((req, res, next) => {
//   console.log("i am product 2");
// });

module.exports = router;
