import Link from "next/link";
import React from "react";
import { BsChevronRight } from "react-icons/bs";

const DreamersDayCard = () => {
  return (
    <div className="lg:flex lg:justify-center">
      <div className="lg:w-screen h-auto relative">
        <div className="h-[318px]  bg-black z-0 shadow-black shadow-lg"></div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10  pt-60  w-[1221px]">
          <img
            className="w-[1221px] h-[558px] rounded-lg object-cover"
            src="https://images4.alphacoders.com/133/1336451.jpg"
            alt="Small Image 2"
          />
          
        </div>
      </div>

      <div className="h-[150px] lg:h-[253px] bg-white z-0"></div>
    </div>
  );
};

export default DreamersDayCard;
