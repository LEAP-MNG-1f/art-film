import HeaderPage from "../Article/Header";
import Footer from "../HomePage/Footer";
import DreamersBody from "./DreamersDayCard/DreamersBody";
import RecommendDreamers from "../HomePage/Recommend";
import Recommend from "../HomePage/Recommend";

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
