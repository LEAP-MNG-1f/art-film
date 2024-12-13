import React from "react";

const ArticleBody = () => {
  return (
    <div className="flex justify-center px-4 lg:px-0 py-10">
      <div className="w-full lg:w-[1040px] flex flex-col gap-4">
        <div className="flex justify-between items-center h-[44px] ">
          <p className="font-bold text-[32px]">Бүх нийтлэл</p>
        </div>

        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="flex flex-col gap-[13px] rounded-lg hover:shadow-lg h-[404px]   w-[336px] lg:w-[337px]"
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
                      БОЛДООГИЙН.САНАЛ.БОЛ ГОХ ШИЛДЭГ 15-Н КИНО
                    </p>
                    <p className="overflow-hidden text-[rgba(0,0,0,0.85)] text-ellipsis font-roboto text-[14px] font-normal leading-[140%] ">
                      Lorem ipsum dolor sit amet consectetur. Est tincidunt
                      ornare orci sed pretium habitant lacus. Vulputate sem
                      turpis est amet porttitor volutpat vitae quam.
                    </p>
                  </div>
                  <div className="flex gap-2 items-center mt-auto">
                    <div className="w-7 h-7 rounded-full border border-black"></div>
                    <p className="text-black font-roboto text-[12px] font-normal leading-[140%]">
                      Boldoo Batbayar
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-end">
          <p>ЦААШ ХАРАХ </p>
        </div>
      </div>
    </div>
  );
};

export default ArticleBody;
