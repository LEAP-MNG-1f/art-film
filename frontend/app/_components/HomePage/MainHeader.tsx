"use client";

import Link from "next/link";

const MainHeader = () => {
  return (
    <header className="w-[1221px]  h-[44px] flex justify-between items-center relative">
      <div className="flex   items-center">
        <Link href="./">
          <img
            src="/Icons/ArtfilmLogo.png"
            alt="Logo"
            className="w-[139px] h-[49px]"
          />
        </Link>
      </div>
      <nav className="flex gap-10 w-[802]">
        <Link
          href="/dreamers-day"
          className="text-white font-roboto text-[16px] font-semibold leading-normal hover:text-[#F8941E]"
        >
          Dreamers’ Day
        </Link>
        <Link
          href="/movies"
          className="text-white font-roboto text-[16px] font-semibold leading-normal hover:text-[#F8941E]"
        >
          Кино
        </Link>
        <Link
          href="/articles"
          className="text-white font-roboto text-[16px] font-semibold leading-normal hover:text-[#F8941E]"
        >
          Нийтлэл
        </Link>
        <Link
          href="/articles"
          className="text-white font-roboto text-[16px] font-semibold leading-normal hover:text-[#F8941E]"
        >
          Дараа үзэх
        </Link>
      </nav>
    </header>
  );
};

export default MainHeader;
