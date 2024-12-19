import { Funny, Horror, Horror1, Romans, StarIcon } from "@/public/Icons/Icons";

import React, { useState } from "react";
import { MdBorderAll } from "react-icons/md";
import { GiCrimeSceneTape } from "react-icons/gi";
import { GiMaterialsScience } from "react-icons/gi";
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

const MovieFilter = ({
  moviesData,
  isLoading,
  limit = moviesData.length,
  onFilter, // Add the onFilter prop
}: {
  moviesData: Movie[];
  isLoading: boolean;
  limit?: number;
  onFilter: (filteredMovies: Movie[]) => void; // Function type for filtering
}) => {
  const skeletonCards = Array.from({ length: 8 }, (_, i) => i);
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  const genres = [
    {
      name: "Бүгд",
      icon: <MdBorderAll className="w-[25px] h-[24px] text-[#F8941E]" />,
      value: null,
    },
    { name: "Романс", icon: <Romans />, value: "Romance" },
    { name: "Аймшгийн", icon: <Horror />, value: "Horror" },
    { name: "Триллер", icon: <Horror1 />, value: "Thriller" },
    {
      name: "Шинжлэх ухаан",
      icon: <GiMaterialsScience className="w-[25px] h-[24px] text-[#F8941E]" />,
      value: "Sci-Fi",
    },
    { name: "Инээдмийн", icon: <Funny />, value: "Comedy" },
    {
      name: "Гэмт Хэрэг",
      icon: <GiCrimeSceneTape className="w-[25px] h-[24px] text-[#F8941E]" />,
      value: "Crime",
    },
  ];

  // Handle genre selection and update the filtered movies
  const handleGenreSelection = (genre: string | null) => {
    setSelectedGenre(genre);

    if (genre) {
      const filtered = moviesData.filter((movie) =>
        movie.genre.includes(genre)
      );
      onFilter(filtered); // Pass the filtered movies to the parent
    } else {
      onFilter(moviesData); // If "All" is selected, show all movies
    }
  };

  return (
    <div className="flex justify-center pb-10 px-4 lg:px-0">
      <div className="max-w-[1180px] lg:w-[1180px] flex flex-col gap-4">
        <div className="flex justify-between flex-wrap mb-6">
          {genres.map((genre) => (
            <div
              key={genre.name}
              className={`flex gap-4 items-center cursor-pointer px-4 py-2 rounded-lg ${
                selectedGenre === genre.value ? "text-[#F8941E]" : ""
              }`}
              onClick={() =>
                handleGenreSelection(
                  genre.value === selectedGenre ? null : genre.value
                )
              } // Toggle genre filter
            >
              {genre.icon}
              <p className="overflow-hidden truncate font-helvetica text-lg leading-tight">
                {genre.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieFilter;
