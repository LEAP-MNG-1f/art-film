import { ButtonCardWO } from "../../utils/ButtonCard";

export const ControlPanel = () => {
  return (
    <div className="fixed flex flex-col h-screen pl-5 bg-slate-900">
      <div className="mb-10">
        <img width={350} src="/Icons/ArtfilmLogo.png" alt="" />
      </div>
      <div className="flex flex-col items-end text-white font-semibold gap-5 pr-5 text-2xl">
        <ButtonCardWO title="Home" route="/" />
        <ButtonCardWO title="Dreamer's Day" route="/dreamer-day" />
        <ButtonCardWO title="Movies" route="/movies" />
        <ButtonCardWO title="Feedback" route="/feedback" />
      </div>
    </div>
  );
};
