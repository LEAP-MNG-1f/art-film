import Footer from "../HomePage/Footer";
import DreamersBody from "./DreamersDayCard/DreamersBody";
import VerySoon from "./DreamersDayCard/VerySoon";

import DreamersDayHeader from "./DreamersDayHeader";

const DreamersDayPage = () => {
  return (
    <div className="flex justify-center">
      <div>
        <DreamersDayHeader />

        <DreamersBody />
        <VerySoon />
        <Footer />
      </div>
    </div>
  );
};

export default DreamersDayPage;
