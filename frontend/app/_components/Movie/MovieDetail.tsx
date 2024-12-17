import React from "react";
import Footer from "../HomePage/Footer";
import { FaStar } from "react-icons/fa";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";
import Header from "../Article/Header";

type Movie = {
  _id: string;
  title: string;
  releaseYear: number;
  genre: string[];
  writer: string[];
  director: string[];
  rating: number;
  trailerUrl?: string;
  imageUrl: string;
  relatedMovies: string[];
  createdAt: Date;
};

const MovieDetail = ({ movieData }: { movieData: Movie | null }) => {
  if (!movieData) {
    return <div>Movie not found!</div>;
  }

  return (
    <div className="movie-detail-container flex flex-col justify-center">
      <Header />
      <div className="flex  items-center flex-col">
        <div className="w-[1180px] ">
          <div className="flex flex-col gap-2 pt-10">
            <div className="flex gap-[17px]">
              <p className="text-[#F8941E] font-['Helvetica Neue'] text-[14px] font-bold leading-[20px] w-[93px] h-[22px] bg-[#F8941E0D] flex items-center justify-center">
                Авангард
              </p>
              <p className="text-[#F8941E] font-['Helvetica Neue'] text-[14px] font-bold leading-[20px] w-[93px] h-[22px] bg-[#F8941E0D] flex items-center justify-center">
                Авангард
              </p>
              <p className="text-[#F8941E] font-['Helvetica Neue'] text-[14px] font-bold leading-[20px] w-[93px] h-[22px] bg-[#F8941E0D] flex items-center justify-center">
                Авангард
              </p>
            </div>
            <div className="flex justify-between">
              <div>
                <p className="text-[#000] font-['Helvetica Neue'] text-[42px] font-bold leading-[47px] w-[502px]">
                  The Thing About The Thing
                </p>
                <div className="flex">
                  <p className="text-[rgba(0,0,0,0.45)] font-['Roboto'] text-[16px] font-normal leading-[32px]">
                    1982
                  </p>
                  <p className="text-[rgba(0,0,0,0.45)] font-['Roboto'] text-[16px] font-normal leading-[32px] flex justify-center items-center">
                    .
                  </p>
                  <p className="text-[rgba(0,0,0,0.45)] font-['Roboto'] text-[16px] font-normal leading-[32px]">
                    1цаг 45мин
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex gap-6">
                  <div>
                    <p className="text-[rgba(0,0,0,0.45)] font-['Roboto'] text-[16px] font-normal leading-[32px]">
                      IMDb RATING
                    </p>
                    <div>
                      <FaStar className="text-[#F5C937] w-6 h-6" />
                      <p className="text-[#000] font-['Roboto'] text-[18px] font-normal leading-[32px]">
                        asddasd
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[rgba(0,0,0,0.45)] font-['Roboto'] text-[16px] font-normal leading-[32px]">
                      POPULARITY
                    </p>
                    <div>
                      <HiOutlineArrowTrendingUp className="w-6 h-6" />
                      <p className="text-[#000] font-['Roboto'] text-[18px] font-normal leading-[32px]">
                        sadsdadsdd
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[#000] font-['Roboto'] text-[15px] font-medium leading-[32px]">
                    Зохиолч: Шүнжи Ивай
                  </p>
                  <p className="text-[#000] font-['Roboto'] text-[15px] font-medium leading-[32px]">
                    Найруулагч: Шүнжи Ивай
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-8 border border-t-[#00000073] border-r-white border-l-white border-b-white flex flex-col gap-8 ">
            <p>
              “Хүрд” кино нь амиа хорлосон хүмүүсийн ар гэрийнхэн болон амиа
              хорлохоор оролдож байсан хүмүүстэй хийсэн ярианаас бүтжээ. Гэр
              бүлийн хүчирхийлэл, ажилгүйдэл, ядуурал, ялгаварлан гадуурхалт,
              итгэл найдварын мухардал, хувь хүний үнэ цэнийн эрэмбийн гажуудал
              гээд амиа хорлолтод хөтөлдөг олон хүчин зүйлс, нөхцөл байдлын
              тухай үзэгч бид киноны туршид олж мэдэх юм.
            </p>
            {movieData.imageUrl && (
              <img
                src={movieData.imageUrl}
                alt={movieData.title || "Movie Poster"}
                className="movie-poster"
              />
            )}
            <p>
              Саяхныг хүртэл баримтат киног баримтат нэвтрүүлгээс ялгаж байдаг
              уран сайхны шийдэл, кино хэл гэх зүйлс манай баримтат кинонуудад
              дутагддаг байжээ. Харин “Хүрд” киноны хувьд баримтат киноны
              монолог ихтэй, хэт хатуу хөндий байдлыг эвдэж чадсан, амьд мэдрэг
              бүтээл болсон байлаа. Угаас ийм “амьд” үзэл санааг хүргэж буй кино
              амьд мэдрэг байхгүй гээд яах билээ? Ухарч буй цаг, овооны дэргэд
              аажим үзэгдэх хүмүүсийн царай төрх, эгэл бор ахуйн зураглал
              зэргээс эхсүүлээд үзэгчтэйгээ гүн гүнзгий харилцаа үүсгэх шийдлээ
              маш гоё олжээ. Мөн хамгийн авууштай нэг зүйл нь, кино багийнхан
              дүрүүдийнхээ хувийн орон зайг маш сайн хүндэтгэсэн явдал байв.
              Амиа хорлолтыг биеэр гэрчилж туулсан хүмүүсийн чин үнэн мэдрэмж
              бүхий яриа л сонстож байлаа. Харин тэдний амьдралыг хэт их ухаж
              төнхсөн, хэрэгцээгүй шалдар булдар асуултаар булсан зүйл байгаагүй
              нь их таалагдлаа. Уран бүтээлчид нь киноны дүрүүдээ тас
              хамгаалаад, хэрийн үзэгчид шүүн чичлэх боломж өгсөнгүй, үүгээрээ
              маш эмзэг сэдвийг туйлын ёс зүйтэй хөнджээ гэж хэлмээр байна.
              Мэргэжлийн сэтгүүлч хүн зохиож, найруулсны үр дүн биз ээ.
              Хүмүүсийн амиа хорлох нөхцөл байдал, шалтгаан, хүчин зүйлсийг нээн
              илрүүлэх явцад нийгэм дэх хамгийн ужгирсан асуудлуудын мөн чанар
              давхар нээгдэж байгааг “Хүрд” киноноос анзаарч болох юм. Нийгэмд
              дангаар оршдог асуудал гэж байхгүй. Нийгмийн асуудлууд бүгд өөр
              хоорондоо холбоотой. Эдийн засаг, нийгэм хөрвөөж хувьсах бүрт хэн
              нэгэн хоолноосоо салж ядуурал руу унана, ядуурлаас ялгаварлан
              гадуурхалт болоод итгэл найдварын мухардал, мухардсан итгэл
              найдвараас архидалт, архидалтаас гэр бүлийн дотоод асуудал, гэр
              бүлийн асуудлаас хувь хүний сэтгэлзүйн асуудал, сэтгэлзүйн
              асуудлаас амиа хорлолт гэхчилэн нийгмийн асуудлууд өөр хоорондоо
              тас сугадалцаад тамын тойрог шиг эргэлдэж байдаг. Амиа хорлолт ч
              бас дангаар оршдог асуудал биш. Нийгмийн болоод хүний хувийн
              амьдралын бусад асуудлуудтай тас зууралдсан байгааг “Хүрд”
              киноноос харж болох юм.
            </p>
            {movieData.imageUrl && (
              <img
                src={movieData.imageUrl}
                alt={movieData.title || "Movie Poster"}
                className="movie-poster"
              />
            )}
            <div className="flex flex-col gap-4">
              <p>Does It Mean Anything?</p>
              <p>
                Мэргэжлийн сэтгүүлч хүн зохиож, найруулсны үр дүн биз ээ.
                Хүмүүсийн амиа хорлох нөхцөл байдал, шалтгаан, хүчин зүйлсийг
                нээн илрүүлэх явцад нийгэм дэх хамгийн ужгирсан асуудлуудын мөн
                чанар давхар нээгдэж байгааг “Хүрд” киноноос анзаарч болох юм.
                Нийгэмд дангаар оршдог асуудал гэж байхгүй. Нийгмийн асуудлууд
                бүгд өөр хоорондоо холбоотой. Эдийн засаг, нийгэм хөрвөөж
                хувьсах бүрт хэн нэгэн хоолноосоо салж ядуурал руу унана,
                ядуурлаас ялгаварлан гадуурхалт болоод итгэл найдварын мухардал,
                мухардсан итгэл найдвараас архидалт, архидалтаас гэр бүлийн
                дотоод асуудал, гэр бүлийн асуудлаас хувь хүний сэтгэлзүйн
                асуудал, сэтгэлзүйн асуудлаас амиа хорлолт гэхчилэн нийгмийн
                асуудлууд өөр хоорондоо тас сугадалцаад тамын тойрог шиг
                эргэлдэж байдаг. Амиа хорлолт ч бас дангаар оршдог асуудал биш.
                Нийгмийн болоод хүний хувийн амьдралын бусад асуудлуудтай тас
                зууралдсан байгааг “Хүрд” киноноос харж болох юм.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
     
    </div>
  );
};

export default MovieDetail;
{
}
 /* /* <h1>{movieData.title}</h1>
      {movieData.imageUrl && (
        <img
          src={movieData.imageUrl}
          alt={movieData.title || "Movie Poster"}
          className="movie-poster"
        />
      )}
      <p>Release Year: {movieData.releaseYear || "Unknown"}</p>
      <p>
        Genre:{" "}
        {Array.isArray(movieData.genre)
          ? movieData.genre.join(", ")
          : "No genres"}
      </p>
      <p>
        Director:{" "}
        {Array.isArray(movieData.director)
          ? movieData.director.join(", ")
          : "Unknown director"}
      </p>
      <p>
        Writer:{" "}
        {Array.isArray(movieData.writer)
          ? movieData.writer.join(", ")
          : "Unknown writer"}
      </p>
      <p>Rating: {movieData.rating || "Not rated"}</p> */ 
