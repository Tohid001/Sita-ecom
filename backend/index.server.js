const express = require("express");
const env = require("dotenv");
const { app } = require("./app");
const dataBaseConnection = require("./config/database");

//handling uncaught exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to unhandled uncaught exception");

  // server.close();
  process.exit(1);
});

//config
env.config({ path: "backend/config/config.env" });

//database connection
dataBaseConnection();

//initiating the server
const server = app.listen(process.env.PORT, () => {
  console.log(`server is listening at port no ${process.env.PORT}`);
});

//handling unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to unhandled promise rejection");

  server.close();
  process.exit(1);
});
