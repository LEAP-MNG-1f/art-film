"use client";

import Link from "next/link";
import { AdminProfile } from "./AdminProfile/AdminProfile";

export const ControlPanel = () => {
  return (
    <div className="h-screen bg-slate-900 pl-5">
      <div className="mb-10">
        <img width={350} src="/Icons/ArtfilmLogo.png" alt="" />
      </div>
      <div className="flex flex-col items-start text-white font-semibold gap-5 text-2xl">
        <Link href={"/dreamer-day"}>
          <button className="relative text-white hover:text-orange-500 group">
            Dreamer's Day
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </button>
        </Link>
        <Link href={"/movies"}>
          <button className="relative text-white hover:text-orange-500 group">
            Movies
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </button>
        </Link>
        <Link href={"/feedback"}>
          <button className="relative text-white hover:text-orange-500 group">
            Feedback
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </button>
        </Link>
      </div>
    </div>
  );
};
