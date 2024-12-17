import React from "react";
import Link from "next/link";

type Article = {
  _id: string;
  title: string;
  imageUrl: string;
};

const ArticleBody = ({
  articlesData,
  isLoading,
  limit = articlesData.length,
}: {
  articlesData: Article[];
  isLoading: boolean;
  limit?: number;
}) => {
  const skeletonCards = new Array(6).fill(null);

  return (
    <div className="flex justify-center px-4 lg:px-0">
      <div className="max-w-[1180px] flex flex-col gap-4">
        <div className="flex justify-between items-center h-[44px]">
          <p className="font-bold text-[32px]">Бүх нийтлэл</p>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {isLoading
              ? skeletonCards.map((_, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-[16px] rounded-lg p-4 border border-[#E8E8EA] h-auto w-full"
                  >
                    <div className="w-full h-[240px] bg-gray-300 rounded-lg"></div>
                  </div>
                ))
              : articlesData.slice(0, limit).map((data) => (
                  <div
                    key={data?._id}
                    className="flex flex-col gap-4 rounded-lg p-4 border border-[#E8E8EA] h-auto w-full"
                  >
                    <img
                      src={data?.imageUrl}
                      width="360"
                      height="200"
                      alt=""
                      className="w-full h-[240px] rounded-lg object-cover"
                    />
                    <Link
                      href={`/articles/${data?._id}`}
                      className="group p-5 grid z-10"
                    >
                      <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-4">
                          <div className="w-[73px] h-[28px] bg-[#F8941E0D] rounded-md flex items-center justify-center text-[#F8941E] font-['Helvetica Neue'] text-[14px] font-bold leading-[20px]">
                            Онцлох
                          </div>
                          <p className="text-[#181A2A] font-['Helvetica Neue'] text-[24px] font-bold leading-[28px]">
                            {data?.title}
                          </p>
                        </div>
                        <div className="flex gap-2 items-center mt-auto">
                          <p className="text-[rgba(0,0,0,0.45)] font-roboto text-[14px] font-normal leading-[140%]">
                            2 өдрийн өмнө
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
          </div>
        </div>
      </div>
      {/* <div className="text-end">
        <p>ЦААШ ХАРАХ </p>
      </div> */}
    </div>
  );
};

export default ArticleBody;
