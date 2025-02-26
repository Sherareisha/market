const RevenueTable = () => {
    const data = [
      { date: "Sat, Aug 1 2024", customers: 120, revenue: "$1200", menu: "Seblak Setan" },
      { date: "Sun, Aug 2 2024", customers: 99, revenue: "$1123", menu: "Bakso Urat" },
      { date: "Mon, Aug 3 2024", customers: 80, revenue: "$1143", menu: "Seblak Balado" },
      { date: "Tue, Aug 4 2024", customers: 76, revenue: "$1200", menu: "Japanese Rice" },
      { date: "Wed, Aug 5 2024", customers: 87, revenue: "$1150", menu: "Bakso Beranak" },
    ];
  
    return (
      <div className="bg-white shadow-lg p-6 rounded-lg">
        <h2 className="text-lg font-bold mb-4">Revenue Table</h2>
        <table className="table-auto w-full text-left">
          <thead>
            <tr>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Customers</th>
              <th className="px-4 py-2">Revenue</th>
              <th className="px-4 py-2">Popular Menu</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-t">
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
  
  export default RevenueTable;