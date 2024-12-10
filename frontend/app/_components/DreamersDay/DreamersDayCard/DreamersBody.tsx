import React from "react";

const DreamersBody = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[1040px]">
        <p className="text-[32px] font-bold text-start pb-6"> DREAMERS’ DAY</p>
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
            <p className="text-end">ЦААШ ХАРАХ </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamersBody;
