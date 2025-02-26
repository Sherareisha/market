import { FaShoppingCart } from "react-icons/fa";

const SalesTransaction = () => {
  const data = [
    { date: "Sat, Aug 1 2024", customers: 135, revenue: "$1350", menu: "Ayam Geprek" },
    { date: "Sun, Aug 2 2024", customers: 120, revenue: "$1280", menu: "Nasi Goreng Special" },
    { date: "Mon, Aug 3 2024", customers: 90, revenue: "$1000", menu: "Mie Goreng" },
    { date: "Tue, Aug 4 2024", customers: 78, revenue: "$920", menu: "Soto Ayam" },
    { date: "Wed, Aug 5 2024", customers: 95, revenue: "$1100", menu: "Ikan Bakar" },
  ];

  return (
    <div className="bg-blue-100 p-6 rounded-xl shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <FaShoppingCart className="text-blue-500 text-3xl" />
        <h2 className="text-2xl font-bold text-blue-700">Sales Transactions</h2>
      </div>
      <p className="text-blue-600 mb-4">Check out the latest transactions!</p>
      <table className="table-auto w-full bg-white rounded-lg shadow-lg">
        <thead className="bg-blue-200">
          <tr>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Customers</th>
            <th className="px-4 py-2">Revenue</th>
            <th className="px-4 py-2">Popular Menu</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className="hover:bg-blue-100 transition-all duration-200 border-t"
            >
              <td className="px-4 py-2">{item.date}</td>
              <td className="px-4 py-2">{item.customers}</td>
              <td className="px-4 py-2">{item.revenue}</td>
              <td className="px-4 py-2">{item.menu}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesTransaction;
