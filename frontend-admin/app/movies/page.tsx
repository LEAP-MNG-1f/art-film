import { ControlPanel } from "../_components/mainpage/controlpanel/ControlPanel";
import { Header } from "../_components/mainpage/maincontainer/Header";
import { MoviesMain } from "../_components/movies/MoviesMain";

export default function Home() {
  return (
    <div className="flex">
      <ControlPanel />
      <div className="flex flex-col w-full">
        <Header />
        <div className="border-b-2">
          <MoviesMain />
        </div>
      </div>
    </div>
  );
}
