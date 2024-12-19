"use client";
import React, { useState, useEffect } from "react";
import MovieDetail from "@/app/_components/Movie/MovieDetail";
import { useParams } from "next/navigation";

type Movie = {
  _id: string;
  title: string;
  releaseYear: number;
  genre: string[];
  writer: string[];
  director: string[];
  rating: number;
  trailerUrl?: string;
  imageUrl: string;
  relatedMovies: string[];
  createdAt: Date;
};

const Page = () => {
  const [movieData, setMovieData] = useState<Movie | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/movies/${id}`
        );

        if (!response.ok) {
          const errorText = await response.text();
          setError(errorText);
          setMovieData(null);
          return;
        }

        const data = await response.json();

        if (!data || typeof data !== "object") {
          setError("Invalid data structure received");
          setMovieData(null);
          return;
        }

        setMovieData(data.data);
        setError(null);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "An unknown error occurred"
        );
        setMovieData(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <MovieDetail movieData={movieData} />
    </div>
  );
};

export default Page;
