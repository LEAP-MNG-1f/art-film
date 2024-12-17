"use client";
import MovieCard from "../Movie/MovieCard/MovieCard";
import ArticleCard from "../Article/ArticleCard/ArticleCard";
import DreamersDayCard from "../DreamersDay/DreamersDayCard/DreamersDayCard";
import Carousel from "./Carousel";
import Footer from "./Footer";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchDataMovies = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/movies`
      );
      const data = await response.json();
      setMoviesData(data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDataMovies();
  }, []);

  return (
    <div className="flex flex-col justify-center">
      <Carousel />

      <DreamersDayCard />
      <div className="pt-80 flex flex-col gap-10">
      
        <ArticleCard />
        <MovieCard moviesData={moviesData} isLoading={isLoading} limit={4} />
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
