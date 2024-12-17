import React from "react";

const VerySoon = () => {
  return (
    <div className="flex justify-center pb-11">
      <div className="w-[1221px] flex flex-col gap-6 ">
        <p className=" flex justify-start text-[#000] text-center font-['Roboto'] text-[24px] font-semibold leading-[32px]">
          Тун удахгүй
        </p>
        <div className="grid grid-cols-1  lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, soon) => (
            <div key={soon} className="">
              <img
                src="https://dx35vtwkllhj9.cloudfront.net/universalstudios/wicked/images/regions/us/share.jpg"
                alt=""
                className="w-[270px] h-[156px] rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerySoon;
