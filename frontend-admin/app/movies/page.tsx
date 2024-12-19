import { ControlPanel } from "../_components/MainPage/ControlPanel/ControlPanel";
import { Header } from "../_components/MainPage/MainContainer/Header";
import { MoviesMain } from "../_components/movies/MoviesMain";

export default function Home() {
  return (
    <div className="flex h-screen">
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
