import { FeedbackHeader } from "./FeedbackHeader";
import { MockData } from "./MockData";

export const FeedbackMain = () => {
  return (
    <div className="flex flex-col gap-8 bg-white px-5 pt-5">
      <FeedbackHeader />
      <div className="flex flex-col gap-10">
        <MockData
          author="Baldan"
          movie="Baldangiin duuli"
          date="2024.12.09"
          text="Bla bla bla..."
        />
        <MockData
          author="Baldan"
          movie="Baldangiin duuli"
          date="2024.12.09"
          text="Bla bla bla..."
        />
        <MockData
          author="Baldan"
          movie="Baldangiin duuli"
          date="2024.12.09"
          text="Bla bla bla..."
        />
        <MockData
          author="Baldan"
          movie="Baldangiin duuli"
          date="2024.12.09"
          text="Bla bla bla..."
        />
        <MockData
          author="Baldan"
          movie="Baldangiin duuli"
          date="2024.12.09"
          text="Bla bla bla..."
        />
      </div>
    </div>
  );
};
