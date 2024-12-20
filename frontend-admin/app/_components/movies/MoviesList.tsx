import { Pencil, Trash2, Star } from "lucide-react";

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

export const MoviesList = ({
  movieData,
  handleEdit,
  handleDelete,
}: {
  movieData: Movie[];
  handleEdit: (movie: Movie) => void;
  handleDelete: (id: string) => void;
}) => {
  return (
    <div className="mt-10 mx-10">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
        <div className="p-6 bg-orange-400">
          <h2 className="text-2xl font-bold text-white text-center">
            Кино Жагсаалт
          </h2>
        </div>

        <div className="overflow-x-auto h-[800px] overflow-scroll">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                {[
                  "Постер",
                  "Нэр",
                  "Төрөл",
                  "Он",
                  "Зохиогч",
                  "Найруулагч",
                  "Үнэлгээ",
                  "Трейлер",
                  "Үйлдэл",
                ].map((header) => (
                  <th
                    key={header}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {movieData.map((movie) => (
                <tr
                  key={movie._id}
                  className="hover:bg-orange-100 transition-colors duration-200"
                >
                  <td className="px-6 py-4">
                    <img
                      src={movie.imageUrl}
                      alt={movie.title}
                      className="w-20 h-28 object-cover rounded-lg shadow-md"
                    />
                  </td>
                  <td className="px-6 py-4 font-semibold">
                    {movie.title} ({movie.releaseYear})
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {movie.genre.map((genre) => (
                        <span
                          key={genre}
                          className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full"
                        >
                          {genre}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">{movie.releaseYear}</td>
                  <td className="px-6 py-4">{movie.writer.join(", ")}</td>
                  <td className="px-6 py-4">{movie.director.join(", ")}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center text-yellow-500">
                      <Star size={16} fill="currentColor" className="mr-1" />
                      {movie.rating}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {movie.trailerUrl ? (
                      <a
                        href={movie.trailerUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-800 transition-colors"
                      >
                        Трейлер
                      </a>
                    ) : (
                      <span className="text-gray-400">Байхгүй</span>
                    )}
                  </td>
                  <td className="px-6 py-14 flex gap-3">
                    <button
                      onClick={() => handleEdit(movie)}
                      className="text-indigo-600 hover:text-indigo-800 p-2 rounded-full hover:bg-indigo-50 transition-all"
                      title="Засах"
                    >
                      <Pencil size={20} />
                    </button>
                    <button
                      onClick={() => handleDelete(movie._id)}
                      className="text-red-600 hover:text-red-800 p-2 rounded-full hover:bg-red-50 transition-all"
                      title="Устгах"
                    >
                      <Trash2 size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
