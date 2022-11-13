import * as React from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { API } from "../../config/api";
import { styles } from "../../style";

const ListBookAdmin = () => {
  const navigate = useNavigate();

  let { data: books, refetch } = useQuery("ListbooksCache", async () => {
    const response = await API.get("/books");
    return response.data.data;
  });

  const handleDelete = async (id) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await API.delete(`/book/${id}`);
      console.log(response);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="px-[170px]">
      <h1 className={`${styles.heading3} mt-24 mb-10`}>List Book</h1>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 bg-[#F1F1F1]">
            <tr>
              <th scope="col" className="py-3 px-6 text-red-500">
                No
              </th>
              <th scope="col" className="py-3 px-6 text-red-500">
                Title
              </th>
              <th scope="col" className="py-3 px-6 text-red-500">
                Thumbnail
              </th>
              <th scope="col" className="py-3 px-6 text-red-500">
                Price
              </th>
              <th scope="col" className="py-3 px-6 text-red-500">
                Detail
              </th>
              <th scope="col" className="py-3 px-6 text-red-500">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {books?.map((book, index) => (
              <tr className="bg-[#fff] border-b">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                >
                  {index + 1}
                </th>
                <td className="py-4 px-6 text-black">{book.title}</td>
                <td className="py-4 px-6 text-black">
                  <img
                    src={book.thumbnail}
                    alt={book.title}
                    className="w-20 h-20"
                  />
                </td>
                <td className="py-4 px-6 text-blue-500">{book.price}</td>
                <td className="py-4 px-6 text-black ">
                  <button
                    className="bg-blue-300 text-white py-1 px-2 rounded font-bold font-avanir"
                    onClick={() => navigate(`/detail-book/${book.id}`)}
                  >
                    Detail
                  </button>
                </td>
                <td className="py-4 px-6 ">
                  <div className="flex">
                    <button className="bg-green-400 text-white py-1 px-2 rounded font-bold font-avanir mr-3" onClick={() => navigate(`/update-book/${book.id}`)}>
                      Edit
                    </button>
                    <button
                      className="bg-red-400 text-white py-1 px-2 rounded font-bold font-avanir"
                      onClick={() => handleDelete(book.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListBookAdmin;
