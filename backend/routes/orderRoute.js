const express = require("express");
const { checkLogin, checkAuthorizeRole } = require("../middleware/checkLogin");
const { newOrder } = require("../controllers/orderController");

const router = express.Router();

router.route("/order/new").post(checkLogin, newOrder);

module.exports = router;
