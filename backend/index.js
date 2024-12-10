import express from "express";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import mongoose from "mongoose";
import movieRouter from "./routes/movie.route.js";

const server = express();
const PORT = 9000;

server.use(express.json());
server.use(cors());

dotenv.config();

const MAIN_API_URL = "/api";

server.use(MAIN_API_URL, movieRouter);

mongoose.connect(process.env.MONGODB_URL);

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

server.listen(PORT, () => {
  console.log(`Сервер ажиллаж эхллээ http://localhost:${PORT}`);
});
