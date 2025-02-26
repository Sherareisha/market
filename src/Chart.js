// import React, { useEffect } from "react";
// import Navbar from "./Navbar";
// import { Chart } from "chart.js";

// const RevenueChart = () => {
//   useEffect(() => {
//     // Inisialisasi Chart.js
//     const ctx = document.getElementById("revenueChart").getContext("2d");
//     new Chart(ctx, {
//       type: "line",
//       data: {
//         labels: ["January", "February", "March", "April", "May", "June"],
//         datasets: [
//           {
//             label: "Revenue",
//             data: [300, 500, 400, 600, 700, 800],
//             borderColor: "rgba(99, 102, 241, 1)", // Warna garis (purple)
//             backgroundColor: "rgba(99, 102, 241, 0.2)", // Warna area
//             borderWidth: 2,
//           },
//         ],
//       },
//       options: {
//         responsive: true,
//         plugins: {
//           legend: {
//             display: true,
//           },
//         },
//         scales: {
//           x: {
//             title: {
//               display: true,
//               text: "Months",
//             },
//           },
//           y: {
//             title: {
//               display: true,
//               text: "Revenue ($)",
//             },
//           },
//         },
//       },
//     });
//   }, []);

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       {/* Navbar */}
//       <Navbar />

//       {/* Chart Section */}
//       <div className="p-6">
//         <h2 className="text-2xl font-bold mb-4">Revenue Over Time</h2>
//         <div className="bg-white shadow-md rounded-lg p-6">
//           <canvas id="revenueChart" className="w-full h-64"></canvas>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RevenueChart;
