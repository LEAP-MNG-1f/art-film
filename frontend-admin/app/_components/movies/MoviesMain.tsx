"use client";
import { useEffect, useState } from "react";
import { MoviesHeader } from "@/app/_components/Movies/MoviesHeader";
import { toast } from "react-toastify";
import { MovieCreate } from "@/app/_components/Movies/MovieCreate";
import { MoviesList } from "@/app/_components/Movies/MoviesList";

export type Movie = {
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

export const MoviesMain = () => {
  const [movieData, setMovieData] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:9000/api/movies");
      const data = await response.json();
      setMovieData(data.data);
    } catch (error) {
      toast.error("Киноны мэдээлэл авахад алдаа гарлаа");
      setMovieData([]);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:9000/api/movies/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setMovieData((prevData) =>
          prevData.filter((movie) => movie._id !== id)
        );
        toast.success("Кино амжилттай устгагдлаа");
      }
    } catch (error) {
      toast.error("Киноог устгахад алдаа гарлаа");
    }
  };

  const handleEdit = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseDialog = () => {
    setSelectedMovie(null);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col">
      <MoviesHeader />
      <MoviesList
        movieData={movieData}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />

      {selectedMovie && (
        <MovieCreate
          closeDialog={handleCloseDialog}
          movieData={selectedMovie}
        />
      )}
    </div>
  );
};
