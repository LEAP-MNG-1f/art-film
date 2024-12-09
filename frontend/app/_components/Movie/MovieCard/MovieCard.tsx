import Link from "next/link";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const MovieCard = () => {
  return (
    <div className="flex justify-center">
      <div className="lg:w-[1040px] flex flex-col gap-4">
        <div className="flex justify-between h-[44px] lg:w-[1040px] border border-t-[#00000080] border-t-2 items-center border-l-white border-b-white border-r-white">
          <p className="font-bold">КИНО</p>

          <Link href="/movies" className="font-bold">
            БҮГДИЙГ ХАРАХ
          </Link>
        </div>

        <div className="lg:flex lg:flex-col lg:justify-center flex flex-col items-center gap-8">
          <div className="w-[1040px] h-[174px] flex gap-[13px] rounded-lg hover:shadow-lg  px-2  border border-inset">
            <img
              src="https://dx35vtwkllhj9.cloudfront.net/universalstudios/wicked/images/regions/us/share.jpg"
              alt=""
              className="w-[325px] h-[174px] rounded-lg  px-2 py-2"
            />
            <div className="flex flex-col">
              <p className="text-[24px] font-bold">
                PersonaSilence has no wings (1966)
              </p>
              <p className="text-black/60 font-bold">
                Найруулагч: Казүо Куроки{" "}
              </p>
              <p className="text-[14px] font-bold">
                Kaзүо Куроки найруулагч Японы баримтат кино урлагт дорвитой хувь
                нэмэр, өөрчлөлтийг авчирсан нэгэн билээ. "Silence has no wings"
                нь найруулагчийн анхны бүрэн хэмжээний кино бөгөөд аль нэг жанрт
                харьяалахад тун хэцүү. Олон жанрыг өөртөө багтаасан биш, зүгээр
                л алинд нь ч баригдаагүй кино гэхэд болно.
              </p>
              <div className="flex gap-1 items-center">
                <p>Цааш унших</p>
                <BsArrowRightShort className="w-[25px] h-[20px] pt-[2px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
