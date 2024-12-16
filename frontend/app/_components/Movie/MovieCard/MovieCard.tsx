import { ImdbStarIcon } from "@/public/Icons/Icons";
import Link from "next/link";
import React from "react";
import { BsChevronRight } from "react-icons/bs";

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
}: {
  moviesData: Movie[];
  isLoading: boolean;
}) => {
  const skeletonCards = Array.from({ length: 4 }, (_, i) => i); // Skeleton картын тоо

  return (
    <div className="flex justify-center pb-10 px-4 lg:px-0">
      <div className="w-full lg:w-[1280px] flex flex-col gap-4">
        <div className="flex justify-between h-[44px] lg:w-[1280px] ">
          <p className="text-black font-roboto-condensed text-[32px] flex items-center font-semibold leading-[24px]">
            КИНО
          </p>
          <Link href="/movies" className="flex gap-1 items-center">
            <p className="text-black font-roboto text-[14px] font-normal leading-[24px]">
              БҮГДИЙГ ХАРАХ
            </p>
            <div>
              <BsChevronRight className="text-[#F8941E]" />
            </div>
          </Link>
        </div>

        <div className="w-full">
          <div className="flex justify-between lg:gap-4 py-4">
            {isLoading
              ? skeletonCards.map((_, index) => (
                  <div
                    key={index}
                    className="grid rounded-3xl w-[280px] shadow-md hover:shadow-lg duration-300 bg-gray-200 flex-col animate-pulse"
                  >
                    <div className="rounded-t-3xl h-[380px] bg-gray-300"></div>
                    <div className="p-5">
                      <div className="h-6 bg-gray-300 mb-2 rounded"></div>
                      <div className="h-4 bg-gray-300 mb-2 rounded"></div>
                      <div className="h-16 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                ))
              : moviesData.map((data) => (
                  <div
                    key={data._id}
                    className="grid rounded-3xl max-w-[280px] shadow-md hover:shadow-lg duration-300 cursor-pointer bg-slate-100 flex-col"
                  >
                    <img
                      src={`${data?.imageUrl}`}
                      width="360"
                      height="200"
                      className="rounded-t-3xl justify-center h-80 grid object-cover"
                      alt={data.title}
                    />

                    <div className="group p-5 grid z-10">
                      <a className="group-hover:text-cyan-700 font-bold md:text-2xl line-clamp-2">
                        {data?.title}
                      </a>
                      <span className="text-slate-400 pt-2 font-semibold">
                        {data?.releaseYear}
                      </span>
                      <div className="h-20">
                        <span className="line-clamp-3 py-2 h-20 leading-6 text-sm font-light">
                          Ирээдүйд дэлхий хүн амьдрах боломжгүй болоход a
                          тариачин, НАСА-гийн экс нисгэгч Жозеф Куперт үүрэг
                          өгсөн судлаачдын багийн хамт сансрын хөлөг жолоодож,
                          хүн төрөлхтөнд шинэ гараг олохын тулд.
                        </span>
                      </div>
                      <div className="flex font-black items-center justify-between">
                        <span className="text-yellow-500 text-xl">
                          IMDB SCORE
                        </span>
                        <span className="text-3xl flex gap-x-1 items-center group-hover:text-yellow-600">
                          {data?.rating}
                          <ImdbStarIcon />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
