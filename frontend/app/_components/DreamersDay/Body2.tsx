import React from "react";
import DreamersCart from "../HomePage/cart/DreamersCart";

const Body2 = () => {
  return (
    <div className="lg:w-[1040px] flex flex-col gap-8 pt-9 items-center">
      <div className="gap-8 lg:flex lg:flex-row flex flex-col">
        <DreamersCart />
        <DreamersCart />
        <DreamersCart />
      </div>
      <div className="gap-8 lg:flex lg:flex-row flex flex-col">
        <DreamersCart />
        <DreamersCart />
        <DreamersCart />
      </div>
      <div className="gap-8 lg:flex lg:flex-row flex flex-col">
        <DreamersCart />
        <DreamersCart />
        <DreamersCart />
      </div>
      <div className="w-[147px] h-[49px] rounded-md  border-[#F8941E] border-2 font-bold flex justify-center items-center hover:bg-[#F8941E] hover:text-white">
        Sowe more
      </div>
    </div>
  );
};

export default Body2;
