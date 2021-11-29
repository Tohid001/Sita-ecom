const Order = require("../Model/orderSchema");
const Product = require("../Model/productSchema");
const ErrorHandler = require("../utils/errorHandler");
const asyncErrorHandler = require("../middleware/asyncErrorHandler");
// const { route } = require("../routes/usersRoute");

//create new order
exports.newOrder = asyncErrorHandler(async (req, res, next) => {
  const {
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsInfo,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  const order = await Order.create({
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsInfo,
    taxPrice,
    shippingPrice,
    totalPrice,
    paidAt: Date.now(),
    user: req.user.id,
  });

  res.status(200).json({ success: true, order });
});

//get logged in user order
exports.myorders = asyncErrorHandler(async (req, res, next) => {
  const orders = await Order.find({ user: req.user.id });
  if (!orders) {
    return next(new ErrorHandler("You haven 't made any order yet.", 404));
  }
  res.status(200).json({ success: true, orders });
});

//getSingleOrder--admin
exports.getSingleOrder = asyncErrorHandler(async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );
  if (!order) {
    return next(new ErrorHandler("Order not found with this id", 404));
  }
  res.status(200).json({ success: true, order });
});

//getAllOrders--admin
exports.getAllOrders = asyncErrorHandler(async (req, res, next) => {
  const orders = await Order.find().populate("user", "name email");
  //   if (!order) {
  //     return next(new ErrorHandler("Order not found with this id", 404));
  //   }

  let totalAmount = 0;

  orders.forEach((order) => {
    totalAmount += order.totalPrice;
  });
  res.status(200).json({ success: true, orders, totalAmount });
});

//Update order status--admin
exports.updateOrder = asyncErrorHandler(async (req, res, next) => {
  const order = await Order.findById(req.params.id);
  if (order.orderStatus === "Delivered") {
    return next(new ErrorHandler("You have already delivered this order", 400));
  }

  order.orderItems.forEach(async (item) => {
    await updateStock(item.product, item.quantity);
  });
  order.orderStatus = req.body.status;
  if (req.body.status === "Delivered") {
    order.deliveredAt = Date.now();
  }
  await order.save({ validateBeforeSave: false });
  res.status(200).json({ success: true });
});
//
async function updateStock(id, quantity) {
  const product = await Product.findById(id);
  product.stock = quantity;
  await product.save({ validateBeforeSave: false });
}

//delete order status--admin
exports.deleteOrder = asyncErrorHandler(async (req, res, next) => {
  const order = await Order.findById(req.params.id);
  if (!order) {
    return next(new ErrorHandler("Order not found with this id", 404));
  }

  await order.remove();
  res
    .status(200)
    .json({ success: true, message: "Order has been deleted successfully" });
});
