"use client";
import React, { useState, useEffect } from "react";
import MovieDetail from "@/app/_components/Movie/MovieDetail";
import { useParams } from "next/navigation";
import ArticleDetail from "@/app/_components/Article/ArticleDetail";

type Comment = {
  _id: string;
  content: string;
  authorName: string;
  likes: number;
  createdAt: string;
  replies: Comment[]; // Nested replies
};

export type Article = {
  _id: string;
  title: string;
  content: string;
  image: string;
  comments: Comment[];
  // createdAt: Date;
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
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/articles/${id}`
        );

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

 

  return (
    <div>
      <ArticleDetail articleData={articleData} />
    </div>
  );
};

export default Page;
