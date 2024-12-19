import express from "express";
import {
  getArticles,
  createArticle,
  getArticleById,
  updateArticle,
  deleteArticle,
} from "../controllers/article.controller.js"; // Assuming the controller is in this directory

const articleRouter = express.Router();

// Route for getting all articles and creating a new article
articleRouter
  .route("/")
  .get(getArticles) // Get articles with pagination, sorting, etc.
  .post(createArticle); // Create a new article

// Route for getting, updating, or deleting a single article by ID
articleRouter
  .route("/:id")
  .get(getArticleById) // Get a single article by ID
  .put(updateArticle) // Update an article by ID
  .delete(deleteArticle); // Delete an article by ID

export default articleRouter;
