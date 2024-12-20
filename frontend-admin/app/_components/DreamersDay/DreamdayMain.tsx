"use client";
import { useEffect, useState } from "react";
import { SearchIcon } from "lucide-react";
import { DreamerdayCreate } from "./DreamerdayCreate";
import DreamersDayList from "./DreamersDayList";
import { toast } from "react-toastify";

export type DreamersDay = {
  _id: string;
  title: string;
  description: string;
  time: string;
  location: string;
  imageUrl: string;
  organizer: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export const DreamerdayMain = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dreamersDay, setDreamersDay] = useState<DreamersDay[]>([]);
  const [selectedArticle, setSelectedDreamersDay] = useState<
    DreamersDay | undefined
  >(undefined);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/dreamersday`
      );
      const data = await response.json();
      setDreamersDay(data.data);
    } catch (error) {
      console.error("Error fetching dreamersDay:", error);
      setDreamersDay([]);
    }
  };

  const handleModalOpen = (article?: DreamersDay) => {
    setSelectedDreamersDay(article);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedDreamersDay(undefined);
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/dreamersday/${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        setDreamersDay((prevData) =>
          prevData.filter((article) => article._id !== id)
        );
        toast.success("Кино амжилттай устгагдлаа");
      }
    } catch (error) {
      toast.error("Киноог устгахад алдаа гарлаа");
    }
  };

  const handleEdit = (article: DreamersDay) => {
    setSelectedDreamersDay(article);
    setIsModalOpen(true); // Open the modal
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="">
      <div className="flex justify-between items-center px-5 py-2 border-b-2 pt-[50px]">
        <div className="text-2xl font-bold text-gray-800">
          Dreamer's Day Editor
        </div>
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
            onClick={() => handleModalOpen()}
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
                {isModalOpen && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <DreamerdayCreate
                      closeDialog={handleModalClose}
                      eventData={selectedArticle}
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex m-10 overflow-scroll">
        <DreamersDayList
          dreamersDayData={dreamersDay}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};
