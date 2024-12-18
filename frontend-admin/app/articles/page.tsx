import { AritcleMain } from "../_components/Articles/AritcleMain";
import { ControlPanel } from "../_components/MainPage/ControlPanel/ControlPanel";
import { Header } from "../_components/MainPage/MainContainer/Header";

export default function Home() {
  return (
    <div className="flex w-full h-full">
      <ControlPanel />
      <div className="flex flex-col w-full">
        <Header />
        <div className="">
          <AritcleMain />
        </div>
      </div>
    </div>
  );
}
