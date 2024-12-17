"use client";

import Link from "next/link";

const DreamersDayHeader = () => {
  return (
    <header className=" flex justify-center pt-[37px]">
      <div className="w-[1221px] h-[44px] flex justify-between">
        <div className="flex   items-center">
          <Link href="./">
            <img
              src="/Icons/ArtfilmLogo.png"
              alt="Logo"
              className="w-[139px] h-[49px]"
            />
          </Link>
        </div>
        <nav className="flex gap-[32px] ]">
          <Link
            href="/dreamers-day"
            className="text-black font-roboto text-[16px] font-semibold leading-normal hover:text-[#F8941E]"
          >
            Dreamers’ Day
          </Link>
          <Link
            href="/movies"
            className="text-black font-roboto text-[16px] font-semibold leading-normal hover:text-[#F8941E]"
          >
            Кино
          </Link>
          <Link
            href="/articles"
            className="text-black font-roboto text-[16px] font-semibold leading-normal hover:text-[#F8941E]"
          >
            Нийтлэл
          </Link>
        </nav>

        <div className="w-11 h-11 rounded-[50%] border border-black"></div>
      </div>
    </header>
  );
};

export default DreamersDayHeader;
