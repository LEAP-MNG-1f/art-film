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
import omdbRouter from "./routes/omdb.routes.js";
import articleRouter from "./routes/article.route.js";
import commentRouter from "./routes/comment.route.js";
import dreamersDayRouter from "./routes/dreamersday.route.js";

const server = express();
const PORT = 9000;

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
server.use("/api/articles", articleRouter);
server.use("/api/dreamersday", dreamersDayRouter);
server.use("/api", commentRouter);
server.use("/api", omdbRouter);

server.use(errorHandler);

server.listen(PORT, () => {
  console.log(
    `\x1b[32m🔄 Сервер ажиллаж эхэллээ http://localhost:${PORT}\x1b[0m`
  );
});
