import express from "express";
import {
  getComments,
  createComment,
  likeComment,
  replyToComment,
} from "../controllers/comment.controller.js";

const commentRouter = express.Router();

commentRouter
  .route("/articles/:articleId/comments")
  .get(getComments)
  .post(createComment);

commentRouter.route("/comments/:commentId/like").post(likeComment);
commentRouter.route("/comments/:commentId/reply").post(replyToComment);

export default commentRouter;

// POST: http://localhost:9000/api/articles/676361337e57d92eedd9d18a/comments - Comment nemeh
// POST: http://localhost:9000/api/comments/6763615b7e57d92eedd9d18d/like - Comment deer like nemeh
// POST: http://localhost:9000/api/comments/<commentId>/reply - Comment deer replay bichih
