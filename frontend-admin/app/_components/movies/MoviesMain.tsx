"use client";
import { useEffect, useState } from "react";
import { Pencil, Trash2 } from "lucide-react"; // Import edit and delete icons
import { MoviesHeader } from "./MoviesHeader";
import { MovieCreate } from "./MovieCreate";

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
      console.error("Error fetching movies:", error);
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
      }
    } catch (error) {
      console.error("Error deleting movie:", error);
    }
  };

  const handleEdit = (movie: Movie) => {
    console.log("Editing movie MoviesMain:", movie);
    setSelectedMovie(movie); // Set the movie data to be edited
  };

  const handleCloseDialog = () => {
    setSelectedMovie(null); // Reset the selectedMovie state to close the dialog
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-8 py-5">
      <MoviesHeader />
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-16 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Genre
              </th>
              <th scope="col" className="px-6 py-3">
                Release Year
              </th>
              <th scope="col" className="px-6 py-3">
                Writer
              </th>
              <th scope="col" className="px-6 py-3">
                Director
              </th>
              <th scope="col" className="px-6 py-3">
                Rating
              </th>
              <th scope="col" className="px-6 py-3">
                Trailer
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {movieData.map((data) => (
              <tr
                key={data._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="p-4">
                  <img
                    src={data.imageUrl}
                    className="w-16 md:w-32 max-w-full max-h-full"
                    alt={data.title}
                  />
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {data.title} ({data.releaseYear})
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap">
                    {data.genre.map((g, index) => (
                      <span
                        key={index}
                        className="mr-2 text-gray-600 dark:text-gray-300"
                      >
                        {g}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4">{data.releaseYear}</td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap">
                    {data.writer.map((w, index) => (
                      <span
                        key={index}
                        className="mr-2 text-gray-600 dark:text-gray-300"
                      >
                        {w}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap">
                    {data.director.map((d, index) => (
                      <span
                        key={index}
                        className="mr-2 text-gray-600 dark:text-gray-300"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {data.rating}
                </td>
                <td className="px-6 py-4">
                  <a
                    href={data.trailerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Watch Trailer
                  </a>
                </td>
                <td className="px-6 py-4 space-x-2">
                  <button
                    onClick={() => handleEdit(data)} // Pass movie data to edit function
                    className="text-yellow-600 hover:text-yellow-800 transition-colors duration-200"
                    title="Edit Movie"
                  >
                    <Pencil size={20} />
                  </button>
                  <button
                    onClick={() => handleDelete(data._id)}
                    className="text-red-600 hover:text-red-800 transition-colors duration-200"
                    title="Delete Movie"
                  >
                    <Trash2 size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Render the MovieCreate component when selectedMovie is set */}
      {selectedMovie && (
        <MovieCreate
          closeDialog={handleCloseDialog}
          movieData={selectedMovie}
        />
      )}
    </div>
  );
};
