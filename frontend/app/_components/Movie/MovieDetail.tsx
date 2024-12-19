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
  trailerUrl?: string; // Optional field
  imageUrl: string;
  relatedMovies: string[];
  createdAt: Date;
};

const MovieDetail = ({ movieData }: { movieData: Movie | null }) => {
  if (!movieData) {
    return <div>Movie not found!</div>;
  }

  const loremText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      .repeat(20)
      .split(" ")
      .slice(0, 1000)
      .join(" ");

  // Function to extract YouTube video ID from trailer URL
  const extractYouTubeVideoId = (url: string) => {
    const match = url.match(
      /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    return match ? match[1] : null;
  };

  const trailerVideoId = movieData.trailerUrl
    ? extractYouTubeVideoId(movieData.trailerUrl)
    : null;

  return (
    <div className="movie-detail-container flex flex-col justify-center">
      <Header />
      <div className="flex items-center flex-col">
        <div className="w-[1180px]">
          <div className="flex flex-col gap-2 pt-10">
            <div className="flex justify-between">
              <div>
                <p className="text-[#000] font-['Helvetica Neue'] text-[42px] font-bold leading-[47px] w-[502px]">
                  {movieData.title}
                </p>
                <div className="flex gap-3">
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
              </div>
            </div>
          </div>
          <div className="py-8 border border-t-[#00000073] border-r-white border-l-white border-b-white flex flex-col gap-5">
            <div className="flex gap-5">
              {movieData.imageUrl && (
                <img
                  width={300}
                  src={movieData.imageUrl}
                  alt={movieData.title || "Movie Poster"}
                  className="movie-poster rounded-xl"
                />
              )}
              {trailerVideoId && (
                <div className="flex justify-center w-full">
                  <iframe
                    src={`https://www.youtube.com/embed/${trailerVideoId}`}
                    title="Movie Trailer"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-xl"
                  ></iframe>
                </div>
              )}
            </div>
            <div className="flex gap-[17px]">
              {movieData.genre.map((genreData) => (
                <p
                  key={genreData}
                  className="text-orange-500 font-['Helvetica Neue'] text-[14px] font-bold leading-[20px] w-[93px] h-[22px] bg-orange-100 py-2 rounded-lg flex items-center justify-center"
                >
                  {genreData}
                </p>
              ))}
            </div>
            <div>
              <p className="text-[#000] font-['Roboto'] text-[15px] font-semibold leading-[32px]">
                Зохиолч: {movieData.writer.join(", ")}
              </p>
              <p className="text-[#000] font-['Roboto'] text-[15px] font-semibold leading-[32px]">
                Найруулагч: {movieData.director.join(", ")}
              </p>
            </div>
            <p>{loremText}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MovieDetail;
