import { DreamerdayMain } from "../_components/dreamerday/DreamdayMain";
import { ControlPanel } from "../_components/mainpage/controlpanel/ControlPanel";
import { Header } from "../_components/mainpage/maincontainer/Header";

export default function Home() {
  return (
    <div className="flex w-screen h-full">
      <ControlPanel />
      <div className="flex flex-col w-screen h-screen ml-[370]">
        <Header />
        <div className="px-5 py-5">
          <div className="font-bold mt-[60] text-5xl text-orange-400 border-orange-400 border-b-2">
            Dashboard
          </div>
          <DreamerdayMain />
        </div>
      </div>
    </div>
  );
}
