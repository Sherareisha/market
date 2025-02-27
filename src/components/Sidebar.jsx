const Sidebar = ({setActivePage, activePage}) => {
  const menuItems = [
    {name: "Dashboard", icon: "📊"},
    {name: "Cashier", icon: "💰"},
    {name: "Master Data", icon: "📋"},
    {name: "Sales Transaction", icon: "🛒"},
    {name: "Settings", icon: "⚙️"},
  ];

  return (
    <div className="flex flex-col justify-between w-64 h-screen text-black shadow-xl bg-gradient-to-b from-purple-100 to-purple-300">
      <div>
        <div className="flex flex-col items-center justify-center p-6">
          <img
            src="/img/logo.png"
            alt="Logo"
            className="w-16 h-16 mb-4 animate-bounce"
          />
          <h1 className="text-2xl font-extrabold">✨ Sese Mart ✨</h1>
          <p className="text-sm italic">Your friendly business buddy!</p>
        </div>
        <ul className="mt-4">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={`p-4 text-lg cursor-pointer hover:bg-purple-400 hover:text-white transition-all duration-300 rounded-lg mx-2 mt-2 ${
                activePage === item.name
                  ? "bg-purple-600 text-white font-extrabold"
                  : ""
              }`}
              onClick={() => setActivePage(item.name)}
            >
              <span className="mr-2">{item.icon}</span> {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="pb-4 text-center">
        <p className="text-sm text-purple-800">Made with ❤️ by Sese Mart</p>
        <p className="text-xs">Your smiles are our success!</p>
      </div>
    </div>
  );
};

export default Sidebar;
