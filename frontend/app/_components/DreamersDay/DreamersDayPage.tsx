import Header from "../Article/Header";
import Footer from "../HomePage/Footer";
import DreamersDayBody from "./DreamersDayCard/DreamersDayBody";
import VerySoon from "./DreamersDayCard/VerySoon";

const DreamersDayPage = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-10">
        <Header />
        <DreamersDayBody />
        <VerySoon />
        <Footer />
      </div>
    </div>
  );
};

export default DreamersDayPage;
