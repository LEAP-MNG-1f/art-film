import Link from "next/link";
import React from "react";
import { BsChevronRight } from "react-icons/bs";
function ArticleCard() {
  return (
    <div className="flex justify-center px-4 lg:px-0">
      <div className="w-full lg:w-[1040px] flex flex-col gap-4">
        <div className="flex justify-between items-center h-[44px]">
          <p className="text-black font-roboto-condensed text-[32px] font-semibold leading-[24px]">
            НИЙТЛЭЛ
          </p>
          <Link href="/blogs" className="font-bold flex gap-1 items-center">
            <p className="text-black font-roboto text-[14px] font-normal leading-[24px]">
           
              БҮГДИЙГ ХАРАХ
            </p>
            <div>
              <BsChevronRight className="text-[#F8941E]" />
            </div>
          </Link>
        </div>

        <div className="w-full">
          <div className="overflow-x-auto">
            <div className="flex gap-6 lg:gap-4">
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-[13px] rounded-lg hover:shadow-lg   w-[336px] lg:w-[350px]" 
                >
                  <img
                    src="https://dx35vtwkllhj9.cloudfront.net/universalstudios/wicked/images/regions/us/share.jpg"
                    alt=""
                    className="w-full h-[174px] rounded-lg object-cover"
                  />
                  <div>
                    <p className="text-[20px] font-bold mb-2">
                      БОЛДООГИЙН.САНАЛ.БОЛ ГОХ ШИЛДЭГ 15-Н КИНО
                    </p>
                    <p className="text-[14px] text-gray-600 line-clamp-3 ">
                      Lorem ipsum dolor sit amet consectetur. Est tincidunt
                      ornare orci sed pretium habitant lacus. Vulputate sem
                      turpis est amet porttitor volutpat vitae quam. Vel luctus
                      semper enim facilisis sit velit nibh sed urna.
                    </p>
                  </div>
                  <div className="flex gap-2 items-center mt-auto">
                    <div className="w-5 h-5 rounded-full border border-black"></div>
                    <div className="flex gap-2 text-sm text-gray-700">
                      <div>Boldoo Batbayar</div>
                      <div>| 2024.10.29</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
