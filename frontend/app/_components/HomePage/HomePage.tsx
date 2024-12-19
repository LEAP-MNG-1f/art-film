"use client";
import MovieCard from "../Movie/MovieCard/MovieCard";
import ArticleCard from "../Article/ArticleCard/ArticleCard";
import DreamersDayCard from "../DreamersDay/DreamersDayCard/DreamersDayCard";
import Carousel from "./Carousel";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";

const HomePage = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [articleData, setArticleData] = useState([]);
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
  const fetchDataArticles = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/articles`
      );
      const data = await response.json();
      setArticleData(data.data);
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

  useEffect(() => {
    fetchDataArticles();
  }, []);
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center">
      <Carousel />
      <DreamersDayCard />
      <div className="pt-80 flex flex-col gap-10">
        <ArticleCard
          articlesData={articleData}
          isLoading={isLoading}
          limit={3}
        />
          <div className="flex justify-between items-center h-[44px]">
          <p className="text-black font-roboto-condensed text-[32px] font-semibold leading-[24px]">
            кино
          </p>
          <Link href="/movies" className="font-bold flex gap-1 items-center">
            <p className="text-black font-roboto text-[14px] font-normal leading-[24px]">
              БҮГДИЙГ ХАРАХ
            </p>
            <div>
              <BsChevronRight className="text-[#F8941E]" />
            </div>
          </Link>
        </div>
        <MovieCard moviesData={moviesData} isLoading={isLoading} limit={4}  />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
