import { MainStatsSection } from "./MainStatsSection";

export const MainContainer = () => {
  return (
    <div className="flex flex-col w-full h-screen bg-orange-50  px-5 ">
      <div className="font-bold text-5xl text-orange-400 border-orange-400 border-b-2">
        Dashboard
      </div>
      <MainStatsSection />
    </div>
  );
};
