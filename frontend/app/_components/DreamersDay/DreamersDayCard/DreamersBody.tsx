import React from "react";
import HeaderPage from "../../Article/Header";
import Footer from "../../HomePage/Footer";
import Recommend from "../../HomePage/Recommend";
import { GiHumanTarget } from "react-icons/gi";
import { LuClock5 } from "react-icons/lu";
import { GiDramaMasks } from "react-icons/gi";
import { IoLocationSharp } from "react-icons/io5";
import { IoLanguage } from "react-icons/io5";
import { SlNote } from "react-icons/sl";

const SingelPage = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[1221px] py-10">
        <p className="text-[#000] font-['Roboto_Condensed'] text-[32px] font-semibold leading-[24px] pb-10 flex justify-center">
          DREAMERS’ DAY
        </p>
        <img
          className="w-[1221px] h-[570px] rounded-lg"
          src="https://images.hdqwalls.com/wallpapers/godzilla-minus-one-4k-d9.jpg"
          alt=""
        />
        <div className="flex flex-col gap-3 pt-10">
          <div className="w-[894px]">
            <div className="flex items-center gap-4">
              <p className="text-black font-['Helvetica_Neue'] text-[32px] font-medium leading-[32px]">
                Dreamers’ day #396: Oldboy Special Screening
              </p>
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
                <GiHumanTarget className="w-5 h-5" />

                <p className="text-black font-roboto text-[16px] font-semibold leading-[28px]">
                  Найруулагч:
                </p>
                <p className="text-black font-roboto text-[16px] font-normal leading-[28px]">
                  Пак Чан-үг
                </p>
              </div>
              <div className="flex items-center gap-2">
                <LuClock5 className="w-5 h-5" />

                <p className="text-black font-roboto text-[16px] font-semibold leading-[28px]">
                  Үргэлжлэх хугацаа:
                </p>
                <p className="text-black font-roboto text-[16px] font-normal leading-[28px]">
                  2 цаг
                </p>
              </div>
              <div className="flex items-center gap-2">
                <GiDramaMasks className="w-5 h-5" />

                <p className="text-black font-roboto text-[16px] font-semibold leading-[28px]">
                  Жанр:
                </p>
                <p className="text-black font-roboto text-[16px] font-normal leading-[28px]">
                  Триллер
                </p>
              </div>
              <div className="flex items-center gap-2">
                <IoLanguage className="w-5 h-5" />

                <p className="text-black font-roboto text-[16px] font-semibold leading-[28px]">
                  Хэл:
                </p>
                <p className="text-black font-roboto text-[16px] font-normal leading-[28px]">
                  Солонгос
                </p>
              </div>
              <div className="flex items-center gap-2">
                <SlNote className="w-5 h-5" />

                <p className="text-black font-roboto text-[16px] font-semibold leading-[28px]">
                  Хадмал:
                </p>
                <p className="text-black font-roboto text-[16px] font-normal leading-[28px]">
                  Солонгос
                </p>
              </div>
              <div className="flex items-center gap-2">
                <IoLocationSharp className="w-5 h-5" />

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
            <div>
              <div className="flex items-center">
                <p className="text-black font-roboto text-[24px] font-semibold leading-[28px]">
                  Тасалбарын үнэ:
                </p>
                <p className="text-black font-roboto text-[24px] font-normal leading-[28px] ">
                  232222
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

export default SingelPage;
