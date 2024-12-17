"use client";
import { useEffect, useState } from "react";
import Footer from "../HomePage/Footer";

import ArticleBody from "./ArticleCard/ArticleBody";
import Header from "./Header";

const ArticlePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [articleData, setArticleData] = useState([]);
  const fetchDataArticles = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/movies`
      );
      const data = await response.json();
      setArticleData(data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDataArticles();
  }, []);
  return (
    <div className="flex justify-center">
      <div className="">
        <Header />
        <div className="py-10">
          <ArticleBody
            articlesData={articleData}
            isLoading={isLoading}
            limit={6}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ArticlePage;
