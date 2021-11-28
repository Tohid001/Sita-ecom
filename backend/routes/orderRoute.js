const express = require("express");
const { checkLogin, checkAuthorizeRole } = require("../middleware/checkLogin");
const {
  newOrder,
  getSingleOrder,
  myorders,
} = require("../controllers/orderController");

const router = express.Router();

router.route("/order/new").post(checkLogin, newOrder);
router
  .route("/order/:id")
  .get(checkLogin, checkAuthorizeRole("admin"), getSingleOrder);
router.route("/orders/me").get(checkLogin, myorders);

module.exports = router;
