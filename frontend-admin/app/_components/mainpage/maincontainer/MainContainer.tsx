import { ControlPanel } from "../controlpanel/ControlPanel";
import { MainStatsSection } from "./MainStatsSection";
import { Header } from "./Header";

export const MainContainer = () => {
  return (
    <div className="flex w-screen ">
      <ControlPanel />
      <div className="flex flex-col w-screen h-screen ml-[400] ">
        <Header />
        <div className="px-5 py-5 mt-[60]">
          <MainStatsSection />
        </div>
      </div>
    </div>
  );
};
