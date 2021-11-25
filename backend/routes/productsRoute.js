const express = require("express");
const {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  getProductDetails,
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

// router.route("/test").get((req, res, next) => {
//   console.log("i am product");
//   res.json({});
//   next();
// });
// router.route("/test").get((req, res, next) => {
//   console.log("i am product 2");
// });

module.exports = router;
