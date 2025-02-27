import {FaShoppingCart} from "react-icons/fa";

const SalesTransaction = () => {
  const data = [
    {
      date: "Sat, Aug 1 2024",
      customers: 135,
      revenue: "$1350",
      menu: "Ayam Geprek",
      sold: 45,
    },
    {
      date: "Sun, Aug 2 2024",
      customers: 120,
      revenue: "$1280",
      menu: "Nasi Goreng Special",
      sold: 38,
    },
    {
      date: "Mon, Aug 3 2024",
      customers: 90,
      revenue: "$1000",
      menu: "Mie Goreng",
      sold: 30,
    },
    {
      date: "Tue, Aug 4 2024",
      customers: 78,
      revenue: "$920",
      menu: "Soto Ayam",
      sold: 28,
    },
    {
      date: "Wed, Aug 5 2024",
      customers: 95,
      revenue: "$1100",
      menu: "Ikan Bakar",
      sold: 32,
    },
  ];

  return (
    <div className="p-6 bg-blue-100 shadow-lg rounded-xl">
      <div className="flex items-center gap-3 mb-6">
        <FaShoppingCart className="text-3xl text-blue-500" />
        <h2 className="text-2xl font-bold text-blue-700">Sales Transactions</h2>
      </div>
      <p className="mb-4 text-blue-600">Check out the latest transactions!</p>

      {/* Mode Table (Tablet & Desktop) */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full bg-white rounded-lg shadow-lg table-auto">
          <thead className="bg-blue-200">
            <tr>
              <th className="px-4 py-2 text-center">Date</th>
              <th className="px-4 py-2 text-center">Customers</th>
              <th className="px-4 py-2 text-center">Revenue</th>
              <th className="px-4 py-2 text-center">Menu</th>
              <th className="px-4 py-2 text-center">Sold</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className="transition-all duration-200 border-t hover:bg-blue-100"
              >
                <td className="px-4 py-2 text-center">{item.date}</td>
                <td className="px-4 py-2 text-center">{item.customers}</td>
                <td className="px-4 py-2 text-center">{item.revenue}</td>
                <td className="px-4 py-2 text-center">{item.menu}</td>
                <td className="px-4 py-2 text-center">{item.sold}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mode Card (Mobile) */}
      <div className="space-y-4 md:hidden">
        {data.map((item, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-lg shadow-md"
          >
            <p className="font-semibold text-gray-600">{item.date}</p>
            <p className="text-gray-500">Customers: {item.customers}</p>
            <p className="text-gray-500">Revenue: {item.revenue}</p>
            <div className="flex items-center justify-between mt-2">
              <p className="font-bold text-gray-700">{item.menu}</p>
              <p className="font-semibold text-blue-600">Sold: {item.sold}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesTransaction;
