"use client";
import { useEffect, useState } from "react";
import { Article, ArticleHeader } from "./ArticleHeader";
import ArticleList from "./ArticleList";
import { toast } from "react-toastify";
import ArticleCreate from "./ArticleCreate";

export const AritcleMain = () => {
  const [articleData, setArticleData] = useState<Article[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:9000/api/articles");
      const data = await response.json();
      setArticleData(data.data);
    } catch (error) {
      console.error("Error fetching articles:", error);
      setArticleData([]);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:9000/api/articles/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setArticleData((prevData) =>
          prevData.filter((article) => article._id !== id)
        );
        toast.success("Кино амжилттай устгагдлаа");
      }
    } catch (error) {
      toast.error("Киноог устгахад алдаа гарлаа");
    }
  };

  const handleEdit = (article: Article) => {
    setSelectedArticle(article);
  };

  const handleCloseDialog = () => {
    setSelectedArticle(null);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <ArticleHeader />
      <div className="flex flex-col gap-10 h-[800px] mx-10 overflow-scroll ">
        <ArticleList
          articleData={articleData}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
        {selectedArticle && (
          <ArticleCreate
            closeDialog={handleCloseDialog}
            articleData={selectedArticle}
          />
        )}
      </div>
    </div>
  );
};
