"use client";

import { BurgerIcon, SearchIcon } from "@/public/Icons/Icons";
import Link from "next/link";
import { useState } from "react";

const HeaderPage = () => {
  // Menu-ийг нээх/хаах тохиргоо
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="lg:w-[1040px] h-[100px] border-b border-[#000000CC] flex justify-between items-center px-5">
      {/* Logo болон Navigation хэсэг */}
      <div className="flex lg:w-[520px] w-full justify-between items-center">
        {/* Logo */}
        <Link href="./">
          <img
            src="/Icons/ArtfilmLogo.png"
            alt="Logo"
            className="w-[107px] h-[40px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:gap-20">
          <Link
            className="text-[16px] font-bold text-black hover:text-[#F8941E]"
            href="/dreamers-day"
          >
            Dreamers
          </Link>
          <Link
            className="text-[16px] font-bold text-black hover:text-[#F8941E]"
            href="/movies"
          >
            Кино
          </Link>
          <Link
            className="text-[16px] font-bold text-black hover:text-[#F8941E]"
            href="/blogs"
          >
            Нийтлэл
          </Link>
        </nav>

        {/* Mobile Burger Icon */}
        <div className="lg:hidden  " onClick={toggleMenu}>
          <BurgerIcon />
        </div>
      </div>

      {/* Desktop Search Icon */}
      <div className="hidden lg:block">
        <SearchIcon />
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-gray-900 bg-opacity-75 flex flex-col items-center justify-center space-y-6 lg:hidden">
          <Link
            className="text-white text-xl hover:text-[#F8941E]"
            href="/dreamers-day"
            onClick={() => setMenuOpen(false)} // Менюг хаах
          >
            Dreamers
          </Link>
          <Link
            className="text-white text-xl hover:text-[#F8941E]"
            href="/movies"
            onClick={() => setMenuOpen(false)} // Менюг хаах
          >
            Кино
          </Link>
          <Link
            className="text-white text-xl hover:text-[#F8941E]"
            href="/blogs"
            onClick={() => setMenuOpen(false)} // Менюг хаах
          >
            Нийтлэл
          </Link>
          <button
            className="text-gray-400 text-lg mt-4"
            onClick={() => setMenuOpen(false)} // Менюг хаах
          >
            Close
          </button>
        </div>
      )}
    </header>
  );
};

export default HeaderPage;
