import {
  Avangard,
  Funny,
  Horror,
  Horror1,
  Romans,
  StarIcon,
} from "@/public/Icons/Icons";
import Link from "next/link";
import React, { useState } from "react";
import { MdBorderAll } from "react-icons/md";
import { GiCrimeSceneTape } from "react-icons/gi";
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

const MovieCard = ({
  moviesData,
  isLoading,
  limit = moviesData.length,
}: {
  moviesData: Movie[];
  isLoading: boolean;
  limit?: number;
}) => {
  const skeletonCards = Array.from({ length: 8 }, (_, i) => i);

  // Жанр сонголт хийх state
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  // Сонгосон жанртай кинонуудад фильтэр хийх
  const filteredMovies = selectedGenre
    ? moviesData.filter((movie) => movie.genre.includes(selectedGenre))
    : moviesData;

  // Жанрын сонголт хийх логик
  const genres = [
    {
      name: "Бүгд",
      icon: <MdBorderAll className="w-[25px] h-[24px] text-[#F8941E] " />,
      value: null,
    },
    { name: "Романс", icon: <Romans />, value: "Romance" },
    { name: "Аймшгийн", icon: <Horror />, value: "Horror" },
    { name: "Триллер", icon: <Horror1 />, value: "Thriller" },
    { name: "Авангард", icon: <Avangard />, value: "Avangard" },
    { name: "Инээдмийн", icon: <Funny />, value: "Comedy" },
    {
      name: "Гэмт Хэрэг",
      icon: <GiCrimeSceneTape className="w-[25px] h-[24px] text-[#F8941E]" />,
      value: "Crime",
    },
  ];

  return (
    <div className="flex justify-center pb-10 px-4 lg:px-0">
      <div className="max-w-[1180px] lg:w-[1180px] flex flex-col gap-4">
        {/* Genre selection */}
        <div className="flex justify-between flex-wrap mb-6">
          {genres.map((genre) => (
            <div
              key={genre.name}
              className={`flex gap-4 items-center cursor-pointer px-4 py-2 rounded-lg ${
                selectedGenre === genre.value ? "text-[#F8941E] font-bold" : ""
              }`}
              onClick={() =>
                setSelectedGenre(
                  genre.value === selectedGenre ? null : genre.value
                )
              } // Toggle genre filter
            >
              {genre.icon}
              <p className="overflow-hidden truncate font-helvetica text-lg leading-tight">
                {genre.name}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-[1180px]">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4">
            {isLoading
              ? skeletonCards.map((_, index) => (
                  <div
                    key={index}
                    className="grid rounded-3xl w-[280px] shadow-md hover:shadow-lg duration-300 bg-gray-200 flex-col animate-pulse -z-10"
                  >
                    <div className="rounded-t-3xl h-[285px] bg-gray-300"></div>
                    <div className="p-5">
                      <div className="h-6 bg-gray-300 mb-2 rounded"></div>
                      <div className="h-4 bg-gray-300 mb-2 rounded"></div>
                      <div className="h-16 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                ))
              : filteredMovies.slice(0, limit).map((data) => (
                  <div
                    key={data._id}
                    className="grid rounded-xl shadow-md hover:shadow-lg duration-300 cursor-pointer bg-slate-100 flex-col"
                  >
                    <img
                      src={data?.imageUrl}
                      alt={data.title}
                      className="rounded-t-xl justify-center h-[240px] w-full object-cover"
                    />
                    <Link
                      href={`/movies/${data._id}`}
                      className="group p-5 grid z-10"
                    >
                      <div className="group gap-4">
                        <div className="flex justify-between items-center gap-2">
                          <span className="group-hover:text-[#F8941E] text-6 font-bold md:text-2xl line-clamp-2 duration-300">
                            {data?.title}
                          </span>
                          <span className="flex justify-center items-center gap-2">
                            <span className="text-[24px] font-bold flex items-center group-hover:text-yellow-600 duration-300">
                              {data?.rating}
                            </span>
                            <StarIcon />
                          </span>
                        </div>
                        <span className="text-slate-400 pt-2 font-semibold">
                          {data?.releaseYear}
                        </span>
                        <div className="h-20">
                          <span className="line-clamp-3 h-20 leading-6 text-sm font-light">
                            Ирээдүйд дэлхий хүн амьдрах боломжгүй болоход a
                            тариачин, НАСА-гийн экс нисгэгч Жозеф Куперт үүрэг
                            өгсөн судлаачдын багийн хамт сансрын хөлөг жолоодож,
                            хүн төрөлхтөнд шинэ гараг олохын тулд.s
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
