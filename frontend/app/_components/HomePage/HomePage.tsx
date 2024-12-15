import MovieCard from "../movie/movieCard/MovieCard";
import ArticleCard from "../article/articleCard/ArticleCard";

import DreamersDayCard from "../dreamersDay/dreamersDayCard/DreamersDayCard";
import Footer from "./Footer";
import Carousel from "./Carousel";
import SingelPage from "../dreamersDay/single-dreamersday/SinglePage";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center">
      {/* <Carousel />
      <div className="flex flex-col gap-12 ">
        <DreamersDayCard />
        <ArticleCard />
        <MovieCard />
      </div>
      <Footer /> */}
      <SingelPage />
    </div>
  );
};

export default HomePage;
