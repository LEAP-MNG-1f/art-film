import React from "react";

type Movie = {
  _id: string;
  title: string;
  releaseYear: number;
  genre: string[];
  writer: string[];
  director: string[];
  rating: number;
  trailerUrl?: string;
  imageUrl: string;
  relatedMovies: string[];
  createdAt: Date;
};

const MovieDetail = ({ movieData }: { movieData: Movie | null }) => {
  if (!movieData) {
    return <div>Movie not found!</div>;
  }

  return (
    <div className="movie-detail-container">
      <h1>{movieData.title}</h1>
      {movieData.imageUrl && (
        <img
          src={movieData.imageUrl}
          alt={movieData.title || "Movie Poster"}
          className="movie-poster"
        />
      )}
      <p>Release Year: {movieData.releaseYear || "Unknown"}</p>
      <p>
        Genre:{" "}
        {Array.isArray(movieData.genre)
          ? movieData.genre.join(", ")
          : "No genres"}
      </p>
      <p>
        Director:{" "}
        {Array.isArray(movieData.director)
          ? movieData.director.join(", ")
          : "Unknown director"}
      </p>
      <p>
        Writer:{" "}
        {Array.isArray(movieData.writer)
          ? movieData.writer.join(", ")
          : "Unknown writer"}
      </p>
      <p>Rating: {movieData.rating || "Not rated"}</p>
    </div>
  );
};

export default MovieDetail;
