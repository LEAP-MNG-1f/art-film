"use client";
import React, { useEffect, useState } from "react";

const DreamersDayCard = () => {
  // State to track the remaining time
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>(() => calculateTimeLeft());

  // Function to calculate remaining time to a specific future moment
  function calculateTimeLeft() {
    // Create a target date exactly 4 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 4);

    // Set the time to exactly midnight (00:00:00)
    targetDate.setHours(0, 0, 0, 0);

    const difference = targetDate.getTime() - new Date().getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  // Effect to update countdown every second
  useEffect(() => {
    // Exit if time is already up
    if (
      timeLeft.days === 0 &&
      timeLeft.hours === 0 &&
      timeLeft.minutes === 0 &&
      timeLeft.seconds === 0
    )
      return;

    // Set up interval to update countdown
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clean up interval
    return () => clearInterval(timer);
  }, []);

  // Render countdown or "Time's up" message
  const renderCountdown = () => {
    const { days, hours, minutes, seconds } = timeLeft;

    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
      return (
        <div className="bg-red-500 text-white px-4 py-2 rounded-lg text-xl font-bold">
          Цаг дууссан!
        </div>
      );
    }

    return (
      <div className="flex items-center  gap-4">
        <div className="flex flex-col items-center border border-white px-2 rounded-lg backdrop-blur-md">
          <div className="text-4xl font-semibold text-white">{days}</div>
          <div className="text-lg text-white">өдөр</div>
        </div>
        <div className="text-4xl font-semibold text-white">:</div>
        <div className="flex flex-col items-center border border-white px-2 rounded-lg backdrop-blur-md">
          <div className="text-4xl font-semibold text-white">{hours}</div>
          <div className="text-lg text-white">цаг</div>
        </div>
        <div className="text-4xl font-semibold text-white">:</div>
        <div className="flex flex-col items-center border border-white px-2 rounded-lg backdrop-blur-md">
          <div className="text-4xl font-semibold text-white">{minutes}</div>
          <div className="text-lg text-white">минут</div>
        </div>
        <div className="text-4xl font-semibold text-white">:</div>
        <div className="flex flex-col items-center border border-white px-2 rounded-lg backdrop-blur-md">
          <div className="text-4xl font-semibold text-white">{seconds}</div>
          <div className="text-lg text-white">секунд</div>
        </div>
      </div>
    );
  };

  return (
    <div className="lg:flex lg:justify-center">
      <div className="w-full h-auto lg:w-screen relative">
        <div className="h-[318px] bg-black z-0 shadow-black shadow-lg"></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pt-60 w-[1180px] h-[558px] rounded-lg bg-cover bg-center flex justify-center items-end pb-6"
          style={{
            backgroundImage: `url('https://images4.alphacoders.com/133/1336451.jpg')`,
          }}
        >
          <div className="w-[1141px] h-[218px] flex flex-col gap-2">
            <div className="flex flex-col gap-4">
              <div className="w-[103px] h-[28px] bg-[#F8941E] rounded-md flex items-center justify-center text-white font-['Work_Sans'] text-[14px] font-medium leading-[20px]">
                Movie event
              </div>
              <p className="text-white font-['Helvetica_Neue'] text-[48px] font-bold leading-[52px] w-[700px]">
                Dreamers' day #396: Oldboy Special Screening
              </p>
            </div>
            {renderCountdown()}
          </div>
        </div>
      </div>
      <div className="h-[150px] lg:h-[253px] bg-white z-0"></div>
    </div>
  );
};

export default DreamersDayCard;
