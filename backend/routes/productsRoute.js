const express = require("express");
const {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  getProductDetails,
} = require("../controllers/productsController");

const router = express.Router();

router.get("/products", getProducts);
router.post("/product/new", createProduct);
router
  .route("/product/:id")
  .put(updateProduct)
  .delete(deleteProduct)
  .get(getProductDetails);

module.exports = router;
