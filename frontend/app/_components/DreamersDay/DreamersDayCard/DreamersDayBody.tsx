import React from "react";
import {
  ActorIcon,
  CategoriesIcon,
  ClockIcon,
  LanguageIcon,
  LocationIcon,
  NodeIcon,
  TickedIcon,
} from "@/public/Icons/Icons";

const DreamersDayBody = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[1180px] flex flex-col gap-10">
      
        <img
          className="w-[1180px] h-[570px] rounded-lg"
          src="https://images.hdqwalls.com/wallpapers/godzilla-minus-one-4k-d9.jpg"
          alt=""
        />
        <div className="flex flex-col gap-3">
          <div className="w-[894px] flex flex-col gap-3">
            <div className="flex justify-center items-center gap-3">
              <p className="text-black font-['Helvetica_Neue'] text-[32px] font-medium leading-[32px]">
                Dreamers’ day #396: Oldboy Special Screening
              </p>
              <div className="border-r-2 border-black h-[23px]"></div>
              <p className="text-black font-roboto text-[22px] font-normal leading-[20px]  ">
                2024.11.24 17:00
              </p>
            </div>
            <div>
              <p className="text-black font-roboto text-[18px] font-normal leading-[32px]">
                Тойм: Олон жилийн турш хоригдсон эр нэг л өдөр гар утас, мөнгө,
                бас үнэтэй хувцастай суллагдах бөгөөд өөрийг нь ямар учир
                шалтгаантайгаар, хэн барьж хорих болсныг олж мэдэхэд түүнд
                тавхан өдрийн хугацаа бий.
              </p>
            </div>
            <div className="flex gap-2 flex-col">
              <div className="flex items-center gap-2">
                <ActorIcon />
                <p className="text-black font-roboto text-[16px] font-semibold leading-[28px]">
                  Найруулагч:
                </p>
                <p className="text-black font-roboto text-[16px] font-normal leading-[28px]">
                  Пак Чан-үг
                </p>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon />
                <p className="text-black font-roboto text-[16px] font-semibold leading-[28px]">
                  Үргэлжлэх хугацаа:
                </p>
                <p className="text-black font-roboto text-[16px] font-normal leading-[28px]">
                  2 цаг
                </p>
              </div>
              <div className="flex items-center gap-2">
                <CategoriesIcon />
                <p className="text-black font-roboto text-[16px] font-semibold leading-[28px]">
                  Жанр:
                </p>
                <p className="text-black font-roboto text-[16px] font-normal leading-[28px]">
                  Триллер
                </p>
              </div>
              <div className="flex items-center gap-2">
                <LanguageIcon />
                <p className="text-black font-roboto text-[16px] font-semibold leading-[28px]">
                  Хэл:
                </p>
                <p className="text-black font-roboto text-[16px] font-normal leading-[28px]">
                  Солонгос
                </p>
              </div>
              <div className="flex items-center gap-2">
                <NodeIcon />
                <p className="text-black font-roboto text-[16px] font-semibold leading-[28px]">
                  Хадмал:
                </p>
                <p className="text-black font-roboto text-[16px] font-normal leading-[28px]">
                  Солонгос
                </p>
              </div>
              <div className="flex items-center gap-2">
                <LocationIcon />
                <p className="text-black font-roboto text-[16px] font-semibold leading-[28px]">
                  Байршил:
                </p>
                <p className="text-black font-roboto text-[16px] font-normal leading-[28px]">
                  Тэнгис кино театр
                </p>
              </div>
              <p className="text-black font-roboto text-[16px] font-normal leading-[28px]">
                (Тэнгис кино театрын билетийн кассаар худалдаалагдана.)
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex justify-center items-center">
              <div className="flex items-center gap-2">
                <TickedIcon />
                <p className="text-black font-roboto text-[24px] font-semibold leading-[28px]">
                  Тасалбарын үнэ:
                </p>
                <p className="text-black font-roboto text-[24px] font-normal leading-[28px] ">
                  11'000₮
                </p>
              </div>
            </div>
            <div className="w-[134px] h-[40px]  bg-[#F8941E] rounded-md text-[#FAFAFA] font-inter text-[14px] font-semibold leading-[20px] flex justify-center items-center">
              Тасалбар авах
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamersDayBody;
