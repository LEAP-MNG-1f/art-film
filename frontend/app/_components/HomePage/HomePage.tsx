import MovieCard from "../Movie/MovieCard/MovieCard";
import ArticleCard from "../Article/ArticleCard/ArticleCard";

import DreamersDayCard from "../DreamersDay/DreamersDayCard/DreamersDayCard";

import SingelPage from "../DreamersDay/SingleDreamersDay/SinglePage";
import Carousel from "./Carousel";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center">
      <Carousel />
      <div className="flex flex-col gap-12 ">
        <DreamersDayCard />
        <ArticleCard />
        <MovieCard />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
