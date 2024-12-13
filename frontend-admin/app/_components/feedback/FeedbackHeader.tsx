"use client";
import { useState } from "react";
import { SearchIcon } from "@/public/Icons/SvgFiles";
import { FeedbackCreate } from "./FeedbackCreate";

export const FeedbackHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <div className="flex justify-between items-center">
      <div className="text-xl font-semibold">Feedback editor</div>
      <div className="flex items-center w-[1200px] bg-slate-300 pl-2 rounded-xl">
        <div className="w-8">
          <SearchIcon />
        </div>
        <input
          className="bg-slate-300 px-5 py-[5px] w-full rounded-xl"
          placeholder="Хайх"
          type="search"
        />
      </div>

      <button
        className="px-5 py-1 rounded-2xl font-semibold bg-orange-400 text-black hover:bg-slate-900 hover:text-white"
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
            <FeedbackCreate />
          </div>
        </div>
      )}
    </div>
  );
};
