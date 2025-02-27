import {FaCashRegister} from "react-icons/fa";

const Cashier = () => {
  const data = [
    {
      cashier: "John Doe",
      shift: "Pagi",
      transactions: 35,
      totalRevenue: "$850",
    },
    {
      cashier: "Jane Smith",
      shift: "Siang",
      transactions: 42,
      totalRevenue: "$1200",
    },
    {
      cashier: "Ali Khan",
      shift: "Sore",
      transactions: 30,
      totalRevenue: "$950",
    },
    {
      cashier: "Lisa Wong",
      shift: "Pagi",
      transactions: 28,
      totalRevenue: "$780",
    },
    {
      cashier: "Tom Brown",
      shift: "Siang",
      transactions: 25,
      totalRevenue: "$700",
    },
  ];

  return (
    <div className="p-6 bg-yellow-100 shadow-lg rounded-xl">
      <div className="flex items-center gap-3 mb-6">
        <FaCashRegister className="text-3xl text-yellow-500" />
        <h2 className="text-2xl font-bold text-yellow-700">Cashier Overview</h2>
      </div>
      <p className="mb-4 text-yellow-600">
        Here's a summary of cashier transactions!
      </p>

      {/* Desktop & Tablet View */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] bg-white rounded-lg shadow-lg">
          <thead className="bg-yellow-200">
            <tr>
              <th className="px-6 py-3 text-left">Cashier</th>
              <th className="px-6 py-3 text-left">Shift</th>
              <th className="px-6 py-3 text-left">Transactions</th>
              <th className="px-6 py-3 text-left">Total Revenue</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className="transition-all duration-200 border-t hover:bg-yellow-100"
              >
                <td className="px-6 py-4">{item.cashier}</td>
                <td className="px-6 py-4">{item.shift}</td>
                <td className="px-6 py-4">{item.transactions}</td>
                <td className="px-6 py-4">{item.totalRevenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="mt-4 space-y-4 md:hidden">
        {data.map((item, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-lg shadow-md"
          >
            <h3 className="text-lg font-semibold">{item.cashier}</h3>
            <p className="text-sm text-gray-600">Shift: {item.shift}</p>
            <p className="text-sm text-gray-600">
              Transactions: {item.transactions}
            </p>
            <p className="text-sm font-semibold">
              Total Revenue: {item.totalRevenue}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cashier;
