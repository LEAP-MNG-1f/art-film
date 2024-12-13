import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
const MovieBody = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[1040px] flex">
        <div className="flex justify-center pb-10 px-4 lg:px-0">
          <div className="w-full lg:w-[800px] flex flex-col gap-4">
            <div className="flex justify-between h-[44px] lg:w-[1040px]">
              <p className="font-bold text-[32px]">КИНО</p>
            </div>

            <div className="w-full">
              <div className="overflow-x-auto lg:overflow-x-hidden">
                <div className="flex lg:flex-col gap-6 lg:gap-4">
                  {[...Array(3)].map((_, index) => (
                    <div
                      key={index}
                      className="w-[869px] h-[222px] flex flex-col gap-4"
                    >
                      <div className="flex gap-2 items-center mt-auto">
                        <div className="w-8 h-8 rounded-full border border-black"></div>
                        <div className="flex flex-col gap-2x">
                          <p className="text-black font-roboto text-[13px] font-normal leading-[12px]">
                            Boldoo Batbayar
                          </p>
                          <p className="text-[rgba(0,0,0,0.60)] text-[12px] font-normal leading-[12px]">
                            3 өдрийн өмнө
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-6">
                        <img
                          src="https://dx35vtwkllhj9.cloudfront.net/universalstudios/wicked/images/regions/us/share.jpg"
                          alt=""
                          className="w-[325px] h-[174px] rounded-lg object-cover"
                        />
                        <div className="flex flex-col gap-6">
                          <div className="flex flex-col gap-3">
                            <div>
                              <p className="text-black font-[Helvetica Neue] text-[24px] font-bold leading-[24px]">
                                PersonaSilencehasnowings (1966)
                              </p>
                              <p className="text-[rgba(0,0,0,0.60)] font-[Helvetica Neue] text-[16px] font-bold leading-[24px]">
                                Найруулагч: Казүо Куроки
                              </p>
                            </div>
                            <p className="overflow-hidden text-[rgba(0, 0, 0, 0.80)] text-ellipsis font-[Roboto] text-[14px] font-normal leading-[18px]">
                              Kaзүо Куроки найруулагч Японы баримтат кино урлагт
                              дорвитой хувь нэмэр, өөрчлөлтийг авчирсан нэгэн
                              билээ. "Silence has no wings" нь найруулагчийн
                              анхны бүрэнf хэмжээний кино бөгөөд аль нэг жанрт
                              харьяалахад тун хэцүү.
                            </p>
                          </div>

                          <div className="flex gap-1 items-center mt-2">
                            <p className="text-black font-[SF Pro Display] text-[15px] font-normal leading-[18px]">
                              Цааш унших
                            </p>

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

        <div className=" w-[240px] flex justify-center pt-[60px]">
          <div className="w-[224px] border border-l-[##3F3F3F] border-t-white border-b-white border-r-white flex flex-col gap-4 px-4">
            <p className="text-[20px] font-bold">Жанр</p>
            <p className="h-8 border border-t-white border-b-[#3F3F3F]  border-r-white border-l-white ">
              Бүгд
            </p>
            <p className="h-8 border border-t-white border-b-[#3F3F3F]  border-r-white border-l-white ">
              Драм
            </p>
            <p className="h-8 border border-t-white border-black  border-r-white border-l-white ">
              Инээдмийн
            </p>
            <p className="h-8 border border-t-white border-black  border-r-white border-l-white ">
              Баримтат
            </p>
            <p className="h-8 border border-t-white border-black  border-r-white border-l-white ">
              Богино хэмжээний
            </p>
            <p className="h-8 border border-t-white border-black  border-r-white border-l-white ">
              Романс
            </p>
            <p className="h-8 border border-t-white border-black  border-r-white border-l-white ">
              Авангард
            </p>
            <p className="h-8 border border-t-white border-black  border-r-white border-l-white ">
              Гэмт хэрэг
            </p>
            <p className="h-8 border border-t-white border-black  border-r-white border-l-white ">
              Түүхэн
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieBody;
