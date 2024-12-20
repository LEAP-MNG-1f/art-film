"use client";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SearchSVG } from "@/public/Icons/SvgFiles";

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

export const MovieCreate = ({
  closeDialog,
  movieData,
}: {
  closeDialog: () => void;
  movieData?: Movie;
}) => {
  const [formData, setFormData] = useState({
    title: "",
    releaseYear: "",
    genre: "",
    writer: "",
    director: "",
    rating: "",
    trailerUrl: "",
    imageUrl: "",
    description: "",
  });

  useEffect(() => {
    if (movieData) {
      setFormData({
        title: movieData.title,
        releaseYear: movieData.releaseYear.toString(),
        genre: movieData.genre.join(", "),
        writer: movieData.writer.join(", "),
        director: movieData.director.join(", "),
        rating: movieData.rating.toString(),
        trailerUrl: movieData.trailerUrl || "",
        imageUrl: movieData.imageUrl || "",
        description: movieData.imageUrl || "",
      });
    }
  }, [movieData]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearchMovie = async () => {
    const searchInput = document.querySelector(
      'input[name="title"]'
    ) as HTMLInputElement;
    const searchTitleValue = searchInput?.value;

    if (!searchTitleValue) {
      toast.error("Киноны нэрээ оруулна уу");
      return;
    }

    try {
      const response = await fetch(
        `${
          process.env.NEXT_PUBLIC_BACKEND_URL
        }/omdb/movie?title=${encodeURIComponent(searchTitleValue)}`
      );

      const result = await response.json();

      if (result.movie) {
        const movie = result.movie;
        setFormData({
          title: movie.Title,
          releaseYear: movie.Year,
          genre: movie.Genre,
          writer: movie.Writer,
          director: movie.Director,
          rating: movie.imdbRating
            ? (Math.round(parseFloat(movie.imdbRating) * 10) / 10).toString()
            : "",
          trailerUrl: "",
          imageUrl: movie.Poster || "",
          description: movie.Plot,
        });
        toast.success("Киноны мэдээлэл амжилттай олдлоо!");
      } else {
        toast.error(result.error || "Кино олдсонгүй");
      }
    } catch (error) {
      console.error("Error searching movie:", error);
      toast.error("Кино хайхад алдаа гарлаа");
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const method = movieData ? "PUT" : "POST";
      const url = movieData
        ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/movies/${movieData._id}`
        : `${process.env.NEXT_PUBLIC_BACKEND_URL}/movies`;
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          genre: formData.genre.split(",").map((g) => g.trim()),
          writer: formData.writer.split(",").map((w) => w.trim()),
          director: formData.director.split(",").map((d) => d.trim()),
          releaseYear: parseInt(formData.releaseYear),
          rating: parseFloat(formData.rating),
        }),
      });

      if (response.ok) {
        toast.success(
          movieData ? "Кино шинэчлэгдлээ!" : "Шинэ кино нэмэгдлээ!"
        );
        closeDialog();
      } else {
        toast.error("Алдаа гарлаа.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Системийн алдаа.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-orange-400 text-white p-5">
          <h2 className="text-2xl font-bold text-center">
            {movieData ? "Кино засварлах" : "Шинэ кино нэмэх"}
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-8 grid md:grid-cols-2 gap-6 bg-gray-50"
        >
          <div className="space-y-5">
            <div className="flex gap-2 justify-between">
              <InputField
                label="Киноны нэр"
                type="text"
                name="title"
                value={formData.title}
                placeholder="Киноны нэрээ оруулна уу"
                onChange={handleChange}
                className="flex-grow"
              />

              <button
                onClick={handleSearchMovie}
                className="flex items-end pb-1"
              >
                <SearchSVG />
              </button>
            </div>

            <InputField
              label="Гарсан он"
              type="number"
              name="releaseYear"
              value={formData.releaseYear}
              placeholder="2023"
              onChange={handleChange}
            />
            <InputField
              label="Төрөл"
              type="text"
              name="genre"
              value={formData.genre}
              placeholder="Аавлуулга, Драм"
              onChange={handleChange}
            />
            <InputField
              label="Зохиогч"
              type="text"
              name="writer"
              value={formData.writer}
              placeholder="Зохиогчийн нэр"
              onChange={handleChange}
            />
            <InputField
              label="Найруулагч"
              type="text"
              name="director"
              value={formData.director}
              placeholder="Найруулагчийн нэр"
              onChange={handleChange}
            />
          </div>

          <div className="space-y-5">
            <InputField
              label="Үнэлгээ (1-10)"
              type="number"
              name="rating"
              value={formData.rating}
              placeholder="8.5"
              min="0"
              max="10"
              step="0.1"
              onChange={handleChange}
            />
            <InputField
              label="Трейлер холбоос"
              type="url"
              name="trailerUrl"
              value={formData.trailerUrl}
              placeholder="Трейлерийн холбоос"
              onChange={handleChange}
            />
            <InputField
              label="Постер зураг"
              type="url"
              name="imageUrl"
              value={formData.imageUrl}
              placeholder="Постерийн холбоос"
              onChange={handleChange}
            />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Тайлбар
              </label>
              <textarea
                name="description"
                value={formData.description}
                placeholder="Киноны тухай дэлгэрэнгүй мэдээлэл"
                className="w-full rounded-lg border-2 border-gray-300 
                           px-3 py-2 focus:border-indigo-500 
                           focus:ring-2 focus:ring-indigo-200 
                           outline-none transition-all duration-300"
                rows={4}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-span-2 flex justify-end space-x-4 mt-4">
            <button
              type="button"
              onClick={closeDialog}
              className="px-6 py-2.5 bg-gray-200 font-semibold text-gray-800 
                         rounded-lg hover:bg-gray-300 
                         focus:outline-none focus:ring-2 focus:ring-gray-400 
                         transition-all duration-300"
            >
              Цуцлах
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-orange-400 text-white  font-semibold
                         rounded-lg hover:bg-orange-600 
                         focus:outline-none focus:ring-2 focus:ring-orange-600 
                         transition-all duration-300"
            >
              {movieData ? "Шинэчлэх" : "Нэмэх"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const InputField = ({
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
  min,
  max,
  step,
  className,
}: {
  label: string;
  type: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  min?: string;
  max?: string;
  step?: string;
  className?: string;
}) => (
  <div className={className}>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      min={min}
      max={max}
      step={step}
      className="w-full rounded-lg border-2 border-gray-300 
                 px-3 py-2.5 focus:border-indigo-500 
                 focus:ring-2 focus:ring-indigo-200 
                 outline-none transition-all duration-300"
    />
  </div>
);

export default MovieCreate;
