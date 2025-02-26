import React from "react";

const Navbar = ({ setActivePage }) => {
    return (
        <nav className="bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-lg p-4 sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo Section */}
                <h1 className="text-3xl font-extrabold text-white hover:text-gray-300 transition duration-300">
                    🛒 Sese Market
                </h1>
                
                {/* Navigation Menu */}
                <ul className="flex space-x-6 text-lg font-medium">
                    <li 
                        className="px-4 py-2 rounded-lg bg-purple-700 hover:bg-white hover:text-purple-700 transition duration-300 cursor-pointer"
                        onClick={() => setActivePage("Dashboard")}
                    >
                        Dashboard
                    </li>
                    <li 
                        className="px-4 py-2 rounded-lg bg-purple-700 hover:bg-white hover:text-purple-700 transition duration-300 cursor-pointer"
                        onClick={() => setActivePage("Orders")}
                    >
                        Orders
                    </li>
                    <li 
                        className="px-4 py-2 rounded-lg bg-purple-700 hover:bg-white hover:text-purple-700 transition duration-300 cursor-pointer"
                        onClick={() => setActivePage("Settings")}
                    >
                        Settings
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
