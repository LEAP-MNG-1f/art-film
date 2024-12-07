"use client";

import { BurgerIcon, SearchIcon } from "@/public/Icons/Icons";
import Link from "next/link";

import { useState } from "react";

const Header = () => {
  // State to control the mobile menu visibility
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev); // Toggle menu state
  };

  return (
    <header className="lg:w-[1040px] h-[44px] flex justify-between items-center lg:flex lg:justify-between lg:items-center">
      {/* Left Section */}
      <div className="flex lg:w-[520px] lg:gap-10 w-screen justify-between items-center px-5">
        {/* Logo */}
        <Link href="./" className="text-[16px] font-bold text-white hover:text-[#F8941E]">
          <img src="/Icons/ArtfilmLogo.png" alt="Logo" className="w-[107px] h-[40px]" />
        </Link>

        {/* Desktop Navigation Menu */}
        <nav className="lg:flex lg:gap-20 hidden">
          <Link href="/dreamers-day" className="text-[16px] font-bold text-white hover:text-[#F8941E]">
            Dreamers
          </Link>
          <Link href="/movies" className="text-[16px] font-bold text-white hover:text-[#F8941E]">
            Кино
          </Link>
          <Link href="/blogs" className="text-[16px] font-bold text-white hover:text-[#F8941E]">
            Нийтлэл
          </Link>
        </nav>

        {/* Mobile Burger Icon */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          className="lg:hidden focus:outline-none"
        >
          <BurgerIcon />
        </button>
      </div>

      {/* Search Icon (Desktop Only) */}
      <div className="hidden lg:block">
        <SearchIcon />
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="absolute top-0 left-0 w-full h-screen bg-gray-900 bg-opacity-95 flex flex-col items-center justify-center space-y-6 lg:hidden">
          <Link
            href="/dreamers-day"
            className="text-white text-xl hover:text-[#F8941E]"
            onClick={() => setMenuOpen(false)} // Close menu on link click
          >
            Dreamers
          </Link>
          <Link
            href="/movies"
            className="text-white text-xl hover:text-[#F8941E]"
            onClick={() => setMenuOpen(false)} // Close menu on link click
          >
            Кино
          </Link>
          <Link
            href="/blogs"
            className="text-white text-xl hover:text-[#F8941E]"
            onClick={() => setMenuOpen(false)} // Close menu on link click
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
  );
};

export default Header;
