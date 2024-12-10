"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const ControlPanel = () => {
  const pathname = usePathname();

  return (
    <div className="h-screen bg-slate-900 pl-5">
      <div className="mb-10">
        <img width={350} src="/Icons/ArtfilmLogo.png" alt="" />
      </div>
      <div className="flex flex-col items-end text-white font-semibold gap-5 pr-5 text-2xl">
        <Link href={"/"}>
          <button
            className={` ${
              pathname === "/" ? "text-orange-500" : "text-white"
            } relative  text-white hover:text-orange-500 group`}
          >
            Home
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </button>
        </Link>
        <Link href={"/dreamer-day"}>
          <button
            className={` ${
              pathname === "/dreamer-day" ? "text-orange-500" : "text-white"
            } relative  text-white hover:text-orange-500 group`}
          >
            Dreamer's Day
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </button>
        </Link>
        <Link href={"/movies"}>
          <button
            className={` ${
              pathname === "/movies" ? "text-orange-500" : "text-white"
            } relative  text-white hover:text-orange-500 group`}
          >
            Movies
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </button>
        </Link>
        <Link href={"/feedback"}>
          <button
            className={` ${
              pathname === "/feedback" ? "text-orange-500" : "text-white"
            } relative  text-white hover:text-orange-500 group`}
          >
            Feedback
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </button>
        </Link>
      </div>
    </div>
  );
};
