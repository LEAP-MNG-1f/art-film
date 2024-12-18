import React from "react";
import { FaFireFlameCurved } from "react-icons/fa6";
const Recommend = () => {
  return (
    <div className="flex justify-center w-full px-4 lg:px-0 pb-10">
      <div className="lg:w-[1180px] flex flex-col gap-4">
        <div className="flex justify-between items-center h-[44px] ">
          <p className="text-[#000] text-center font-roboto text-[18px] font-semibold leading-[32px] flex items-center gap-2">
            <FaFireFlameCurved />
            Таньд санал болгох.
          </p>
        </div>
        <div className="w-full">
          <div className="flex gap-6 lg:gap-4">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="flex flex-col gap-[13px] rounded-lg shadow-xl transition-transform transform hover:scale-105 h-[404px] lg:w-[400px]"
              >
                <img
                  src="https://dx35vtwkllhj9.cloudfront.net/universalstudios/wicked/images/regions/us/share.jpg"
                  alt=""
                  className="w-full h-[183px] rounded-lg object-cover"
                />
                <div className="p-4 gap-2 flex flex-col">
                  <p className="text-[rgba(0,0,0,0.45)] font-roboto text-[14px] font-normal leading-[140%]">
                    2 өдрийн өмнө
                  </p>
                  <div>
                    <p className="text-black font-helvetica text-[18px] font-bold leading-[133.333%]">
                      БОЛДООГИЙН САНАЛ БОЛ ГОХ ШИЛДЭГ 15-Н КИНО
                    </p>
                    <p className="overflow-hidden text-[rgba(0,0,0,0.85)] text-ellipsis  font-roboto text-[14px] font-normal leading-[140%] ">
                      Lorem ipsum dolor sit amet consectetur. Est tincidunt
                      ornare orci sed pretium habitant lacus. Vulputate sem
                      turpis est amet porttitor volutpat vitae quam.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommend;
