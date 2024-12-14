import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const { OMDB_BASE_URL, OMDB_API_KEY } = process.env;

// Movie хайлт хийх
export const fetchMovieData = async (req, res) => {
  const {
    searchQuery,
    title,
    imdbID,
    year,
    responseType,
    season,
    episode,
    mediaType,
  } = req.query;

  let url = `${OMDB_BASE_URL}?apikey=${OMDB_API_KEY}`;

  if (searchQuery) {
    url += `&s=${encodeURIComponent(searchQuery)}`;
  }

  if (title) {
    url += `&t=${encodeURIComponent(title)}`;
  }

  if (imdbID) {
    url += `&i=${imdbID}`;
  }

  if (year) {
    url += `&y=${year}`;
  }

  if (responseType) {
    url += `&r=${responseType}`;
  }

  if (season) {
    url += `&Season=${season}`;
  }

  if (episode) {
    url += `&Episode=${episode}`;
  }

  if (mediaType) {
    url += `&type=${mediaType}`;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.Response === "True") {
      res.status(200).json({ movie: data });
    } else {
      res.status(400).json({ error: data.Error });
    }
  } catch (error) {
    res.status(500).json({ error: "Серверийн алдаа." });
  }
};
