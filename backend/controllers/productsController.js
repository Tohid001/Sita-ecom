const Product = require("../Model/productSchema");
const ErrorHandler = require("../utils/errorHandler");
const asyncErrorHandler = require("../middleware/asyncErrorHandler");
const AppFeature = require("../utils/appFeatures");

//create product -- Admin
createProduct = asyncErrorHandler(async (req, res, next) => {
  req.body.user = req.user.id; // to identify which admin created the product
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

//creating or updating review
createProductReview = asyncErrorHandler(async (req, res, next) => {
  console.log("rev");
  const { rating, comment, productId } = req.body;
  const { _id: user, name } = req.user;
  const review = { user, name, rating, comment };
  const product = await Product.findById(productId);
  const isReviewed = product.reviews.find((rev) => {
    console.log(rev.user.toString(), user);
    return rev.user.toString() == user;
  });

  if (isReviewed) {
    product.reviews.forEach((rev) => {
      if (rev.user.toString() == user) {
        rev.rating = rating;
        rev.comment = comment;
      }
    });
  } else {
    product.reviews.push(review);
  }
  product.numOfReviews = product.reviews.length;
  let avg = 0;

  product.reviews.forEach((rev) => {
    avg += rev.rating;
  });

  product.ratings = avg / product.reviews.length;

  await product.save({ validateBeforeSave: false });

  res.status(200).json({ success: true });
});

module.exports = {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  getProductDetails,
  createProductReview,
};
