import { Pencil, Trash2, Star } from "lucide-react";
import { DreamersDay } from "./DreamdayMain";

const DreamersDayList = ({
  dreamersDayData,
  handleEdit,
  handleDelete,
}: {
  dreamersDayData: DreamersDay[];
  handleEdit: (movie: DreamersDay) => void;
  handleDelete: (id: string) => void;
}) => {
  return (
    <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
      <div className="p-6 bg-orange-400">
        <h2 className="text-2xl font-bold text-white text-center">
          Эвентийн Жагсаалт
        </h2>
      </div>

      <div className="overflow-x-auto h-[800px] overflow-scroll">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              {[
                "Постер",
                "Тайлбар",
                "Контент",
                "Байршил",
                "Зохион байгуулагч",
                "Огноо",
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
            {dreamersDayData.map((data) => (
              <tr
                key={data._id}
                className="hover:bg-orange-100 transition-colors duration-200"
              >
                <td className="px-6 py-4">
                  <img
                    src={data.imageUrl}
                    alt={data.title}
                    className="w-20 h-28 object-cover rounded-lg shadow-md"
                  />
                </td>
                <td className="px-6 py-4 font-semibold">{data.title}</td>
                <td className="px-6 py-4 font-semibold">{data.description}</td>
                <td className="px-6 py-4 font-semibold">{data.location}</td>
                <td className="px-6 py-4 font-semibold">{data.organizer}</td>
                <td className="px-6 py-4 font-semibold">{data.time}</td>
                <td className="px-6 py-14 flex gap-3">
                  <button
                    onClick={() => {
                      console.log("Editing event data:", data);
                      handleEdit(data);
                    }}
                    className="text-indigo-600 hover:text-indigo-800 p-2 rounded-full hover:bg-indigo-50 transition-all"
                    title="Засах"
                  >
                    <Pencil size={20} />
                  </button>
                  <button
                    onClick={() => handleDelete(data._id)}
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
  );
};

export default DreamersDayList;
