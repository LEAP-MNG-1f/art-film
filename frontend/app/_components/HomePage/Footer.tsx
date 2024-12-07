import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center pt-24">
      <div className="lg:w-[1040px] lg:pb-10 px-2">
        <div className="flex justify-between">
          <div className="lg:w-[251px] flex flex-col gap-6">
            <p className="font-bold">Movies</p>
            <div>
              <p className="text-[#999999] font-bold">Gernes</p>
              <p className="text-[#999999] font-bold">Trending</p>
              <p className="text-[#999999] font-bold">New Release</p>
              <p className="text-[#999999] font-bold">Popular</p>
            </div>
          </div>
          <div className="lg:w-[251px] flex flex-col gap-6">
            <p className="font-bold">Shows</p>
            <div>
              <p className="text-[#999999] font-bold">Gernes</p>
              <p className="text-[#999999] font-bold">Trending</p>
              <p className="text-[#999999] font-bold">New Release</p>
              <p className="text-[#999999] font-bold">Popular</p>
            </div>
          </div>
          <div className="lg:w-[251px] flex flex-col gap-6">
            <p className="font-bold">Support</p>
            <p className="text-[#999999] font-bold">Contact Us</p>
          </div>
          <div className="lg:w-[251px]">
            <p className="font-bold">Connect With Us</p>
          </div>
        </div>
        <div className="flex justify-between pt-10 items-center">
          <p className="text-[#999999] font-bold">
            @2024 Altan Khalis, All Rights Reserved
          </p>
          <div className="flex gap-2">
            <p className="text-[#999999] font-bold">Terms of Use</p>
            <p className=" text-[#999999] font-bold w-[130px] h-[24px] border border-r-black border-l-black border-t-white border-b-white border-r-2 border-l-2 flex items-center justify-center">
              Privacy Policy
            </p>
            <p className="text-[#999999] font-bold">Cookie Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
