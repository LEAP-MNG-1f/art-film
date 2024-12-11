"use client";

import { useState } from "react";

export const FeedbackCreate = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle the image file change
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setSelectedImage(imageURL);
    }
  };
  return (
    <div className="m-10">
      <div className="grid grid-cols-2 bg-slate-200 rounded-2xl gap-5 shadow-xl">
        {/* Name input */}
        <div className="flex flex-col rounded-l-2xl p-10 gap-10">
          <form className="flex flex-col gap-2">
            <label htmlFor="name" className="block text-lg font-semibold ">
              Киноны нэр
            </label>
            <input
              placeholder="Киноны нэрээ оруулна уу..."
              type="text"
              id="name"
              className="mt-1 block w-full py-2 px-2 border-slate-900 rounded-md shadow-sm"
            />
          </form>

          {/* Price input */}
          <form className="flex flex-col gap-2">
            <label htmlFor="price" className="block text-lg font-semibold ">
              Тасалбарын үнэ
            </label>
            <input
              placeholder="Тоогоор оруулна уу..."
              type="number"
              id="price"
              className="mt-1 block w-full py-2 px-2 border-slate-900 rounded-md shadow-sm"
            />
          </form>

          {/* Length of time input */}
          <form className="flex flex-col gap-2">
            <label htmlFor="length" className="block text-lg font-semibold ">
              Кино үргэлжлэх хугацаа:
            </label>
            <input
              placeholder="Тоогоор оруулна уу..."
              type="text"
              id="length"
              className="mt-1 block w-full py-2 px-2 border-slate-900 rounded-md shadow-sm"
            />
          </form>

          {/* Category input */}
          <form className="flex flex-col gap-2">
            <label htmlFor="category" className="block text-lg font-semibold ">
              Киноны жанр, төрөл зүйл
            </label>
            <input
              placeholder="Киноны төрөл зүйлийг оруулна уу..."
              type="text"
              id="category"
              className="mt-1 block w-full py-2 px-2 border-slate-900 rounded-md shadow-sm"
            />
          </form>

          {/* Language input */}
          <form className="flex flex-col gap-2">
            <label htmlFor="language" className="block text-lg font-semibold ">
              Хэл
            </label>
            <input
              placeholder="Киноны хэлийг оруулна уу..."
              type="text"
              id="language"
              className="mt-1 block w-full py-2 px-2 border-slate-900 rounded-md shadow-sm"
            />
          </form>

          <form className="flex flex-col gap-2">
            <label htmlFor="language" className="block text-lg font-semibold ">
              Хадмал хэл
            </label>
            <input
              placeholder="Хадмал орчуулгын хэлийг оруулна уу..."
              type="text"
              id="language"
              className="mt-1 block w-full py-2 px-2 border-slate-900 rounded-md shadow-sm"
            />
          </form>

          {/* Location input */}
          <form className="flex flex-col gap-2">
            <label htmlFor="location" className="block text-lg font-semibold ">
              Байршил
            </label>
            <input
              placeholder="Байршилыг оруулна уу..."
              type="text"
              id="location"
              className="mt-1 block w-full py-2 px-2 border-slate-900 rounded-md shadow-sm"
            />
          </form>
        </div>
        <div className="flex flex-col justify-between bg-white shadow rounded-r-2xl p-10">
          <div>
            <label
              htmlFor="image"
              className="text-center block text-lg font-semibold text-gray-800 mb-2"
            >
              Постэр зураг
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              className="block w-full px-3 py-2 border border-slate-900 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
              onChange={handleImageChange}
            />
            {selectedImage && (
              <div className="mt-4 flex justify-center">
                <img
                  src={selectedImage}
                  alt="Selected preview"
                  className="max-w-full flex flex-col object-cover rounded-lg border border-slate-900 shadow-lg"
                />
              </div>
            )}
          </div>
          <div className="flex justify-end">
            <button className="px-5 py-2 rounded-lg bg-orange-400 font-semibold hover:bg-slate-900 hover:text-white">
              Шинээр нэмэх
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
