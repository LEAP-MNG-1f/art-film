"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const getLinkStyle = (path: string) =>
    pathname === path
      ? "text-[#F8941E] font-roboto text-[16px] font-semibold leading-normal"
      : "text-black font-roboto text-[16px] font-semibold leading-normal hover:text-[#F8941E]";

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
          <Link href="/dreamers-day" className={getLinkStyle("/dreamers-day")}>
            Dreamers’ Day
          </Link>
          <Link href="/movies" className={getLinkStyle("/movies")}>
            Кино
          </Link>
          <Link href="/articles" className={getLinkStyle("/articles")}>
            Нийтлэл
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
