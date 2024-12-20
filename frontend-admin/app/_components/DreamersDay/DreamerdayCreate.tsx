"use client";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DreamersDay } from "./DreamdayMain";

export const DreamerdayCreate = ({
  closeDialog,
  eventData,
}: {
  closeDialog: () => void;
  eventData?: DreamersDay;
}) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    imageUrl: "",
    organizer: "",
    isActive: false,
    time: "",
  });

  useEffect(() => {
    console.log("Editing event data:", eventData);
    if (eventData) {
      setFormData({
        title: eventData.title,
        description: eventData.description,
        location: eventData.location,
        imageUrl: eventData.imageUrl,
        organizer: eventData.organizer,
        isActive: Boolean(eventData.isActive),
        time: eventData.time,
      });
    }
  }, [eventData]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const finalData = {
      title: formData.title,
      description: formData.description,
      time: formData.time,
      location: formData.location,
      imageUrl: formData.imageUrl,
      organizer: formData.organizer,
      isActive: formData.isActive,
    };

    try {
      const method = eventData ? "PUT" : "POST";
      const url = eventData
        ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/dreamersday/${eventData._id}`
        : `${process.env.NEXT_PUBLIC_BACKEND_URL}/dreamersday`;

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Server error:", errorData);
        toast.error(
          "Алдаа гарлаа: " + (errorData?.message || "Нэмэлт мэдээлэл байхгүй")
        );
      } else {
        toast.success(
          eventData ? "Эвент амжилттай шинэчлэгдлээ!" : "Шинэ эвент нэмэгдлээ!"
        );
        closeDialog();
      }
    } catch (error) {
      console.log("Алдаа:", error);
      toast.error("Системийн алдаа.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-orange-400 text-white p-5">
          <h2 className="text-2xl font-bold text-center">
            {eventData ? "Эвент засах" : "Шинэ эвент үүсгэх"}
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-8 flex flex-col gap-6 bg-gray-50"
        >
          <InputField
            label="Нэр"
            type="text"
            name="title"
            value={formData.title}
            placeholder="Эвентийн нэр оруулна уу"
            onChange={handleChange}
          />
          <InputField
            label="Тайлбар"
            type="text"
            name="description"
            value={formData.description}
            placeholder="Эвентийн тайлбар оруулна уу"
            onChange={handleChange}
          />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Идэвхтэй эсэх
            </label>
            <input
              type="checkbox"
              name="isActive"
              checked={formData.isActive} // Directly use the boolean value
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  isActive: e.target.checked, // Use boolean
                }))
              }
              className="rounded-lg border-2 border-gray-300 px-3 py-2 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-300"
            />
          </div>

          <InputField
            label="Байршил"
            type="text"
            name="location"
            value={formData.location}
            placeholder="Эвентийн байршил оруулна уу"
            onChange={handleChange}
          />
          <InputField
            label="Зохион байгуулагч"
            type="text"
            name="organizer"
            value={formData.organizer}
            placeholder="Зохион байгуулагчийн нэр оруулна уу"
            onChange={handleChange}
          />
          <InputField
            label="Огноо"
            type="datetime-local"
            name="time"
            value={formData.time}
            placeholder="Эвентийн огноо оруулна уу"
            onChange={handleChange}
          />
          <InputField
            label="Зураг"
            type="url"
            name="imageUrl"
            value={formData.imageUrl}
            placeholder="Эвентийн постерын зураг оруулна уу"
            onChange={handleChange}
          />
          <div className="flex justify-end gap-4 mt-4">
            <button
              type="button"
              onClick={closeDialog}
              className="px-6 py-2 bg-gray-200 font-semibold text-gray-800 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-300"
            >
              Цуцлах
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-orange-400 text-white font-semibold rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600 transition-all duration-300"
            >
              {eventData ? "Шинэчлэх" : "Үүсгэх"}
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
}: {
  label: string;
  type: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="w-full rounded-lg border-2 border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-300"
    />
  </div>
);

export default DreamerdayCreate;
