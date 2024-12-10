// import express from "express";
// import cors from "cors";
// import { v2 as cloudinary } from "cloudinary";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import movieRouter from "./routes/movie.route.js";

// dotenv.config();

// const server = express();
// const PORT = process.env.MONGODB_URL || 9000;

// server.use(express.json());
// server.use(cors());

// const MAIN_API_URL = "/api";

// server.use(MAIN_API_URL, movieRouter);

// mongoose.connect(process.env.MONGODB_URL);

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// server.listen(PORT, () => {
//   console.log(`Сервер ажиллаж эхллээ http://localhost:${PORT}`);
// });

import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import mongoSanitize from "express-mongo-sanitize";
import xss from "xss-clean";
import connectDB from "./config/database.js";
import configureCloudinary from "./config/cloudinary.js";
import movieRouter from "./routes/movie.route.js";
import errorHandler from "./middleware/errorHandler.js";

const server = express();
const PORT = process.env.PORT || 9000;

connectDB();

configureCloudinary();

server.use(helmet());
server.use(cors());
server.use(express.json({ limit: "10kb" }));
server.use(mongoSanitize());
server.use(xss());

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "🚫 Хэт олон request илгээлээ. Түр хүлээнэ үү.",
});
server.use("/api", limiter);

server.use("/api/movies", movieRouter);

server.use(errorHandler);

server.listen(PORT, () => {
  console.log(
    `\x1b[32m🔄 Сервер ажиллаж эхэллээ http://localhost:${PORT}\x1b[0m`
  );
});
