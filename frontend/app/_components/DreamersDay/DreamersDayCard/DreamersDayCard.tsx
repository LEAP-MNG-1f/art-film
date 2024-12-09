import Link from "next/link";
import React from "react";

const DreamersDayCard = () => {
  return (
    <div className="lg:flex lg:justify-center">
      <div className="lg:w-screen h-auto relative">
        {/* Дээд хар div */}
        <div className="h-[150px] lg:h-[253px] bg-black z-0 shadow-black shadow-lg"></div>

        {/* Гол контент */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col px-4 lg:pb-6 pb-4 gap-6 w-full lg:w-[1040px]">
          {/* Гарчиг ба линк */}
          <div className="flex justify-between items-center">
            <p className="font-bold text-white text-lg lg:text-xl">
              DREAMERS’ DAY
            </p>
            <Link
              href="/dreamers-day"
              className="font-bold text-white text-sm lg:text-base"
            >
              БҮГДИЙГ ХАРАХ
            </Link>
          </div>

          {/* Mobile: Хажуу тийш гүвэх, Desktop: Эхний layout */}
          <div className="lg:flex lg:gap-8">
            {/* Mobile layout - хажуу тийш гүвэх */}
            <div className="flex gap-4 overflow-x-scroll scrollbar-hide lg:hidden">
              <img
                className="h-[150px] w-[250px] rounded-lg object-cover flex-shrink-0"
                src="https://dx35vtwkllhj9.cloudfront.net/universalstudios/wicked/images/regions/us/share.jpg"
                alt="Main Image"
              />
              <img
                className="h-[150px] w-[250px] rounded-lg object-cover flex-shrink-0"
                src="https://dx35vtwkllhj9.cloudfront.net/universalstudios/wicked/images/regions/us/share.jpg"
                alt="Small Image 1"
              />
              <img
                className="h-[150px] w-[250px] rounded-lg object-cover flex-shrink-0"
                src="https://dx35vtwkllhj9.cloudfront.net/universalstudios/wicked/images/regions/us/share.jpg"
                alt="Small Image 2"
              />
            </div>

            {/* Desktop layout - эхний байрлал */}
            <div className="hidden lg:flex lg:gap-8">
              {/* Том зураг */}
              <img
                className="h-[375px] w-[688px] rounded-lg object-cover"
                src="https://dx35vtwkllhj9.cloudfront.net/universalstudios/wicked/images/regions/us/share.jpg"
                alt="Main Image"
              />

              {/* Жижиг зурагнууд */}
              <div className="flex flex-col gap-3">
                <img
                  className="h-[184px] w-[318px] rounded-lg object-cover"
                  src="https://dx35vtwkllhj9.cloudfront.net/universalstudios/wicked/images/regions/us/share.jpg"
                  alt="Small Image 1"
                />
                <img
                  className="h-[184px] w-[318px] rounded-lg object-cover"
                  src="https://dx35vtwkllhj9.cloudfront.net/universalstudios/wicked/images/regions/us/share.jpg"
                  alt="Small Image 2"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Доод цагаан div */}
        <div className="h-[150px] lg:h-[253px] bg-white z-0"></div>
      </div>
    </div>
  );
};

export default DreamersDayCard;
