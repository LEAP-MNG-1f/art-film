import React from "react";
import PostCart from "./PostCart";
import Link from "next/link";
const MainPost = () => {
  return (
    <div className="flex justify-center">
      <div className="lg:w-[1040px] flex flex-col gap-4">
        <div className="flex justify-between h-[44px] lg:w-[1040px] border border-t-[#00000080] border-t-2 items-center border-l-white border-b-white border-r-white">
          <p className="font-bold">НИЙТЛЭЛ</p>
          
          
<Link href="/blogs" className="font-bold">
БҮГДИЙГ ХАРАХ
</Link>
        </div>
        <div className="lg:flex lg:flex-row lg:justify-center flex flex-col  items-center gap-8">
          <PostCart />
          <PostCart />
          <PostCart />
        </div>
      </div>
    </div>
  );
};

export default MainPost;
