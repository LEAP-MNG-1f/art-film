import { ControlPanel } from "../controlpanel/ControlPanel";
import { MainStatsSection } from "./MainStatsSection";
import { Header } from "./Header";

export const MainContainer = () => {
  return (
    <div className="flex">
      <ControlPanel />
      <div className="flex flex-col w-full">
        <Header />
        <div className="">
          <MainStatsSection />
        </div>
      </div>
    </div>
  );
};
