
function App() {
  return (
    <div className="min-h-screen">

      {/* Navbar */}
      <nav className="w-full border-b bg-white">
        <div className="max-w-7xl mx-auto px-6 py-0 flex items-center justify-between">

          {/* Logo + Shopcart */}
          <div className="flex items-center w-auto">

            <img
              src="https://i.pinimg.com/originals/11/ba/64/11ba64a31b83b3497045c2e3d8f5d6f3.png"
              alt="Shopcart Logo"
              className="w-32 h-[75px]"
            />

            <h1 className="text-2xl font-bold text-[#0b2945] translate-x-[-25px]">
              Shopcart
            </h1>

          </div>

          {/* Navigation */}
          <div className="flex items-center gap-10 text-[16px]">

            <a href="#" className="text-gray-700 hover:text-black">
              Categories
            </a>

            <a href="#" className="text-gray-700 hover:text-black">
              Deals
            </a>

            <a href="#" className="text-gray-700 hover:text-black">
              What's New
            </a>

            <a href="#" className="text-gray-700 hover:text-black">
              Delivery
            </a>

          </div>

          {/* Search */}
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-64 text-[17px]">

            <span className="text-gray-400 mr-2">
              ⌕
            </span>

            <input
              type="text"
              placeholder="Search Product"
              className="bg-transparent outline-none w-full text-sm"
            />

          </div>

          {/* Right side */}
          <div className="flex items-center gap-5 text-[16px]">

            <span className="cursor-pointer">
              👤 Account
            </span>

            <span className="cursor-pointer">
              🛒 Cart
            </span>

          </div>

        </div>
      </nav>

    </div>
  );
}

export default App;

