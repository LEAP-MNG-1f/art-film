"use client";

import { BurgerIconBlack, SearchIcon } from "@/public/Icons/Icons";
import Link from "next/link";
import { useState } from "react";

const HeaderPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="pt-[37px] flex justify-center">
     
      <header className="lg:w-[1040px] h-[44px] flex justify-between items-center lg:flex  lg:justify-between lg:items-center">
        <div className="flex lg:w-[520px] lg:gap-10 w-screen justify-between items-center ">
          <Link
            href="./"
            className="text-[16px] font-bold text-black hover:text-[#F8941E]"
          >
            <img
              src="/Icons/ArtfilmLogo.png"
              alt="Logo"
              className="w-[139px] h-[49px]"
            />
          </Link>

          <nav className="lg:flex lg:gap-20 hidden">
            <Link
              href="/dreamers-day"
              className="text-[16px] font-bold text-black hover:text-[#F8941E]"
            >
              Dreamers
            </Link>
            <Link
              href="/movies"
              className="text-[16px] font-bold text-black hover:text-[#F8941E]"
            >
              Кино
            </Link>
            <Link
              href="/articles"
              className="text-[16px] font-bold text-black hover:text-[#F8941E]"
            >
              Нийтлэл
            </Link>
          </nav>

          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="lg:hidden focus:outline-none"
          >
            <BurgerIconBlack />
          </button>
        </div>
        <div className="hidden lg:block">
          <SearchIcon />
        </div>
        {menuOpen && (
          <nav className="absolute top-0 left-0 w-full h-screen bg-gray-900 bg-opacity-95 flex flex-col items-center justify-center space-y-6 lg:hidden">
            <Link
              href="/dreamers-day"
              className="text-white text-xl hover:text-[#F8941E]"
              onClick={() => setMenuOpen(false)}
            >
              Dreamers
            </Link>
            <Link
              href="/movies"
              className="text-white text-xl hover:text-[#F8941E]"
              onClick={() => setMenuOpen(false)}
            >
              Кино
            </Link>
            <Link
              href="/articles"
              className="text-white text-xl hover:text-[#F8941E]"
              onClick={() => setMenuOpen(false)}
            >
              Нийтлэл
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-gray-400 text-lg mt-4 focus:outline-none"
            >
              Close
            </button>
          </nav>
        )}
      </header>
    </div>
  );
};

export default HeaderPage;
