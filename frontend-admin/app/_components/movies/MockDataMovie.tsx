type MoviesType = {
  author: string;
  movie: string;
  date: string;
  text: string;
  category: string;
  artist?: string;
};

export const MockDataMovie = (props: MoviesType) => {
  return (
    <div className="grid grid-cols-8 items-center gap-5 text-lg rounded-3xl py-3 border-r-2 bg-orange-100 shadow-xl">
      <div className="flex pl-10 border-slate-500 border-r-2">
        <img width={80} src="/test1.png" alt="" />
      </div>
      <div className="border-slate-500 border-r-2">{props.author}</div>
      <div className="border-slate-500 border-r-2">{props.artist}</div>
      <div className="border-slate-500 border-r-2">{props.date}</div>
      <div className="border-slate-500 border-r-2">{props.category}</div>
      <div className="border-slate-500 border-r-2">{props.movie}</div>
      <div className="border-slate-500 border-r-2">{props.text}</div>
      <div className="flex justify-center gap-2 font-semibold">
        <button className="hover:text-orange-400">Edit</button>
        <div>/</div>
        <button className="hover:text-red-600">Delete</button>
      </div>
    </div>
  );
};
