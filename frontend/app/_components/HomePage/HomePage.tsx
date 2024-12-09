import Footer from "./Footer";
import MovieCard from "../Movie/MovieCard/MovieCard";
import ArticleCard from "../Article/ArticleCard/ArticleCard";
import Carousel from "./Carousel";
import DreamersDayCard from "../DreamersDay/DreamersDayCard/DreamersDayCard";

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
