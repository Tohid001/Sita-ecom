const express = require("express");
const {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  getProductDetails,
} = require("../controllers/productsController");
const checkLogin = require("../middleware/checkLogin");

const router = express.Router();

router.get("/products", getProducts);
router.post("/product/new", checkLogin, createProduct);
router
  .route("/product/:id")
  .put(checkLogin, updateProduct)
  .delete(checkLogin, deleteProduct)
  .get(getProductDetails);

module.exports = router;
