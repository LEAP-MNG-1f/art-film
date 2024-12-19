"use client";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Article } from "./ArticleHeader";

export const ArticleCreate = ({
  closeDialog,
  articleData,
}: {
  closeDialog: () => void;
  articleData?: Article;
}) => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: "",
  });

  useEffect(() => {
    if (articleData) {
      setFormData({
        title: articleData.title,
        content: articleData.content,
        image: articleData.image,
      });
    }
  }, [articleData]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const method = articleData ? "PUT" : "POST";
      const url = articleData
        ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/articles/${articleData._id}`
        : `${process.env.NEXT_PUBLIC_BACKEND_URL}/articles`;
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success(
          articleData ? "Article updated successfully!" : "New article added!"
        );
        closeDialog();
      } else {
        toast.error("Error occurred.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("System error.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-orange-400 text-white p-5">
          <h2 className="text-2xl font-bold text-center">
            {articleData ? "Edit Article" : "Create New Article"}
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-8 flex flex-col gap-6 bg-gray-50"
        >
          <div className="space-y-5">
            <InputField
              label="Title"
              type="text"
              name="title"
              value={formData.title}
              placeholder="Enter article title"
              onChange={handleChange}
              className="flex-grow"
            />
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Content
              </label>
              <textarea
                name="content"
                value={formData.content}
                placeholder="Enter article content"
                className="w-full rounded-lg border-2 border-gray-300 
                           px-3 py-2 focus:border-indigo-500 
                           focus:ring-2 focus:ring-indigo-200 
                           outline-none transition-all duration-300"
                rows={4}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="space-y-5">
            <InputField
              label="Image URL"
              type="url"
              name="image"
              value={formData.image}
              placeholder="Enter image URL"
              onChange={handleChange}
            />
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
              {articleData ? "Шинэчилэх" : "Үүсгэх"}
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
  className,
}: {
  label: string;
  type: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
      className="w-full rounded-lg border-2 border-gray-300 
                 px-3 py-2.5 focus:border-indigo-500 
                 focus:ring-2 focus:ring-indigo-200 
                 outline-none transition-all duration-300"
    />
  </div>
);

export default ArticleCreate;
