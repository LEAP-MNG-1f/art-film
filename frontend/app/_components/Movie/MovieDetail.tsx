import React from "react";
import Footer from "../HomePage/Footer";
import { FaStar } from "react-icons/fa";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";
import Header from "../Article/Header";

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

const MovieDetail = ({ movieData }: { movieData: Movie | null }) => {
  if (!movieData) {
    return <div>Movie not found!</div>;
  }

  return (
    <div className="movie-detail-container flex flex-col justify-center">
      <Header />
      <div className="flex items-center flex-col">
        <div className="w-[1180px]">
          <div className="flex flex-col gap-2 pt-10">
            <div className="flex gap-[17px]">
              {movieData.genre.map((genreData) => (
                <p
                  key={genreData}
                  className="text-[#F8941E] font-['Helvetica Neue'] text-[14px] font-bold leading-[20px] w-[93px] h-[22px] bg-[#F8941E0D] flex items-center justify-center"
                >
                  {genreData}
                </p>
              ))}
            </div>
            <div className="flex justify-between">
              <div>
                <p className="text-[#000] font-['Helvetica Neue'] text-[42px] font-bold leading-[47px] w-[502px]">
                  {movieData.title}
                </p>
                <div className="flex">
                  <p className="text-[rgba(0,0,0,0.45)] font-['Roboto'] text-[16px] font-normal leading-[32px]">
                    {movieData.releaseYear}
                  </p>
                  <p className="text-[rgba(0,0,0,0.45)] font-['Roboto'] text-[16px] font-normal leading-[32px] flex justify-center items-center">
                    .
                  </p>
                  <p className="text-[rgba(0,0,0,0.45)] font-['Roboto'] text-[16px] font-normal leading-[32px]">
                    1цаг 45мин
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex gap-6">
                  <div>
                    <p className="text-[rgba(0,0,0,0.45)] font-['Roboto'] text-[16px] font-normal leading-[32px]">
                      IMDb RATING
                    </p>
                    <div className="flex items-center gap-2">
                      <FaStar className="text-[#F5C937] w-6 h-6" />
                      <p className="text-[#000] font-['Roboto'] text-[18px] font-normal leading-[32px]">
                        {movieData.rating}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[rgba(0,0,0,0.45)] font-['Roboto'] text-[16px] font-normal leading-[32px]">
                      POPULARITY
                    </p>
                    <div className="flex items-center gap-2">
                      <HiOutlineArrowTrendingUp className="w-6 h-6" />
                      <p className="text-[#000] font-['Roboto'] text-[18px] font-normal leading-[32px]">
                        sadsdadsdd
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[#000] font-['Roboto'] text-[15px] font-medium leading-[32px]">
                    Зохиолч: {movieData.writer.join(", ")}
                  </p>
                  <p className="text-[#000] font-['Roboto'] text-[15px] font-medium leading-[32px]">
                    Найруулагч: {movieData.director.join(", ")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-8 border border-t-[#00000073] border-r-white border-l-white border-b-white flex flex-col gap-8">
            <p>
              “Хүрд” кино нь амиа хорлосон хүмүүсийн ар гэрийнхэн болон амиа
              хорлохоор оролдож байсан хүмүүстэй хийсэн ярианаас бүтжээ.
            </p>
            {movieData.imageUrl && (
              <img
                src={movieData.imageUrl}
                alt={movieData.title || "Movie Poster"}
                className="movie-poster"
              />
            )}
            <p>
              Саяхныг хүртэл баримтат киног баримтат нэвтрүүлгээс ялгаж байдаг
              уран сайхны шийдэл, кино хэл гэх зүйлс манай баримтат
            </p>
            {movieData.imageUrl && (
              <img
                src={movieData.imageUrl}
                alt={movieData.title || "Movie Poster"}
                className="movie-poster"
              />
            )}
            <div className="flex flex-col gap-4">
              <p>Does It Mean Anything?</p>
              <p>Мэргэжлийн сэтгүүлч хүн зохиож, найруулсны үр дүн биз ээ.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MovieDetail;
