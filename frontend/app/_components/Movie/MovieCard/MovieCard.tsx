import Link from "next/link";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

const MovieCard = () => {
  return (
    <div className="flex justify-center pb-10 px-4 lg:px-0">
      <div className="w-full lg:w-[1040px] flex flex-col gap-4">
        <div className="flex justify-between h-[44px] lg:w-[1040px] border border-t-[#00000080] border-t-2 items-center border-l-white border-b-white border-r-white">
          <p className="font-bold">КИНО</p>
          <Link href="/movies" className="flex gap-1 items-center">
            <p className="font-bold"> БҮГДИЙГ ХАРАХ</p>
            <div>
              <BsChevronRight className="text-[#F8941E]" />
            </div>
          </Link>
        </div>

        <div className="w-full">
          <div className="overflow-x-auto lg:overflow-x-hidden">
            <div className="flex lg:flex-col gap-6 lg:gap-4">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <div className="flex gap-2 items-center mt-auto">
                    <div className="w-8 h-8 rounded-full border border-black"></div>
                    <div className="flex flex-col  text-sm text-gray-700">
                      <div>Boldoo Batbayar</div>
                      <div> 2024.10.29</div>
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row gap-[13px] rounded-lg hover:shadow-lg p-4 border border-inset w-[336px] lg:w-[1040px]">
                    <img
                      src="https://dx35vtwkllhj9.cloudfront.net/universalstudios/wicked/images/regions/us/share.jpg"
                      alt=""
                      className="w-full h-[174px] rounded-lg object-cover"
                    />
                    <div>
                      <p className="text-[20px] font-bold mb-2">
                        PersonaSilencehasnowings (1966)
                      </p>
                      <p className="text-black/60 font-bold">
                        Найруулагч: Казүо Куроки
                      </p>
                      <p className="text-[14px] font-bold">
                        Kaзүо Куроки найруулагч Японы баримтат кино урлагт
                        дорвитой хувь нэмэр, өөрчлөлтийг авчирсан нэгэн билээ.
                        "Silence has no wings" нь найруулагчийн анхны бүрэн
                        хэмжээний кино бөгөөд аль нэг жанрт харьяалахад тун
                        хэцүү.
                      </p>
                      <div className="flex gap-1 items-center mt-2">
                        <p>Цааш унших</p>
                        <BsArrowRightShort className="w-[25px] h-[20px] pt-[2px]" />
                      </div>
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
};

export default MovieCard;
