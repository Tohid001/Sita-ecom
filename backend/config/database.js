const mongoose = require("mongoose");

const dataBaseConnection = () => {
  mongoose
    .connect(process.env.MONGO_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`MongoDB is connected with server: ${data.connection.host}`);
      //   console.log(data.connection);
    });
};

module.exports = dataBaseConnection;
