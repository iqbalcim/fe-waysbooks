import React from "react";
import { styles } from "../../style";

const IncomeTransaction = () => {
  return (
    <div className="px-[170px]">
      <h1 className={`${styles.heading3} mt-24 mb-10`}>Incoming Transaction</h1>

      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
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
                Evidence of Transfer
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
            <tr className="bg-[#fff] border-b">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                1
              </th>
              <td className="py-4 px-6 text-black">Radif Ganteng</td>
              <td className="py-4 px-6 text-blue-500">bca.jpg</td>
              <td className="py-4 px-6 text-black">My Own Private Mr. Cool</td>
              <td className="py-4 px-6 text-green-500">Rp 100.000</td>
              <td className="py-4 px-6 text-green-500">Approve</td>
            </tr>
            <tr className="bg-[#fff] border-b">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                1
              </th>
              <td className="py-4 px-6 text-black">Radif Ganteng</td>
              <td className="py-4 px-6 text-blue-500">bca.jpg</td>
              <td className="py-4 px-6 text-black">My Own Private Mr. Cool</td>
              <td className="py-4 px-6 text-green-500">Rp 100.000</td>
              <td className="py-4 px-6 text-green-500">Approve</td>
            </tr>
            <tr className="bg-[#fff] border-b">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                1
              </th>
              <td className="py-4 px-6 text-black">Radif Ganteng</td>
              <td className="py-4 px-6 text-blue-500">bca.jpg</td>
              <td className="py-4 px-6 text-black">My Own Private Mr. Cool</td>
              <td className="py-4 px-6 text-green-500">Rp 100.000</td>
              <td className="py-4 px-6 text-green-500">Approve</td>
            </tr>
            <tr className="bg-[#fff] border-b">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                1
              </th>
              <td className="py-4 px-6 text-black">Radif Ganteng</td>
              <td className="py-4 px-6 text-blue-500">bca.jpg</td>
              <td className="py-4 px-6 text-black">My Own Private Mr. Cool</td>
              <td className="py-4 px-6 text-green-500">Rp 100.000</td>
              <td className="py-4 px-6 text-green-500">Approve</td>
            </tr>
            <tr className="bg-[#fff] border-b">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                1
              </th>
              <td className="py-4 px-6 text-black">Radif Ganteng</td>
              <td className="py-4 px-6 text-blue-500">bca.jpg</td>
              <td className="py-4 px-6 text-black">My Own Private Mr. Cool</td>
              <td className="py-4 px-6 text-green-500">Rp 100.000</td>
              <td className="py-4 px-6 text-green-500">Approve</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IncomeTransaction;
