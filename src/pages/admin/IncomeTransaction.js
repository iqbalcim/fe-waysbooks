import React from "react";
import { useQuery } from "react-query";
import { API } from "../../config/api";
import { styles } from "../../style";
import convertRupiah from "rupiah-format";

const IncomeTransaction = () => {
  let { data: incomeTransaction, refetch } = useQuery(
    "incomeTransactionCache",
    async () => {
      const response = await API.get("/transactions");
      return response.data.data;
    }
  );

  return (
    <div className="px-[170px]">
      <h1 className={`${styles.heading3} mt-24 mb-10`}>Incoming Transaction</h1>

      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 bg-[#F1F1F1]">
            <tr>
              <th scope="col" className="py-3 px-6 text-red-500">
                No
              </th>
              <th scope="col" className="py-3 px-6 text-red-500">
                Users
              </th>
              <th scope="col" className="py-3 px-6 text-red-500">
                Product Purchased
              </th>
              <th scope="col" className="py-3 px-6 text-red-500">
                Total Payment
              </th>
              <th scope="col" className="py-3 px-6 text-red-500">
                Status Payment
              </th>
            </tr>
          </thead>
          <tbody>
            {incomeTransaction?.map((transaction, index) => (
              <tr className="bg-[#fff] border-b">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                >
                  {index + 1}
                </th>
                <td className="py-4 px-6 text-black">
                  {transaction.user.name}
                </td>
                <td className="py-4 px-6 text-black">
                  {[...transaction.books].map((book) => book.title).join(",")}
                </td>
                <td className="py-4 px-6 text-green-500">
                  {convertRupiah.convert(transaction.totalpayment)}
                </td>
                <td className="py-4 px-6 text-green-500">
                  {transaction.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IncomeTransaction;
