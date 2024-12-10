import MovieCard from "../movie/movieCard/MovieCard";
import ArticleCard from "../article/articleCard/ArticleCard";

import DreamersDayCard from "../dreamersDay/dreamersDayCard/DreamersDayCard";
import Footer from "./Footer";
import Carousel from "./Carousel";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center">
      <Carousel />
      <div className="flex flex-col gap-9 ">
        <DreamersDayCard />
        <ArticleCard />
        <MovieCard />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
