type StatType = {
  title: string;
  util: string;
  contentnumber: number;
  viewnumber: number;
  likenumber: number;
  commentnumber: number;
};

export const StatsCard = (props: StatType) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="text-2xl">{props.title}</div>
      <div className="flex bg-slate-900 h-[300] text-white">
        <div className="text-orange-400 text-[300px] leading-none px-2">
          {props.util}
        </div>
        <div className="flex w-full h-full bg-orange-400">
          <div className="flex flex-col w-full gap-7 text-xl text-slate-900 mt-[40] font-medium pl-2 pr-5">
            <div className="flex bg-orange-200 px-5 py-1 rounded-xl justify-between ">
              <div>Нийт контент:</div>
              <div className="text-bold">{props.contentnumber}</div>
            </div>
            <div className="flex bg-orange-200 px-5 py-1 rounded-xl justify-between">
              <div>Нийт үзэлт:</div>
              <div>{props.viewnumber}</div>
            </div>
            <div className="flex bg-orange-200 px-5 py-1 rounded-xl justify-between">
              <div>Like:</div>
              <div>{props.likenumber}</div>
            </div>
            <div className="flex bg-orange-200 px-5 py-1 rounded-xl justify-between">
              <div>Comments:</div>
              <div>{props.commentnumber}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
