const Product = require("../Model/productSchema");
const ErrorHandler = require("../utils/errorHandler");
const asyncErrorHandler = require("../middleware/asyncErrorHandler");
const AppFeature = require("../utils/appFeatures");

//create product -- Admin
createProduct = asyncErrorHandler(async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({ message: "success!", product });
});

//getAllProduct
getProducts = asyncErrorHandler(async (req, res, next) => {
  const resultPerPage = 2;
  const productCounts = await Product.countDocuments();
  const appFeature = new AppFeature(Product, req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  const products = await appFeature.query;

  res.status(200).json({ success: true, products, productCounts });
});

//getProductDetails
getProductDetails = asyncErrorHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }
  res.status(200).json({ success: true, product });
});

//updateProduct -- Admin
updateProduct = asyncErrorHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }
  const productDetails = await Product.findByIdAndUpdate(
    req.params.id,
    { $set: { ...req.body } },
    { useFindAndModify: false, new: true, runValidators: true }
  );
  res.status(201).json({ success: true, result: productDetails });
});

//delete product
deleteProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }
  product.remove(req.params.id);
  res
    .status(201)
    .json({ success: true, result: "product was deleted successfully" });
};

module.exports = {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  getProductDetails,
};
