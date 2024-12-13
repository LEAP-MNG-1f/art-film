import React from "react";
import { BsChevronRight } from "react-icons/bs";
const DreamersBody = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[1040px]">
        <p className="text-black font-['Helvetica Neue'] text-[32px] font-bold leading-[24px] pb-8">
          {" "}
          DREAMERS’ DAY
        </p>
        <div className="w-[1040px] h-[774px] flex flex-col gap-4">
          <img
            className="w-[1044px] h-[502px] rounded-lg"
            src="Images/Rectangle.png"
            alt=""
          />
          <div>
            <div className="flex justify-between lg:gap-4">
              {[...Array(3)].map((_, index) => (
                <img
                  key={index}
                  className="w-[318px] h-[184px] rounded-lg"
                  src="Images/Rectangle.png"
                  alt=""
                />
              ))}
            </div>
          </div>
          <div>
            <p className=" flex items-center gap-1 justify-end text-[#09090B] font-roboto text-[14px] font-normal leading-[24px]">
              ЦААШ ХАРАХ
              <BsChevronRight className="text-[#F8941E]" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamersBody;
