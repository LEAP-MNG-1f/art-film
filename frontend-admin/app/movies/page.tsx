import { ControlPanel } from "../_components/mainpage/controlpanel/ControlPanel";
import { Header } from "../_components/mainpage/maincontainer/Header";
import { MoviesMain } from "../_components/movies/MoviesMain";

export default function Home() {
  return (
    <div className="flex w-screen ">
      <ControlPanel />
      <div className="flex flex-col w-screen h-screen ml-[373]">
        <Header />
        <div className="border-b-2 mt-[60]">
          <MoviesMain />
        </div>
      </div>
    </div>
  );
}
