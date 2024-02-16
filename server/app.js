const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(morgan("dev"));
// app.use(cookieParser());

app.use(express.json(""));

const userRouter = require("./routes/userRouter");

app.use("/api/v1/users", userRouter);
module.exports = app;
