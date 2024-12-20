import Movie from "../models/movie.model.js";
import catchAsync from "../utils/catchAsync.js";
import mongoose from "mongoose";

// Get Movies with pagination, sorting, and ordering
export const getMovies = catchAsync(async (req, res) => {
  const {
    page = 1,
    limit = 40,
    sort = "createdAt",
    order = "desc",
  } = req.query;

  // Ensure page and limit are numbers
  const options = {
    page: parseInt(page),
    limit: parseInt(limit),
    sort: { [sort]: order === "desc" ? -1 : 1 },
  };

  try {
    const result = await Movie.paginate({}, options);
    res.status(200).json({
      success: true,
      data: result.docs,
      totalPages: result.totalPages,
      currentPage: result.page,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch movies." });
  }
});

// Get a Movie by ID
export const getMovieById = catchAsync(async (req, res) => {
  const { id } = req.params;

  // Check if the ID is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid movie ID" });
  }

  // Query the movie by its ObjectId
  const movie = await Movie.findById(id);

  if (!movie) {
    return res.status(404).json({ success: false, message: "Movie not found" });
  }

  res.status(200).json({ success: true, data: movie });
});

// Create a new Movie
export const createMovie = catchAsync(async (req, res) => {
  const movieData = req.body;

  // Validation: Ensure title and release year are provided
  if (!movieData.title || !movieData.releaseYear) {
    return res.status(400).json({
      success: false,
      message: "Movie title and release year are required!",
    });
  }

  try {
    const newMovie = await Movie.create(movieData);
    res.status(201).json({ success: true, data: newMovie });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create the movie. Please try again.",
    });
  }
});

// Update a Movie
export const updateMovie = catchAsync(async (req, res) => {
  const { id } = req.params;
  const movieData = req.body;

  try {
    const updatedMovie = await Movie.findByIdAndUpdate(id, movieData, {
      new: true,
      runValidators: true, // Fixed the typo here
    });

    if (!updatedMovie) {
      return res
        .status(404)
        .json({ success: false, message: "Movie not found" });
    }

    res.status(200).json({ success: true, data: updatedMovie });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update the movie. Please try again.",
    });
  }
});

// Delete a Movie
export const deleteMovie = catchAsync(async (req, res) => {
  const { id } = req.params;

  try {
    const deletedMovie = await Movie.findByIdAndDelete(id);

    if (!deletedMovie) {
      return res
        .status(404)
        .json({ success: false, message: "Movie not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Movie deleted successfully" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete the movie. Please try again.",
    });
  }
});
