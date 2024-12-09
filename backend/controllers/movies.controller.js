import Movie from "../models/movie.model.js";

// Get all movies
const getMovies = async (request, response) => {
  try {
    const result = await Movie.find();
    response.json({ success: true, data: result });
  } catch (error) {
    console.error(error);
    response.status(500).json({
      success: false,
      message: "Error retrieving movies",
    });
  }
};

// Create a new movie
const createMovie = async (request, response) => {
  try {
    const { title, releaseYear, genre, rating, director, actors, reviews } =
      request.body;

    const result = await Movie.create({
      title,
      releaseYear,
      genre,
      rating,
      director,
      actors,
      reviews: reviews || [],
    });

    response.status(201).json({ success: true, data: result });
  } catch (error) {
    if (error.name === "ValidationError") {
      return response.status(400).json({
        success: false,
        message: error.message,
        errors: error.errors,
      });
    }
    console.error(error);
    response.status(500).json({
      success: false,
      message: "Error creating movie",
    });
  }
};

// Update a movie
const updateMovie = async (request, response) => {
  try {
    const { id } = request.params;
    const { title, releaseYear, genre, rating, director, actors, reviews } =
      request.body;

    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return response
        .status(400)
        .json({ success: false, message: "Invalid movie ID" });
    }

    const result = await Movie.findByIdAndUpdate(
      id,
      { title, releaseYear, genre, rating, director, actors, reviews },
      { new: true, runValidators: true }
    );

    if (!result) {
      return response.status(404).json({
        success: false,
        message: "Movie not found",
      });
    }

    response.json({ success: true, data: result });
  } catch (error) {
    console.error(error);
    response.status(500).json({
      success: false,
      message: "Error updating movie",
    });
  }
};

// Delete a movie
const deleteMovie = async (request, response) => {
  const { id } = request.params;
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    return response
      .status(400)
      .json({ success: false, message: "Invalid movie ID" });
  }

  const result = await Movie.findByIdAndDelete(id);

  if (!result) {
    return response.status(404).json({
      success: false,
      message: "Movie not found",
    });
  }

  response.json({ success: true, data: result });
};

export { getMovies, createMovie, updateMovie, deleteMovie };
