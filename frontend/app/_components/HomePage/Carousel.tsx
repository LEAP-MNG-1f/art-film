"use client";
import React, { useState, useEffect } from "react";
import Header from "./MainHeader";

const Carousel = () => {
  // Зургийн индексийг хадгалах state
  const [currentSlide, setCurrentSlide] = useState(0);

  // Background зургуудын жагсаалт
  const slides = [
    "url('/Images/maxresdefault.jpg')",
    "url('/Images/Rectangle.png')",
    "url('/Images/TELEMMGLPICT000277106333_17225123845380_trans_NvBQzQNjv4Bq-3BVr67lpk-o2tlZeW1aMjwe9Oyiw3C9dvwOUuinKek.webp')",
  ];

  // Зургуудыг автоматаар солих функц
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // 5 секунд тутамд зураг солигдоно

    return () => clearInterval(interval); // Цэвэрлэгч функц
  }, [slides.length]);

  return (
    <div
      className="relative lg:h-[900px] h-[300px] w-screen bg-cover bg-no-repeat flex justify-center lg:pt-[37px]"
      style={{
        backgroundImage: slides[currentSlide], // Динамикаар background солих
        transition: "background-image 1s ease-in-out", // Шилжилтийн эффект
      }}
    >
      {/* Доороос хар уусгалт нэмэх */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

      <div className="relative z-10">
        <Header />
        <div className="lg:pt-[188px] pt-12 pl-6">
          <div>
            <p className="lg:text-[96px] text-white font-bold">ONLY RIVER</p>
            <p className="lg:text-[96px] text-white font-bold">THE FLOWS</p>
          </div>
          <div className="lg:w-[147px] lg:h-[49px] w-[117px] h-[39px] backdrop-blur-sm text-white rounded-md flex items-center justify-center font-bold">
            Дэлгэрэнгүй
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
