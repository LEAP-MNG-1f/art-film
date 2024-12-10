import HeaderPage from "../article/Header";
import Footer from "../homePage/Footer";
import Recommend from "../homePage/Recommend";
import MovieBody from "./movieCard/MovieBody";

const MoviePage = () => {
  return (
    <div className="flex justify-center">
      <div>
        <HeaderPage />
        <div className="py-10">
          <MovieBody />
          <Recommend />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MoviePage;
