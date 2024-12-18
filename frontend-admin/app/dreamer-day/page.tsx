import { DreamerdayMain } from "../_components/dreamerday/DreamdayMain";
import { ControlPanel } from "../_components/mainpage/controlpanel/ControlPanel";
import { Header } from "../_components/mainpage/maincontainer/Header";

export default function Home() {
  return (
    <div className="flex">
      <ControlPanel />
      <div className="flex flex-col w-full">
        <Header />
        <div className="">
          <DreamerdayMain />
        </div>
      </div>
    </div>
  );
}
