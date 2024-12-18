import express from "express";
import {
  validateMovie,
  validateObjectId,
} from "../middleware/validation.middleware.js";
import {
  getMovies,
  createMovie,
  updateMovie,
  deleteMovie,
  getMovieById,
} from "../controllers/movies.controller.js";

const movieRouter = express.Router();

movieRouter.route("/").get(getMovies).post(validateMovie, createMovie);
movieRouter
  .route("/:id")
  .get(getMovieById, validateObjectId)
  .put(validateMovie, updateMovie, validateObjectId)
  .delete(deleteMovie, validateObjectId);

export default movieRouter;
