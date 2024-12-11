import { StatsCard } from "./StatsCard";
export const MainStatsSection = () => {
  return (
    <div className="grid grid-cols-3 gap-16 pt-5">
      <StatsCard
        title="Dreamer's Day"
        util="A"
        contentnumber={53}
        viewnumber={8532}
        likenumber={131}
        commentnumber={86}
      />
      <StatsCard
        title="Movies"
        util="R"
        contentnumber={53}
        viewnumber={8532}
        likenumber={131}
        commentnumber={86}
      />
      <StatsCard
        title="Dreamer's Day"
        util="T"
        contentnumber={53}
        viewnumber={8532}
        likenumber={131}
        commentnumber={86}
      />
    </div>
  );
};
