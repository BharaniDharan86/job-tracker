const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const userRouter = require("./routes/userRouter");
const jobRouter = require("./routes/jobRouter");
const jobInfoRoutes = require("./routes/jobInfoRouter");
const applyRouter = require("./routes/applyRouter");
const AppError = require("./utils/appError");
const globalErrHandler = require("./controllers/errorController");

app.use(
  cors({
    origin: ["http://localhost:5173", "https://career-sync-app.onrender.com/"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(mongoSanitize());
app.use(xss());

app.use(morgan("dev"));

app.use(express.json());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/jobs", jobRouter);
app.use("/api/v1/jobinfo", jobInfoRoutes);
app.use("/api/v1/apply", applyRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find the ${req.url}`, 404));
});

app.use(globalErrHandler);

module.exports = app;
