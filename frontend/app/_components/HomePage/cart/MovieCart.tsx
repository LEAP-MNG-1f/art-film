import React from "react";

const MovieCart = () => {
  return (
    <div className="w-[325px] h-[285px] flex flex-col gap-[13px] rounded-lg hover:shadow-lg  px-2 py-2 border border-inset">
      <img
        src="https://dx35vtwkllhj9.cloudfront.net/universalstudios/wicked/images/regions/us/share.jpg"
        alt=""
        className="w-[325px] h-[174px] rounded-lg  px-2 py-2"
      />
      <div className="flex flex-col">
        <p className="text-[16px] font-bold">Submarine (2010)</p>
        <p className="text-[14px]">
          15-year-old Oliver Tate has two objectives: To lose his virginity
          before his next birthday, and to...
        </p>
      </div>
    </div>
  );
};

export default MovieCart;
