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

  // Validation хийх боломжтой
  if (!movieData.title || !movieData.releaseYear) {
    return res.status(400).json({
      success: false,
      message: "Киноны нэр болон гарсан оныг заавал оруулах шаардлагатай!",
    });
  }

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
