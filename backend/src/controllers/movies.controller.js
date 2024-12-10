// import Movie from "../models/movie.model.js";

// // Get all movies
// const getMovies = async (request, response) => {
//   try {
//     const result = await Movie.find();
//     response.json({ success: true, data: result });
//   } catch (error) {
//     console.error(error);
//     response.status(500).json({
//       success: false,
//       message: "Error retrieving movies",
//     });
//   }
// };

// // Create a new movie
// const createMovie = async (request, response) => {
//   try {
//     const { title, releaseYear, genre, rating, director, actors, reviews } =
//       request.body;

//     const result = await Movie.create({
//       title,
//       releaseYear,
//       genre,
//       rating,
//       director,
//       actors,
//       reviews: reviews || [],
//     });

//     response.status(201).json({ success: true, data: result });
//   } catch (error) {
//     if (error.name === "ValidationError") {
//       return response.status(400).json({
//         success: false,
//         message: error.message,
//         errors: error.errors,
//       });
//     }
//     console.error(error);
//     response.status(500).json({
//       success: false,
//       message: "Error creating movie",
//     });
//   }
// };

// // Update a movie
// const updateMovie = async (request, response) => {
//   try {
//     const { id } = request.params;
//     const { title, releaseYear, genre, rating, director, actors, reviews } =
//       request.body;

//     if (!id.match(/^[0-9a-fA-F]{24}$/)) {
//       return response
//         .status(400)
//         .json({ success: false, message: "Invalid movie ID" });
//     }

//     const result = await Movie.findByIdAndUpdate(
//       id,
//       { title, releaseYear, genre, rating, director, actors, reviews },
//       { new: true, runValidators: true }
//     );

//     if (!result) {
//       return response.status(404).json({
//         success: false,
//         message: "Movie not found",
//       });
//     }

//     response.json({ success: true, data: result });
//   } catch (error) {
//     console.error(error);
//     response.status(500).json({
//       success: false,
//       message: "Error updating movie",
//     });
//   }
// };

// // Delete a movie
// const deleteMovie = async (request, response) => {
//   const { id } = request.params;
//   if (!id.match(/^[0-9a-fA-F]{24}$/)) {
//     return response
//       .status(400)
//       .json({ success: false, message: "Invalid movie ID" });
//   }

//   const result = await Movie.findByIdAndDelete(id);

//   if (!result) {
//     return response.status(404).json({
//       success: false,
//       message: "Movie not found",
//     });
//   }

//   response.json({ success: true, data: result });
// };

// export { getMovies, createMovie, updateMovie, deleteMovie };

import Movie from "../models/movie.model.js";
import catchAsync from "../utils/catchAsync.js";

export const getMovies = catchAsync(async (req, res) => {
  const {
    page = 1,
    limit = 10,
    sort = "createdAt",
    order = "desc",
  } = req.query;
  const options = {
    page: parseInt(page),
    limit: parseInt(limit),
    sort: { [sort]: order === "desc" ? -1 : 1 },
  };
  const result = await Movie.paginate({}, options);
  res.status(200).json({
    success: true,
    data: result.docs,
    totalPages: result.totalPages,
    currentPage: result.page,
  });
});

export const getMovieById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const movie = await Movie.findById(id);
  if (!movie) {
    return res.status(404).json({ success: false, message: "Кино олдсонгүй" });
  }
  res.status(200).json({ success: true, data: movie });
});

export const createMovie = catchAsync(async (req, res) => {
  const movieData = req.body;
  const newMovie = await Movie.create(movieData);
  res.status(201).json({ success: true, data: newMovie });
});

export const updateMovie = catchAsync(async (req, res) => {
  const { id } = req.params;
  const movieData = req.body;
  const updatedMovie = await Movie.findByIdAndUpdate(id, movieData, {
    new: true,
    runValidatorso: true,
  });
  if (!updatedMovie) {
    return res.status(404).json({ success: false, message: "Кино олдсонгүй" });
  }
  res.status(200).json({ success: true, data: updatedMovie });
});

export const deleteMovie = catchAsync(async (req, res) => {
  const { id } = req.params;
  const deletedMovie = await Movie.findByIdAndDelete(id);
  if (!deletedMovie) {
    return res.status(404).json({ success: false, message: "Кино олдсонгүй" });
  }
  res.status(200).json({ success: true, data: deletedMovie });
});
