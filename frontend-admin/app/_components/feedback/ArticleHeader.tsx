"use client";
import { useState } from "react";
import { SearchIcon } from "@/public/Icons/SvgFiles";
import { AritcleCreate } from "./ArticleCreate";

export const ArticleHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <div className="flex justify-between items-center px-5 py-2 border-b-2 pt-[50px]">
      <div className="text-2xl font-bold text-gray-800">Articles Editor</div>
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
          className="px-5 py-1 rounded-lg font-semibold bg-orange-400 text-white hover:bg-orange-600 hover:text-white"
          onClick={handleModalOpen}
        >
          Create
        </button>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="w-[800] bg-white rounded-lg shadow-lg relative">
              <button
                className="absolute top-2 right-2 text-black text-xl"
                onClick={handleModalClose}
              >
                &times;
              </button>
              <AritcleCreate />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
