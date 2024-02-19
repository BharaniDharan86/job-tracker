/* eslint-disable multiline-ternary */
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    // eslint-disable-next-line multiline-ternary
    this.status = `${statusCode}`.startsWith(4)
      ? "Not Found"
      : "Internal Server ERROR";
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
