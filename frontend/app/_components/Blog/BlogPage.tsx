import Footer from "../HomePage/Footer";
import Body from "./Body";
import HeaderPage from "./HeaderPage";

const BlogPage = () => {
  return (
    <div className="flex justify-center">
      <div className="">
        <HeaderPage />
        <Body />
        <Footer/>
      </div>
    </div>
  );
};

export default BlogPage;
