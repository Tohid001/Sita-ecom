const express = require("express");
const syncErrorHandler = require("./middleware/syncErrorHandler");
const ErrorHandler = require("./utils/errorHandler");
const cookieParser = require("cookie-parser");

const app = express();

//global middleware
app.use(express.json());
app.use(cookieParser());

//router import
const product = require("./routes/productsRoute");
const user = require("./routes/usersRoute");
const order = require("./routes/orderRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);

//not found handler
app.use((req, res, next) => {
  // let err = new ErrorHandler("page not found", 404);

  console.log("not found handler");
  next(new ErrorHandler("page not found", 404));
});

//errorHandling middleware
app.use(syncErrorHandler);

module.exports = { app };

app.set("case sensitive routing", "hello");

console.log("hello", app.get("case sensitive routing"));
