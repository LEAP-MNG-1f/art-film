import express from "express";
import { getMovies } from "../controllers/movies.controller.js";

const movieRouter = express.Router();

movieRouter.get("/movies", getMovies);

export default movieRouter;
