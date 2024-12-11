const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Серверийн алдаа";

  console.error("🔥 Error:", err);

  res.status(statusCode).json({
    success: false,
    error: message,
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
};

export default errorHandler;
