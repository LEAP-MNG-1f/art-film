import { SearchIcon } from "@/public/Icons/SvgFiles";

export const MoviesHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="text-xl font-semibold">Movies editor</div>
      <div className="flex items-center w-[1200] bg-slate-300 pl-2 rounded-xl">
        <div className="w-8">
          <SearchIcon />
        </div>
        <input
          className="bg-slate-300 px-5 py-[5px] w-full rounded-xl "
          placeholder="Хайх"
          type="search"
          name=""
          id=""
        />
      </div>
      <button className="px-5 py-1 rounded-2xl font-semibold bg-orange-400 text-black hover:bg-slate-900 hover:text-white">
        Create
      </button>
    </div>
  );
};
