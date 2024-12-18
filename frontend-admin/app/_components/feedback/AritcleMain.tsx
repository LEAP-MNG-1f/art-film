import { ArticleHeader } from "./ArticleHeader";
import { MockDataFeed } from "./MockDataFeed";

export const AritcleMain = () => {
  return (
    <div className="flex flex-col gap-8">
      <ArticleHeader />
      <div className=" border-2 mx-10 px-10 py-10 shadow-2xl rounded-lg">
        <div className="flex flex-col gap-10 h-[800px] overflow-scroll ">
          <MockDataFeed
            author="Baldan"
            movie="Baldangiin duuli"
            date="2024.12.09"
            text="Bla bla bla..."
          />
          <MockDataFeed
            author="Baldan"
            movie="Baldangiin duuli"
            date="2024.12.09"
            text="Bla bla bla..."
          />
          <MockDataFeed
            author="Baldan"
            movie="Baldangiin duuli"
            date="2024.12.09"
            text="Bla bla bla..."
          />
          <MockDataFeed
            author="Baldan"
            movie="Baldangiin duuli"
            date="2024.12.09"
            text="Bla bla bla..."
          />
          <MockDataFeed
            author="Baldan"
            movie="Baldangiin duuli"
            date="2024.12.09"
            text="Bla bla bla..."
          />
          <MockDataFeed
            author="Baldan"
            movie="Baldangiin duuli"
            date="2024.12.09"
            text="Bla bla bla..."
          />
          <MockDataFeed
            author="Baldan"
            movie="Baldangiin duuli"
            date="2024.12.09"
            text="Bla bla bla..."
          />
          <MockDataFeed
            author="Baldan"
            movie="Baldangiin duuli"
            date="2024.12.09"
            text="Bla bla bla..."
          />
          <MockDataFeed
            author="Baldan"
            movie="Baldangiin duuli"
            date="2024.12.09"
            text="Bla bla bla..."
          />
          <MockDataFeed
            author="Baldan"
            movie="Baldangiin duuli"
            date="2024.12.09"
            text="Bla bla bla..."
          />
        </div>
      </div>
    </div>
  );
};
