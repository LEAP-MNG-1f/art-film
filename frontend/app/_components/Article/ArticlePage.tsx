import Footer from "../homePage/Footer";
import Recommend from "../homePage/Recommend";
import ArticleBody from "./articleCard/ArticleBody";
import HeaderPage from "./Header";

const ArticlePage = () => {
  return (
    <div className="flex justify-center">
      <div className="">
        <HeaderPage />
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
