import HeaderPage from "../article/Header";
import Footer from "../homePage/Footer";
import DreamersBody from "./dreamersDayCard/DreamersBody";
import RecommendDreamers from "../homePage/Recommend";
import Recommend from "../homePage/Recommend";

const DreamersDayPage = () => {
  return (
    <div className="flex justify-center">
      <div>
        <HeaderPage />
        <div className="py-10">
          <DreamersBody />
          <Recommend />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default DreamersDayPage;
