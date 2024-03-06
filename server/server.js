const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const mongoose = require("mongoose");
const app = require("./app");

const MONGODB = process.env.MONGODB_URL;

mongoose
  .connect(MONGODB)
  .then(() => console.log("Connected Successfully !"))
  .catch((err) => console.log(err));

const port = process.env.PORT;
app.listen(port, () => console.log(`Example app listening on port ${3000}!`));
