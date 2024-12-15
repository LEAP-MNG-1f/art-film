import HeaderPage from "../Article/Header";
import Footer from "../HomePage/Footer";
import Recommend from "../HomePage/Recommend";
import MovieBody from "./MovieCard/MovieBody";

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
