"use client";
import Link from "next/link";
import {
  ArticleIcon,
  DreamerIcon,
  HomeIconNuur,
  MoviesIcon,
} from "@/public/Icons/SvgFiles";
import { usePathname } from "next/navigation";

export const ControlPanel = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="flex flex-col h-screen pl-5 border-r-2">
      <div className="mb-10">
        <img width={350} src="/Icons/ArtfilmLogo.png" alt="Logo" />
      </div>
      <div className="flex flex-col text-white font-semibold gap-5 text-2xl w-full">
        <Link href={"/"}>
          <button
            className={`relative w-full group px-4 py-2 rounded-l-md transition-all duration-300 ${
              isActive("/")
                ? "text-orange-600 bg-orange-100"
                : "text-black bg-transparent hover:bg-orange-100"
            }`}
          >
            <div className="flex items-center gap-3">
              <HomeIconNuur />
              Home
            </div>
            <span
              className={`absolute inset-x-0 bottom-0 h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-800 ${
                isActive("/") || pathname === "/" ? "scale-x-100" : "scale-x-0"
              }`}
            ></span>
          </button>
        </Link>
        <Link href={"/dreamer-day"}>
          <button
            className={`relative w-full group px-4 py-2 rounded-l-md transition-all duration-800 ${
              isActive("/dreamer-day")
                ? "text-orange-600 bg-orange-100"
                : "text-black bg-transparent hover:bg-orange-100"
            }`}
          >
            <div className="flex items-center gap-3">
              <DreamerIcon />
              <p>Dreamer's Day</p>
            </div>
            <span
              className={`absolute inset-x-0 bottom-0 h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-800 ${
                isActive("/dreamer-day") || pathname === "/dreamer-day"
                  ? "scale-x-100"
                  : "scale-x-0"
              }`}
            ></span>
          </button>
        </Link>
        <Link href={"/movies"}>
          <button
            className={`relative w-full group px-4 py-2 rounded-l-md transition-all duration-800 ${
              isActive("/movies")
                ? "text-orange-600 bg-orange-100"
                : "text-black bg-transparent hover:bg-orange-100"
            }`}
          >
            <div className="flex items-center gap-3">
              <MoviesIcon />
              <p>Movies</p>
            </div>
            <span
              className={`absolute inset-x-0 bottom-0 h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-800 ${
                isActive("/movies") || pathname === "/movies"
                  ? "scale-x-100"
                  : "scale-x-0"
              }`}
            ></span>
          </button>
        </Link>
        <Link href={"/articles"}>
          <button
            className={`relative w-full group px-4 py-2 rounded-l-md transition-all duration-800 ${
              isActive("/articles")
                ? "text-orange-600 bg-orange-100"
                : "text-black bg-transparent hover:bg-orange-100"
            }`}
          >
            <div className="flex items-center gap-3">
              <ArticleIcon />
              <p>Articles</p>
            </div>
            <span
              className={`absolute inset-x-0 bottom-0 h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-800 ${
                isActive("/articles") || pathname === "/articles"
                  ? "scale-x-100"
                  : "scale-x-0"
              }`}
            ></span>
          </button>
        </Link>
      </div>
    </div>
  );
};
