import React from "react";
import MovieCart from "./MovieCart";
import Link from "next/link";
const MainMovie = () => {
  return (
    <div className="flex justify-center">
      <div className="lg:w-[1040px] flex flex-col gap-4">
        <div className="flex justify-between h-[44px] lg:w-[1040px] border border-t-[#00000080] border-t-2 items-center border-l-white border-b-white border-r-white">
          <p className="font-bold">КИНО</p>

          <Link href="/movies" className="font-bold">
            БҮГДИЙГ ХАРАХ
          </Link>
        </div>

        <div className="lg:flex lg:flex-row lg:justify-center flex flex-col  items-center gap-8">
          <MovieCart /> <MovieCart /> <MovieCart />
        </div>
      </div>
    </div>
  );
};

export default MainMovie;
