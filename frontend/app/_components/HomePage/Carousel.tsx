import React from "react";
import Header from "./MainHeader";

const Carousel = () => {
  return (
    <div className="lg:h-[900px] h-[300px] w-screen bg-cover bg-custom-gradient bg-no-repeat flex justify-center lg:pt-[37px]">
      <div>
        <Header />
        <div className="lg:pt-[188px] pt-12 pl-6">
          <div>
            <p className="lg:text-[96px] text-white font-bold">ONLY RIVER</p>
            <p className="lg:text-[96px] text-white font-bold">THE FLOWS</p>
          </div>
          <div className="lg:w-[147px] lg:h-[49px] w-[117px] h-[39px] backdrop-blur-sm  text-white rounded-md flex items-center justify-center font-bold">
            Дэлгэрэнгүй
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
