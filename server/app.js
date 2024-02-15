const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

const userRouter = require("./routes/userRouter");

app.use("/api/v1/users", userRouter);
module.exports = app;
