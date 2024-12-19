import Footer from "../HomePage/Footer";
import React from "react";
import Header from "./Header";
import { Article } from "@/app/articles/[id]/page";

const ArticleDetail = ({ articleData }: { articleData: Article | null }) => {
  if (!articleData) {
    return <div>Article not found!</div>;
  }

  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="max-w-[1180px] flex items-center flex-col">
        <div className="max-w-[1180px]">
          <p className="text-black text-center font-['Helvetica Neue'] text-4xl font-bold leading-[42px] pb-[32px]">
            {articleData?.title}
          </p>
          <div className="p-8 border border-t-[#6B6B6B] border-r-white border-l-white border-b-white flex flex-col gap-8">
            <p>
              “Хүрд” кино нь амиа хорлосон хүмүүсийн ар гэрийнхэн болон амиа
              хорлохоор оролдож байсан хүмүүстэй хийсэн ярианаас бүтжээ. Гэр
              бүлийн хүчирхийлэл, ажилгүйдэл, ядуурал, ялгаварлан гадуурхалт,
              итгэл найдварын мухардал, хувь хүний үнэ цэнийн эрэмбийн гажуудал
              гээд амиа хорлолтод хөтөлдөг олон хүчин зүйлс, нөхцөл байдлын
              тухай үзэгч бид киноны туршид олж мэдэх юм.
            </p>
            {articleData.image && (
              <img
                src={articleData.image}
                alt={articleData.title || "Movie Poster"}
                className="movie-poster border rounded-xl"
              />
            )}
            <p>{articleData?.content}</p>
            {articleData.image && (
              <img
                src={articleData.image}
                alt={articleData.title || "Movie Poster"}
                className="movie-poster border rounded-xl"
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
      <div className="w-full h-96 border border-red-400">code here</div>
      <Footer />
    </div>
  );
};
export default ArticleDetail;
