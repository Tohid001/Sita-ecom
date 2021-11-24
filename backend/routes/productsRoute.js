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
  "/product/new",
  checkLogin,
  checkAuthorizeRole("admin"),
  createProduct
);
router
  .route("/product/:id")
  .put(checkLogin, checkAuthorizeRole("admin"), updateProduct)
  .delete(checkLogin, checkAuthorizeRole("admin"), deleteProduct)
  .get(getProductDetails);

module.exports = router;
