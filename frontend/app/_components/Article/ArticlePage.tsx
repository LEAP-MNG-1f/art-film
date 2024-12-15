import Footer from "../HomePage/Footer";
import Recommend from "../HomePage/Recommend";
import ArticleBody from "./ArticleCard/ArticleBody";
import Header from "./Header";

const ArticlePage = () => {
  return (
    <div className="flex justify-center">
      <div className="">
        <Header />
        <div className="py-10">
          <Recommend />
          <ArticleBody />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ArticlePage;
