import {
  Avangard,
  Funny,
  Horror,
  Horror1,
  Kino,
  Romans,
  StarIcon,
} from "@/public/Icons/Icons";
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
  limit = moviesData.length,
}: {
  moviesData: Movie[];
  isLoading: boolean;
  limit?: number;
}) => {
  const skeletonCards = Array.from({ length: 8 }, (_, i) => i);

  return (
    <div className="flex justify-center pb-10 px-4 lg:px-0">
      <div className="max-w-[1180px] lg:w-[1180px] flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="w-[100px] h-[35px] overflow-hidden text-white truncate font-helvetica text-lg font-bold leading-tight bg-[#F8941E] rounded-md flex justify-center items-center">
            Бүгд
          </div>
          <div className="flex gap-4 items-center">
            <Romans />
            <p className="overflow-hidden text-black truncate font-helvetica text-lg font-bold leading-tight">
              Романс
            </p>
          </div>
          <div className="flex gap-4 items-center ">
            <Horror />

            <p className="overflow-hidden text-black truncate font-helvetica text-lg font-bold leading-tight">
            Аймшгийн
            </p>
          </div>
          <div className="flex gap-4 items-center ">
            <Horror1 />

            <p className="overflow-hidden text-black truncate font-helvetica text-lg font-bold leading-tight">
            Триллер
            </p>
          </div>
          <div className="flex gap-4 items-center ">
            <Avangard />

            <p className="overflow-hidden text-black truncate font-helvetica text-lg font-bold leading-tight">
            Авангард
            </p>
          </div>
          <div className="flex gap-4 items-center ">
            <Funny />

            <p className="overflow-hidden text-black truncate font-helvetica text-lg font-bold leading-tight">
            Инээдмийн
            </p>
          </div>
          <div className="flex gap-4 items-center ">
            <Kino />

            <p className="overflow-hidden text-black truncate font-helvetica text-lg font-bold leading-tight">
              Романс
            </p>
          </div>
        </div>
        <div className="flex justify-between h-[44px] w-full">
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
              : moviesData.slice(0, limit).map((data) => (
                  <div
                    key={data._id}
                    className="grid rounded-xl shadow-md hover:shadow-lg duration-300 cursor-pointer bg-slate-100 flex-col"
                  >
                    <img
                      src={`${data?.imageUrl}`}
                      width="360"
                      height="200"
                      className="rounded-t-xl justify-center h-[240px] grid object-cover"
                      alt={data.title}
                    />
                    <Link
                      href={`/movies/${data?._id}`}
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
                            хүн төрөлхтөнд шинэ гараг олохын тулд.
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
