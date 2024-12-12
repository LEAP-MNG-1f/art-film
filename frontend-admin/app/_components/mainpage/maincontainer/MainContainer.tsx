import { ControlPanel } from "../controlpanel/ControlPanel";
import { MainStatsSection } from "./MainStatsSection";
import { Header } from "./Header";

export const MainContainer = () => {
  return (
    <div className="flex w-screen bg-orange-50 ">
      <ControlPanel />
      <div className="flex flex-col w-screen h-screen ml-[370]">
        <Header />
        <div className="px-5 py-5">
          <div className="font-bold mt-[60] text-5xl text-orange-400 border-orange-400 border-b-2">
            Dashboar
          </div>
          <MainStatsSection />
        </div>
      </div>
    </div>
  );
};
