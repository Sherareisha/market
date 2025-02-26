import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", revenue: 0 },
  { name: "Feb", revenue: 300 },
  { name: "Mar", revenue: 600 },
  { name: "Apr", revenue: 400 },
  { name: "May", revenue: 700 },
  { name: "Jun", revenue: 900 },
  { name: "Jul", revenue: 800 },
  { name: "Aug", revenue: 1200 },
];

const RevenueChart = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-bold mb-4">Revenue Chart</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="revenue" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;
