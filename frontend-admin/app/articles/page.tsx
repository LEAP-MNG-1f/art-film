import { FeedbackMain } from "../_components/feedback/FeedbackMain";
import { ControlPanel } from "../_components/mainpage/controlpanel/ControlPanel";
import { Header } from "../_components/mainpage/maincontainer/Header";

export default function Home() {
  return (
    <div className="flex w-screen  ">
      <ControlPanel />
      <div className="flex flex-col w-screen h-screen ml-[373] ">
        <Header />
        <div className="border-b-2 mt-[60]">
          <FeedbackMain />
        </div>
      </div>
    </div>
  );
}
