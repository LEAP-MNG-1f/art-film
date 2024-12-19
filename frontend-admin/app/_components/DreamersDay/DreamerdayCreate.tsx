"use client";
import { useState } from "react";

export const DreamerdayCreate = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setSelectedImage(imageURL);
    }
  };

  const [content, setContent] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Article Submitted:", content);
    setContent("");
  };

  return (
    <div className="flex flex-col bg-slate-200 rounded-2xl gap-5 shadow-xl m-10">
      <div className="flex flex-col justify-between bg-white shadow rounded-t-2xl px-10 py-5">
        <label
          htmlFor="image"
          className="text-center block text-lg font-semibold text-gray-800 mb-2"
        >
          Постэр зураг
        </label>

        {selectedImage && (
          <div className="mb-4 flex justify-center">
            <img
              src={selectedImage}
              alt="Selected preview"
              className="max-w-full flex flex-col object-cover rounded-lg border border-slate-900 shadow-lg"
            />
          </div>
        )}
        <input
          type="file"
          id="image"
          accept="image/*"
          className="block w-full px-3 py-2 border border-slate-900 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
          onChange={handleImageChange}
        />
      </div>
      <div className="grid grid-cols-2 mb-10">
        <div className="flex flex-col rounded-b-2xl px-10 gap-10">
          <form className="flex flex-col gap-2">
            <label htmlFor="name" className="block text-lg font-semibold ">
              Киноны нэр:
            </label>
            <input
              placeholder="Киноны нэрээ оруулна уу..."
              type="text"
              id="name"
              className="mt-1 block w-full py-2 px-2 border-slate-900 rounded-md shadow-sm"
            />
          </form>

          <form className="flex flex-col gap-2">
            <label htmlFor="name" className="block text-lg font-semibold ">
              Найруулагчийн нэр:
            </label>
            <input
              placeholder="Найруулагчийн нэрээ оруулна уу..."
              type="text"
              id="name"
              className="mt-1 block w-full py-2 px-2 border-slate-900 rounded-md shadow-sm"
            />
          </form>

          <form className="flex flex-col gap-2">
            <label htmlFor="price" className="block text-lg font-semibold ">
              Тасалбарын үнэ:
            </label>
            <input
              placeholder="Тоогоор оруулна уу..."
              type="number"
              id="price"
              className="mt-1 block w-full py-2 px-2 border-slate-900 rounded-md shadow-sm"
            />
          </form>

          <form className="flex flex-col gap-2">
            <label htmlFor="dropdown" className="block text-lg font-semibold ">
              Киноны жанр, төрөл зүйл:
            </label>
            <select
              id="dropdown"
              className="mt-1 block w-full py-2 px-2 border-slate-900 rounded-md shadow-sm"
            >
              <option value="">--Select an option--</option>
              <option value="option1">Triller</option>
              <option value="option2">Romantic</option>
              <option value="option3">Horror</option>
            </select>
          </form>

          <form className="flex flex-col gap-2">
            <label htmlFor="language" className="block text-lg font-semibold ">
              Зохион байгуулагдах өдөр:
            </label>
            <input
              placeholder="Хадмал орчуулгын хэлийг оруулна уу..."
              type="date"
              id="language"
              className="mt-1 block w-full py-2 px-2 border-slate-900 rounded-md shadow-sm"
            />
          </form>

          <form className="flex flex-col gap-2">
            <label htmlFor="language" className="block text-lg font-semibold ">
              Эхлэх цаг (event):
            </label>
            <input
              placeholder="Эхлэх цаг"
              type="time"
              id="language"
              className="mt-1 block w-full py-2 px-2 border-slate-900 rounded-md shadow-sm"
            />
          </form>
          <form className="flex flex-col gap-2">
            <label htmlFor="location" className="block text-lg font-semibold ">
              Байршил:
            </label>
            <input
              placeholder="Байршилыг оруулна уу..."
              type="text"
              id="location"
              className="mt-1 block w-full py-2 px-2 border-slate-900 rounded-md shadow-sm"
            />
          </form>
        </div>

        <form
          className="flex flex-col justify-between pr-10"
          onSubmit={handleSubmit}
        >
          <div className="mb-4 flex flex-col gap-2">
            <label htmlFor="content" className="block text-lg font-semibold ">
              Нийтлэл:
            </label>
            <textarea
              id="content"
              className="w-full p-2 border border-gray-300 rounded-lg"
              rows={25}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Киноны талаар сонирхолтой баримт, мэдээлэл оруулна уу..."
              required
            />
          </div>

          <div className="flex justify-end mt-10">
            <button
              type="submit"
              className="px-5 py-2 rounded-lg text-white bg-orange-400 font-semibold hover:bg-orange-600"
            >
              Шинээр нэмэх
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
