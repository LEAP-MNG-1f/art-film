import Link from "next/link";
import React from "react";
import { BsChevronRight } from "react-icons/bs";
function ArticleCard() {
  return (
    <div className="flex justify-center px-4 lg:px-0">
      <div className="w-full lg:w-[1221px] flex flex-col gap-4">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-[16px] rounded-lg p-4 border border-[#E8E8EA] h-auto w-full"
                >
                  <img
                    src="https://dx35vtwkllhj9.cloudfront.net/universalstudios/wicked/images/regions/us/share.jpg"
                    alt=""
                    className="w-full h-[240px] rounded-lg object-cover"
                  />
                  <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-4">
                      <div className="w-[73px] h-[28px] bg-[#F8941E0D] rounded-md flex items-center justify-center text-[#F8941E] font-['Helvetica Neue'] text-[14px] font-bold leading-[20px]">
                        Онцлох
                      </div>
                      <p className="text-[#181A2A] font-['Helvetica Neue'] text-[24px] font-bold leading-[28px]">
                        The Influence of Digital Innovations in the Workplace:
                        Transforming How We Work
                      </p>
                    </div>
                    <div className="flex gap-2 items-center mt-auto">
                      <div className="w-7 h-7 rounded-full border border-black"></div>
                      <p className="text-black font-roboto text-[12px] font-normal leading-[140%]">
                        Boldoo Batbayar
                      </p>
                      <p className="text-[rgba(0,0,0,0.45)] font-roboto text-[14px] font-normal leading-[140%]">
                        2 өдрийн өмнө
                      </p>
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
