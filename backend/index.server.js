const { app } = require("./app");
const env = require("dotenv");

//config
env.config({ path: "backend/config/config.env" });

//initiating the server
app.listen(process.env.PORT, () => {
  console.log(`server is listening at port no ${process.env.PORT}`);
});
