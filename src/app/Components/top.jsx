const Top = () => {
  return (
    <header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-gray-800 text-white">
        <div className="logo">
          <h1>My Portfolio</h1>
        </div>
        <div className="search ">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
          />
        </div>
        <div className="login">
          <div className="flex justify-end">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Top;
