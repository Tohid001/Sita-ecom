asyncErrorHandler = (theFunc) => (req, res, next) => {
  Promise.resolve(theFunc(req, res, next)).catch((err) => {
    next(err);
    // console.log("i am asyncErrorHAndler");
  });
};

module.exports = asyncErrorHandler;
