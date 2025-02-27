import {FaClipboardList} from "react-icons/fa";

const MasterData = () => {
  const data = [
    {menu: "Seblak Setan", price: "$5", sold: 120},
    {menu: "Bakso Urat", price: "$6", sold: 99},
    {menu: "Seblak Balado", price: "$5", sold: 80},
    {menu: "Japanese Rice", price: "$7", sold: 76},
    {menu: "Bakso Beranak", price: "$9", sold: 87},
  ];

  return (
    <div className="p-6 bg-pink-100 shadow-lg rounded-xl">
      <div className="flex items-center gap-3 mb-6">
        <FaClipboardList className="text-3xl text-pink-500" />
        <h2 className="text-2xl font-bold text-pink-700">Master Data</h2>
      </div>
      <p className="mb-4 text-pink-600">
        All your business details in one place!
      </p>

      {/* Table View (Desktop & Tablet) */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full bg-white rounded-lg shadow-lg table-auto">
          <thead className="bg-pink-200">
            <tr>
              <th className="px-6 py-3 text-left">Menu</th>
              <th className="px-6 py-3 text-center">Price</th>
              <th className="px-6 py-3 text-center">Sold</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className="transition-all duration-200 border-t hover:bg-pink-100"
              >
                <td className="px-6 py-3">{item.menu}</td>
                <td className="px-6 py-3 text-center">{item.price}</td>
                <td className="px-6 py-3 text-center">{item.sold}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card View (Mobile) */}
      <div className="flex flex-col gap-4 md:hidden">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md"
          >
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-pink-700">
                {item.menu}
              </h3>
            </div>
            <div className="flex flex-col items-end">
              <p className="font-medium text-pink-600">{item.price}</p>
              <p className="text-pink-600">
                Sold: <span className="font-bold">{item.sold}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MasterData;
