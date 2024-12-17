"use client";
import React, { useState, useEffect } from "react";
import MainHeader from "./MainHeader";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "/Images/4kphoto1.jpg",
    "/Images/4kphoto4.jpeg",
    "/Images/4kphoto3.jpeg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative h-[900px] w-screen overflow-hidden flex justify-center">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-no-repeat transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${slide})` }}
          ></div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent "></div>
      <div className="relative z-10">
        <MainHeader />
        <div className="pt-[258px] pl-6">
          <div>
            <p className="text-white font-roboto-condensed text-[96px] font-extrabold leading-[100px]">
              ONLY RIVER
            </p>
            <p className="text-white font-roboto-condensed text-[96px] font-extrabold leading-[100px]">
              THE FLOWS
            </p>
          </div>
          <div className="w-[147px] h-[49px]  backdrop-blur-sm text-white rounded-md flex items-center justify-center font-bold">
            Дэлгэрэнгүй
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
