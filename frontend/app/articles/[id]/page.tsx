"use client";
import React, { useState, useEffect } from "react";
import MovieDetail from "@/app/_components/Movie/MovieDetail";
import { useParams } from "next/navigation";
import ArticleDetail from "@/app/_components/Article/ArticleDetail";

type Article = {
  _id: string;
  title: string;
  imageUrl: string;
};

const Page = () => {
  const [articleData, setArticleData] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:9000/api/movies/${id}`);

        if (!response.ok) {
          const errorText = await response.text();
          setError(errorText);
          setArticleData(null);
          return;
        }

        const data = await response.json();

        if (!data || typeof data !== "object") {
          setError("Invalid data structure received");
          setArticleData(null);
          return;
        }

        setArticleData(data.data);
        setError(null);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "An unknown error occurred"
        );
        setArticleData(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <ArticleDetail articleData={articleData} />
    </div>
  );
};

export default Page;
