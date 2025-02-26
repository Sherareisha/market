import { FaCashRegister } from "react-icons/fa";

const Cashier = () => {
  const data = [
    { cashier: "John Doe", shift: "Pagi", transactions: 35, totalRevenue: "$850" },
    { cashier: "Jane Smith", shift: "Siang", transactions: 42, totalRevenue: "$1200" },
    { cashier: "Ali Khan", shift: "Sore", transactions: 30, totalRevenue: "$950" },
    { cashier: "Lisa Wong", shift: "Pagi", transactions: 28, totalRevenue: "$780" },
    { cashier: "Tom Brown", shift: "Siang", transactions: 25, totalRevenue: "$700" },
  ];

  return (
    <div className="bg-yellow-100 p-6 rounded-xl shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <FaCashRegister className="text-yellow-500 text-3xl" />
        <h2 className="text-2xl font-bold text-yellow-700">Cashier Overview</h2>
      </div>
      <p className="text-yellow-600 mb-4">Here's a summary of cashier transactions!</p>
      <table className="table-auto w-full bg-white rounded-lg shadow-lg">
        <thead className="bg-yellow-200">
          <tr>
            <th className="px-4 py-2">Cashier</th>
            <th className="px-4 py-2">Shift</th>
            <th className="px-4 py-2">Transactions</th>
            <th className="px-4 py-2">Total Revenue</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className="hover:bg-yellow-100 transition-all duration-200 border-t"
            >
              <td className="px-4 py-2">{item.cashier}</td>
              <td className="px-4 py-2">{item.shift}</td>
              <td className="px-4 py-2">{item.transactions}</td>
              <td className="px-4 py-2">{item.totalRevenue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cashier;