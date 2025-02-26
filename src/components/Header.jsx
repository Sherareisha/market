const Header = () => {
  return (
    <div className="bg-gradient-to-r from-purple-300 to-purple-500 text-white p-8 rounded-lg shadow-lg flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-extrabold">Welcome to the Market Store</h1>
        <p className="text-gray-200 mt-2">Happy Shopping!</p>
      </div>
      <div>
        <img
          src="/img/logo.png" // Ganti URL dengan logo yang sesuai
          alt="Logo"
          className="w-12 h-12 "
        />
      </div>
    </div>
  );
};

export default Header;
