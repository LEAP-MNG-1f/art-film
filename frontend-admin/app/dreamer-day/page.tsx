import { DreamerdayMain } from "../_components/DreamersDay/DreamdayMain";
import { ControlPanel } from "../_components/MainPage/ControlPanel/ControlPanel";
import { Header } from "../_components/MainPage/MainContainer/Header";

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
