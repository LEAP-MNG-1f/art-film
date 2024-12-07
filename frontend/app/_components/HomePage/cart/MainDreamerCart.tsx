import React from "react";
import DreamersCart from "./DreamersCart";
import Link from "next/link";

const MainDreamerCart = () => {
  return (
    <div className="lg:flex lg:justify-center ">
      <div className="lg:w-[1040px] flex flex-col gap-7">
        <div className=" flex justify-between px-2">
          <p className="font-bold">DREAMERS’ DAY</p>

          <Link href="/dreamers-day" className="font-bold">
            БҮГДИЙГ ХАРАХ
          </Link>
        </div>

        <div className="lg:flex lg:flex-row lg:justify-center flex flex-col  items-center gap-8">
          <DreamersCart />
          <DreamersCart />
          <DreamersCart />
        </div>
      </div>
    </div>
  );
};

export default MainDreamerCart;
