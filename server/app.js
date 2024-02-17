const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

const userRouter = require("./routes/userRouter");
const jobRouter = require("./routes/jobRouter");

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(morgan("dev"));

app.use(express.json(""));

app.use("/api/v1/users", userRouter);
app.use("/api/v1/jobs", jobRouter);
module.exports = app;
