"use client";
import { useEffect, useState } from "react";
import HeaderPage from "../Article/Header";
import Footer from "../HomePage/Footer";
import Recommend from "../HomePage/Recommend";
import MovieCard from "./MovieCard/MovieCard";
import MovieFilter from "./MovieCard/MovieFilter";

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

const MoviePage = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]); // State for filtered movies

  const fetchDataMovies = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/movies`
      );
      const data = await response.json();
      setMoviesData(data.data);
      setFilteredMovies(data.data); // Initially set all movies
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDataMovies();
  }, []);

  // Function to handle genre selection and filter movies
  const handleGenreFilter = (filteredData: Movie[]) => {
    setFilteredMovies(filteredData); // Update filtered movies based on genre
  };

  return (
    <div className="flex justify-center">
      <div>
        <HeaderPage />
        <div className="justify-center pt-12">
          <MovieFilter
            moviesData={moviesData}
            isLoading={isLoading}
            onFilter={handleGenreFilter} // Pass the filter handler to MovieFilter
          />
          <MovieCard moviesData={filteredMovies} isLoading={isLoading} />
          <Recommend />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MoviePage;
