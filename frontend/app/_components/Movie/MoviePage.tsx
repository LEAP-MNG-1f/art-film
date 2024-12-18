"use client";
import { useEffect, useState } from "react";
import HeaderPage from "../Article/Header";
import Footer from "../HomePage/Footer";
import Recommend from "../HomePage/Recommend";
import MovieCard from "./MovieCard/MovieCard";

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
  const [isLoading, setIsLoading] = useState(true); // Initialize loading as true

  const fetchDataMovies = async () => {
    setIsLoading(true); // Start loading
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/movies`
      );
      const data = await response.json();
      setMoviesData(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false); // End loading
    }
  };

  useEffect(() => {
    fetchDataMovies();
  }, []);

  return (
    <div className="flex justify-center">
      <div>
        <HeaderPage />
        <div className="justify-center pt-12">
          <MovieCard moviesData={moviesData} isLoading={isLoading} />

          <Recommend />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MoviePage;
