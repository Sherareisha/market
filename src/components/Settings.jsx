import React, {useState, useEffect} from "react";
import "./styles.css"; // Import a CSS file to manage themes

const Settings = () => {
  const [username, setUsername] = useState("Admin");
  const [email, setEmail] = useState("admin@example.com");
  const [theme, setTheme] = useState("Light");

  useEffect(() => {
    document.body.classList.toggle("dark-theme", theme === "Dark");
  }, [theme]);

  const handleSave = () => {
    alert("Settings Saved! 🎉");
  };

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  return (
    <div
      className={`settings-container ${theme === "Dark" ? "dark" : "light"}`}
    >
      <h2 className="mb-4 text-2xl font-bold text-blue-600">⚙️ Settings</h2>
      <div className="space-y-4">
        <div>
          <label className="block mb-1 text-gray-600">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <div>
          <label className="block mb-1 text-gray-600">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <div>
          <label className="block mb-1 text-gray-600">Theme</label>
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
          className="px-4 py-2 text-white transition bg-blue-500 rounded hover:bg-blue-700"
        >
          Save Settings 💾
        </button>
      </div>
    </div>
  );
};

export default Settings;
