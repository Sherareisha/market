import { FaClipboardList } from "react-icons/fa";

const MasterData = () => {
  const data = [
    { menu: "Seblak Setan", price: "$5", sold: 120 },
    { menu: "Bakso Urat", price: "$6", sold: 99 },
    { menu: "Seblak Balado", price: "$5", sold: 80 },
    { menu: "Japanese Rice", price: "$7", sold: 76 },
    { menu: "Bakso Beranak", price: "$9", sold: 87 },
  ];

  return (
    <div className="bg-pink-100 p-6 rounded-xl shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <FaClipboardList className="text-pink-500 text-3xl" />
        <h2 className="text-2xl font-bold text-pink-700">Master Data</h2>
      </div>
      <p className="text-pink-600 mb-4">All your business details in one place!</p>
      <table className="table-auto w-full bg-white rounded-lg shadow-lg">
        <thead className="bg-pink-200">
          <tr>
            <th className="px-4 py-2">Menu</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Sold</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className="hover:bg-pink-100 transition-all duration-200 border-t"
            >
              <td className="px-4 py-2">{item.menu}</td>
              <td className="px-4 py-2">{item.price}</td>
              <td className="px-4 py-2">{item.sold}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MasterData;