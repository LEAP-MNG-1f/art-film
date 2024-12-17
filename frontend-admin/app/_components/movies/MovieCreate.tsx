"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import CSS for react-toastify

export const MovieCreate = ({ closeDialog }: { closeDialog: () => void }) => {
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

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:9000/api/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success("Кино амжилттай нэмэгдлээ!"); // Show success notification
        closeDialog(); // Close the dialog after successful submission
        console.log(data);
      } else {
        toast.error("Кино нэмэхэд алдаа гарлаа."); // Show error notification
        console.log(response);
      }
    } catch (error) {
      console.log("Error:", error);
      toast.error("Хатуу алдаа гарлаа!"); // Show error notification
    }
  };

  return (
    <div className="m-10 bg-white">
      <form
        className="grid grid-cols-2 bg-slate-200 rounded-2xl gap-5 shadow-xl p-10"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-4">
          {/* Title */}
          <label className="block text-lg font-semibold">
            Киноны нэр
            <input
              type="text"
              name="title"
              placeholder="Киноны нэрээ оруулна уу..."
              className="mt-1 block w-full py-2 px-3 border rounded-md"
              onChange={handleChange}
            />
          </label>

          {/* Release Year */}
          <label className="block text-lg font-semibold">
            Нээлт хийсэн он
            <input
              type="number"
              name="releaseYear"
              placeholder="2010"
              className="mt-1 block w-full py-2 px-3 border rounded-md"
              onChange={handleChange}
            />
          </label>

          {/* Genre */}
          <label className="block text-lg font-semibold">
            Жанр
            <input
              type="text"
              name="genre"
              placeholder="Жанр"
              className="mt-1 block w-full py-2 px-3 border rounded-md"
              onChange={handleChange}
            />
          </label>

          {/* Writer */}
          <label className="block text-lg font-semibold">
            Бичигч
            <input
              type="text"
              name="writer"
              placeholder="Нэр"
              className="mt-1 block w-full py-2 px-3 border rounded-md"
              onChange={handleChange}
            />
          </label>

          {/* Director */}
          <label className="block text-lg font-semibold">
            Найруулагч
            <input
              type="text"
              name="director"
              placeholder="Нэр"
              className="mt-1 block w-full py-2 px-3 border rounded-md"
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="flex flex-col gap-4">
          {/* Rating */}
          <label className="block text-lg font-semibold">
            Үнэлгээ (1-10)
            <input
              type="number"
              name="rating"
              placeholder="8.8"
              className="mt-1 block w-full py-2 px-3 border rounded-md"
              onChange={handleChange}
            />
          </label>

          {/* Trailer URL */}
          <label className="block text-lg font-semibold">
            Trailer URL
            <input
              type="url"
              name="trailerUrl"
              placeholder="https://youtube.com"
              className="mt-1 block w-full py-2 px-3 border rounded-md"
              onChange={handleChange}
            />
          </label>

          {/* Image URL */}
          <label className="block text-lg font-semibold">
            Зургийн URL
            <input
              type="url"
              name="imageUrl"
              placeholder="https://image-url.com"
              className="mt-1 block w-full py-2 px-3 border rounded-md"
              onChange={handleChange}
            />
          </label>

          {/* Description */}
          <label className="block text-lg font-semibold">
            Тайлбар
            <textarea
              name="description"
              placeholder="Киноны талаар..."
              className="mt-1 block w-full py-2 px-3 border rounded-md"
              onChange={handleChange}
            ></textarea>
          </label>

          <button
            type="submit"
            className="px-5 py-2 mt-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700"
          >
            Шинээр нэмэх
          </button>
        </div>
      </form>
    </div>
  );
};
