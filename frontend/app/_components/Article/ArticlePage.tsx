"use client";
import { useEffect, useState } from "react";
import Footer from "../HomePage/Footer";
import Header from "./Header";
import ArticleCard from "./ArticleCard/ArticleCard";

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
      <div>
        <Header />
        <div className="flex justify-center items-center py-10">
          <ArticleCard
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
