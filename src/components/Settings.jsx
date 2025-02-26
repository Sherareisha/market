import React, { useState, useEffect } from "react";

const Settings = () => {
    const [username, setUsername] = useState("Admin");
    const [email, setEmail] = useState("admin@example.com");
    const [theme, setTheme] = useState("Light");

    useEffect(() => {
        document.body.classList.toggle('dark-theme', theme === 'Dark');
    }, [theme]);

    const handleSave = () => {
        alert("Settings Saved! 🎉");
    };

    const handleThemeChange = (e) => {
        setTheme(e.target.value);
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">⚙️ Settings</h2>
            <div className="space-y-4">
                <div>
                    <label className="block text-gray-600 mb-1">Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-300"
                    />
                </div>
                <div>
                    <label className="block text-gray-600 mb-1">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-300"
                    />
                </div>
                <div>
                    <label className="block text-gray-600 mb-1">Theme</label>
                    <select
                        value={theme}
                        onChange={handleThemeChange}
                        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-300"
                    >
                        <option value="Light">Light</option>
                        <option value="Dark">Dark</option>
                    </select>
                </div>
                <button
                    onClick={handleSave}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                    Save Settings 💾
                </button>
            </div>
        </div>
    );
};

export default Settings;
