import React, { useState } from "react"; 
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import RevenueTable from "./components/RevenueTable";
import RevenueChart from "./components/RevenueChart";
import Dashboard from "./components/Dashboard";
import Cashier from "./components/Cashier";
import MasterData from "./components/MasterData";
import SalesTransaction from "./components/SalesTransaction";
import Navbar from "./components/Navbar";
import Orders from "./components/Orders";
import Settings from "./components/Settings";

const App = () => {
  const [activePage, setActivePage] = useState("Dashboard");

  const renderPage = () => {
    switch (activePage) {
      case "Dashboard":
        return (
          <div>
            <h2 className="text-2xl font-extrabold mb-6 text-blue-700">📊 Dashboard Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition">
                <h3 className="text-lg font-semibold text-gray-800">Revenue</h3>
                <p className="text-2xl font-bold text-blue-600">$12,345</p>
              </div>
              <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition">
                <h3 className="text-lg font-semibold text-gray-800">Sales</h3>
                <p className="text-2xl font-bold text-green-600">432</p>
              </div>
              <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition">
                <h3 className="text-lg font-semibold text-gray-800">Orders</h3>
                <p className="text-2xl font-bold text-orange-600">89</p>
              </div>
            </div>
            <div className="mt-8">
              <RevenueChart />
            </div>
            <div className="mt-6">
              <RevenueTable />
            </div>
          </div>
        );
      case "Cashier":
        return (
          <div>
            <h2 className="text-2xl font-extrabold mb-6 text-blue-700">💵 Cashier Panel</h2>
            <Cashier />
          </div>
        );
      case "Master Data":
        return (
          <div>
            <h2 className="text-2xl font-extrabold mb-6 text-blue-700">📂 Master Data Management</h2>
            <MasterData />
          </div>
        );
      case "Sales Transaction":
        return (
          <div>
            <h2 className="text-2xl font-extrabold mb-6 text-blue-700">🛒 Sales Transactions</h2>
            <SalesTransaction />
          </div>
        );
      case "Orders":
        return (
          <div>
            <h2 className="text-2xl font-extrabold mb-6 text-blue-700">📦 Orders</h2>
            <Orders />
          </div>
        );
      case "Settings":
        return (
          <div>
            <h2 className="text-2xl font-extrabold mb-6 text-blue-700">⚙️ Settings</h2>
            <Settings />
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar setActivePage={setActivePage} activePage={activePage} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar setActivePage={setActivePage} activePage={activePage} />
        <Header />
        <div className="flex-1 p-6 overflow-y-auto bg-gradient-to-t from-gray-50 to-white shadow-inner rounded-tl-lg">
          <div className="p-4 bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg shadow-lg">
            {renderPage()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
