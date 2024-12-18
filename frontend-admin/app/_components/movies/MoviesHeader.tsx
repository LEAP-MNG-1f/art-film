"use client";
import { SearchIcon } from "@/public/Icons/SvgFiles";
import { MovieCreate } from "./MovieCreate";
import { useState } from "react";

export const MoviesHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <div className="flex justify-between items-center px-5 py-2 border-b-2 pt-[50px]">
      <div className="text-2xl font-bold text-gray-800">Movie Editor</div>
      <div className="flex gap-5">
        <div className="flex items-center bg-gray-100 border border-gray-300 pl-2 rounded-lg">
          <div className="w-8 text-gray-500">
            <SearchIcon />
          </div>
          <input
            className="bg-gray-100 px-4 py-2 w-full rounded-lg outline-none text-gray-700"
            placeholder="Хайх"
            type="search"
          />
        </div>

        <button
          className="px-6 py-2 rounded-lg font-semibold bg-orange-400 text-white hover:bg-orange-600 transition-all"
          onClick={handleModalOpen}
        >
          Create
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-[500px] p-6 relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={handleModalClose}
            >
              ✖
            </button>
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Create Movie
            </h2>
            <MovieCreate closeDialog={handleModalClose} />
          </div>
        </div>
      )}
    </div>
  );
};
