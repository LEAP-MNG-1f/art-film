import Desktop from "./Desktop";
import Footer from "./Footer";
import MainDreamerCart from "./cart/MainDreamerCart";
import MainMovie from "./cart/MainMovie";
import MainPost from "./cart/MainPost";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center">
      <Desktop />
      <div className="flex flex-col gap-9 pt-10">
        <MainDreamerCart />
        <MainPost />
        <MainMovie />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
