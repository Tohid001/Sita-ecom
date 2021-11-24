const express = require("express");
const errorHandler = require("./middleware/syncErrorHandler");
const ErrorHandler = require("./utils/errorHandler");

const app = express();

//global middleware
app.use(express.json());

//router import
const product = require("./routes/productsRoute");
const user = require("./routes/usersRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);

//not found handler
app.use((req, res, next) => {
  next(new ErrorHandler("page not found", 404));
});

//errorHandling middleware
app.use(errorHandler);

module.exports = { app };
