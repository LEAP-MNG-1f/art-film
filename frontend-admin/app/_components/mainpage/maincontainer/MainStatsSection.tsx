import { MainHeader } from "./MainHeader";
import { StatsCard } from "./StatsCard";
export const MainStatsSection = () => {
  return (
    <div>
      <MainHeader />
      <div className="grid grid-cols-3 gap-20 mt-[50] px-10">
        <StatsCard
          title="Dreamer's Day"
          router="dreamer-day"
          util="Dreamer"
          contentnumber={53}
          viewnumber={8532}
          likenumber={131}
          commentnumber={86}
        />
        <StatsCard
          title="Movies"
          router="movies"
          util="Movies  "
          contentnumber={53}
          viewnumber={8532}
          likenumber={131}
          commentnumber={86}
        />
        <StatsCard
          title="Feedback"
          router="articles"
          util="Feedback"
          contentnumber={53}
          viewnumber={8532}
          likenumber={131}
          commentnumber={86}
        />
      </div>
    </div>
  );
};
