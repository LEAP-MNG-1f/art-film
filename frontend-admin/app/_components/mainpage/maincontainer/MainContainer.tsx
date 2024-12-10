export const MainContainer = () => {
  return (
    <div className="w-full">
      <div></div>
      <div className="grid grid-cols-3 gap-16 px-5 pt-5">
        <div className="flex flex-col gap-5">
          <div className="text-2xl">Dreamer's Day</div>
          <div className="flex bg-slate-900 h-[300] text-white">
            <div className="text-orange-400 text-[300px] leading-none px-2">
              A
            </div>
            <div className="flex w-full h-full bg-orange-400"></div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="text-2xl">Movies</div>
          <div className="flex bg-slate-900 h-[300] text-white">
            <div className="text-orange-400 text-[300px] leading-none px-2">
              R
            </div>
            <div className="flex w-full h-full bg-orange-400"></div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="text-2xl">Feedback</div>
          <div className="flex bg-slate-900 h-[300] text-white">
            <div className="text-orange-400 text-[300px] leading-none px-2">
              T
            </div>
            <div className="flex w-full h-full bg-orange-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
