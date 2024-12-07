import React from "react";
import Header from "./Header";

const Desktop = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/Images/Rectangle.png)",
      }}
      className=" lg:h-[900px] bg-cover lg:w-screen w-screen h-[300px] flex justify-center lg:pt-[37px]"
    >
      <div>
        <Header />
        <div className="lg:pt-[188px] pt-12 pl-6">
          <div>
            <p className="lg:text-[96px] text-white font-bold">ONLY RIVER </p>
            <p className="lg:text-[96px] text-white font-bold"> THE FLOWS</p>
          </div>
          <div className="lg:w-[147px] lg:h-[49px] w-[117px] h-[39px] bg-[#F8941E] text-black rounded-md flex items-center justify-center font-bold">
            Дэлгэрэнгүй
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
