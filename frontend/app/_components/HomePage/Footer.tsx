import React from "react";
import { RiMapPin2Line } from "react-icons/ri";
<RiMapPin2Line />;
const Footer = () => {
  return (
    <div className="flex justify-center pt-24 w-screen bg-black">
      <div className="lg:w-[1040px] lg:pb-10 px-2">
        <div className="flex justify-between">
          <div className="hidden lg:block">
            <img
              src="/Icons/ArtfilmLogo.png"
              alt="Logo"
              className="w-[244px] h-[91px] "
            />
          </div>

          <div className="ml-10 lg:flex-row flex flex-col gap-12  lg:gap-10">
            <div className="mb-4 flex flex-col gap-3">
              <p className="text-white font-roboto text-[12px] font-medium leading-normal">
                Булангууд
              </p>
              <p className="text-white/60  text-[14px] font-bold">Нүүр</p>
              <p className="text-[rgba(255,255,255,0.57)] font-roboto text-[12px] font-normal leading-normal">
                Dreamers’ day
              </p>
              <p className="text-[rgba(255,255,255,0.57)] font-roboto text-[12px] font-normal leading-normal">
                Кино
              </p>
            </div>
            <div className="w-[174px] flex flex-col gap-3">
              <p className="text-white font-roboto text-[12px] font-medium leading-normal">
                Компани
              </p>
              <p className="text-[rgba(255,255,255,0.57)] font-roboto text-[12px] font-normal leading-normal">
                Улаанбаатар 14240, СБД, 8-р хороо, Амарын гудамж, Тэнгэрлиг
                медиа групп
              </p>
              <p className="text-[rgba(255,255,255,0.57)] font-roboto text-[12px] font-normal leading-normal">
                9999999
              </p>
              <p className="text-[rgba(255,255,255,0.57)] font-roboto text-[12px] font-normal leading-normal">
                altankhalisngo@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between pt-10 items-center">
          <p className="text-[rgba(255,255,255,0.57)] font-roboto text-[12px] font-normal leading-normal">
            @2024 Altan Khalis, All Rights Reserved
          </p>
          <div className="flex gap-2">
            <p className="text-[rgba(255,255,255,0.57)] font-roboto text-[12px] font-normal leading-normal">
              Terms of Use
            </p>
            <p className="text-[rgba(255,255,255,0.57)] font-roboto text-[12px] font-normal leading-normal">
              Privacy Policy
            </p>
            <p className="text-[rgba(255,255,255,0.57)] font-roboto text-[12px] font-normal leading-normal">
              Cookie Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
