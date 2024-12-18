import Link from "next/link";
import { ButtonCardBO } from "../../utils/ButtonCard";

type StatType = {
  title: string;
  util: string;
  router: string;
  contentnumber: number;
  viewnumber: number;
  likenumber: number;
  commentnumber: number;
};

export const StatsCard = (props: StatType) => {
  return (
    <div className="">
      <Link href={props.router}>
        <button className="w-full transition-transform transform hover:scale-105 hover:shadow-lg">
          <div className="flex bg-slate-900 text-white">
            <div className="-rotate-90 flex justify-center items-center leading-none w-[100px]">
              <p className="text-orange-400 text-5xl leading-none">
                {props.util}
              </p>
            </div>
            <div className="flex w-full h-full bg-orange-400">
              <div className="flex flex-col w-full gap-7 text-xl py-5 text-slate-900 font-medium pl-2 pr-5">
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
        </button>
      </Link>
    </div>
  );
};
