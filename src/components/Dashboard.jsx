import React, { useState } from "react";
import RevenueChart from "./RevenueChart";
import Orders from "./Orders";
import Settings from "./Settings";

const Dashboard = () => {
  const [tab, setTab] = useState("Dashboard");

  const renderContent = () => {
    switch (tab) {
      case "Orders":
        return <Orders />;
      case "Settings":
        return <Settings />;
      default:
        return <RevenueChart />;
    }
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <div className="w-1/5 bg-pink-500 text-white p-4">
        <h1 className="text-xl font-bold mb-4 text-center">🍰 FoodApp</h1>
        <ul className="space-y-4">
          <li
            className={`cursor-pointer ${tab === "Dashboard" ? "underline" : ""}`}
            onClick={() => setTab("Dashboard")}
          >
            Dashboard
          </li>
          <li
            className={`cursor-pointer ${tab === "Orders" ? "underline" : ""}`}
            onClick={() => setTab("Orders")}
          >
            Orders
          </li>
          <li
            className={`cursor-pointer ${tab === "Settings" ? "underline" : ""}`}
            onClick={() => setTab("Settings")}
          >
            Settings
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="bg-white rounded-lg p-4 shadow-md">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
