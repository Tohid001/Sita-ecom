const Product = require("../Model/productSchema");
const ErrorHandler = require("../utils/errorHandler");
const asyncErrorHandler = require("../middleware/asyncErrorHandler");
const AppFeature = require("../utils/appFeatures");

//create product -- Admin
createProduct = asyncErrorHandler(async (req, res, next) => {
  req.body.user = req.user.id; // to identify which admin created the product
  const product = await Product.create(req.body);
  res.status(201).json({ success: true, product });
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
  const { rating, comment, productId } = req.body;
  const { _id: user, name } = req.user;
  const review = { user, name, rating, comment };
  const product = await Product.findById(productId);
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }
  const isReviewed = product.reviews.find((rev) => {
    return rev.user.toString() == user.toString();
  });

  if (isReviewed) {
    product.reviews.forEach((rev) => {
      if (rev.user.toString() == user.toString()) {
        rev.rating = rating;
        rev.comment = comment;
      }
    });
  } else {
    product.reviews.push(review);
  }
  product.numOfReviews = product.reviews.length;
  let sum = 0;

  product.reviews.forEach((rev) => {
    sum += rev.rating;
  });

  product.ratings = sum / product.reviews.length;

  await product.save({ validateBeforeSave: false });

  res.status(200).json({ success: true });
});

//getting all reviews
getAllReviews = asyncErrorHandler(async (req, res, next) => {
  const product = await Product.findById(req.query.productId);
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }
  res.status(200).json({ success: true, reviews: product.reviews });
});

//delete review
deleteReview = asyncErrorHandler(async (req, res, next) => {
  const product = await Product.findById(req.query.productId);
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }
  const reviews = product.reviews.filter(
    (rev) =>
      rev._id.toString() !== req.query.revId &&
      rev.user.toString() == req.user._id.toString()
  );

  //bug ---
  if (reviews.length > 0) {
    let sum = 0;
    reviews.forEach((rev) => {
      sum += rev.rating;
    });
  }

  let numOfReviews = reviews.length;
  let ratings = !reviews.length ? 0 : sum / reviews.length;
  //--solved

  const prod = await Product.findByIdAndUpdate(
    req.query.productId,
    { $set: { reviews, numOfReviews, ratings } },
    { new: true, runValidators: true, useFindAndModify: false }
  );

  res.status(200).json({ success: true, prod });
});

module.exports = {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  getProductDetails,
  createProductReview,
  getAllReviews,
  deleteReview,
};
