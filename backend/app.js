const express = require("express");
const products = require("./routes/productsRoute");
const errorHandler = require("./middleware/syncErrorHandler");
const ErrorHandler = require("./utils/errorHandler");

const app = express();
//global middleware
app.use(express.json());

//routes
app.use("/api/v1", products);

//not found handler
app.use((req, res, next) => {
  next(new ErrorHandler("page not found", 404));
});

//errorHandler
app.use(errorHandler);

module.exports = { app };
