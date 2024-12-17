"use client";

import Link from "next/link";

const MainHeader = () => {
  return (
    <header className="flex justify-center items-center py-[32px]">
      <div className="w-[1180px] h-[44px] flex gap-[320px]">
        <div className="flex items-center">
          <Link href="./">
            <img
              src="/Icons/ArtfilmLogo.png"
              alt="Logo"
              className="w-[139px] h-[49px]"
            />
          </Link>
        </div>
        <nav className="flex justify-center items-center gap-[32px]">
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
        </nav>
      </div>
    </header>
  );
};

export default MainHeader;
