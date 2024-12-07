import React from "react";

const PostCart = () => {
  return (
    <div className="w-[325px] h-[462px] flex flex-col gap-[13px] rounded-lg hover:shadow-lg px-2 py-2 border border-inset">
      <img
        src="https://dx35vtwkllhj9.cloudfront.net/universalstudios/wicked/images/regions/us/share.jpg"
        alt=""
        className="w-[325px] h-[174px] rounded-lg  px-2 py-2"
      />
      <div>
        <p className="text-[20px] font-bold">
          БОЛДООГИЙН САНАЛ БОЛГОХ ШИЛДЭГ 15-Н КИНО
        </p>
        <p className="text-[14px] ">
          Lorem ipsum dolor sit amet consectetur. Est tincidunt ornare orci sed
          pretium habitant lacus. Vulputate sem turpis est amet porttitor
          volutpat vitae quam. Vel luctus semper enim facilisis sit velit nibh
          sed urna. Donec quam ut ante adipiscing lorem eleifend sem purus diam.
          Lorem ultrices amet porttitor elementum elementum magnis purus enim.
        </p>
      </div>
      <div className="flex gap-2 items-center">
        <div className="w-5 h-5 rounded-[50%] border border-black"></div>
        <div className="flex gap-2">
          <div>Boldoo Batbayar</div>
          <div>| 2024.10.29</div>
        </div>
      </div>
    </div>
  );
};

export default PostCart;
