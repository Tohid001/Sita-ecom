const express = require("express");
const { checkLogin, checkAuthorizeRole } = require("../middleware/checkLogin");
const {
  newOrder,
  getSingleOrder,
  myorders,
  getAllOrders,
  deleteOrder,
  updateOrder,
} = require("../controllers/orderController");

const router = express.Router();

router.route("/order/new").post(checkLogin, newOrder);
// router
//   .route("/order/:id")
//   .get(checkLogin, checkAuthorizeRole("admin"), getSingleOrder);
router.route("/orders/me").get(checkLogin, myorders);
router
  .route("/admin/orders")
  .get(checkLogin, checkAuthorizeRole("admin"), getAllOrders);
router
  .route("/admin/order/:id")
  //   .put(checkLogin, checkAuthorizeRole("admin"), updateOrder)
  .delete(checkLogin, checkAuthorizeRole("admin"), deleteOrder)
  .get(checkLogin, checkAuthorizeRole("admin"), getSingleOrder);

module.exports = router;
