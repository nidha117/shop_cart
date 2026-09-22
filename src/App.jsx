import heroImage from "./assets/hero-headphone.jpg.png";
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
      {/* Hero Section */}
      <section className="w-full px-6 mt-4">
        <div className="max-w-7xl mx-auto h-[250px] bg-[#fff4e6] rounded-lg flex items-center justify-between overflow-hidden">

          {/* Left Content */}
          <div className="ml-16">
            <h2 className="text-4xl font-bold text-[#064e3b] leading-tight">
              Grab Upto 50% Off On
              <br />
              Selected Headphone
            </h2>

            <button className="mt-5 bg-[#064e3b] text-white px-7 py-3 rounded-full text-sm">
              Buy Now
            </button>
          </div>

          {/* Right Image */}
          <div className="h-full mr-16">
            {/* Image */}
            <div className="h-[250px] w-[380px] flex items-end justify-center ml-auto mr-8">
              <img
                src={heroImage}
                alt="Headphones"
                className="h-full w-auto object-contain  scale-130"
              />
            </div>
          </div>

        </div>
      </section>
       {/* Product Filter */}
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          {/* Left Filters */}
          <div className="flex items-center gap-3">

            <button className="bg-gray-100 px-4 py-2 rounded-full text-sm text-gray-700 flex items-center gap-2">
              Headphone Type
              <span className="w-1.5 h-1.5 border-r border-b border-gray-600 rotate-45 -translate-y-0.5"></span>
            </button>

            <button className="bg-gray-100 px-4 py-2 rounded-full text-sm text-gray-700 flex items-center gap-2">
              Price
              <span className="w-1.5 h-1.5 border-r border-b border-gray-600 rotate-45 -translate-y-0.5"></span>
            </button>

            <button className="bg-gray-100 px-4 py-2 rounded-full text-sm text-gray-700 flex items-center gap-2">
              Review
              <span className="w-1.5 h-1.5 border-r border-b border-gray-600 rotate-45 -translate-y-0.5"></span>
            </button>

            <button className="bg-gray-100 px-4 py-2 rounded-full text-sm text-gray-700 flex items-center gap-2">
              Color
              <span className="w-1.5 h-1.5 border-r border-b border-gray-600 rotate-45 -translate-y-0.5"></span>
            </button>
            <button className="bg-gray-100 px-4 py-2 rounded-full text-sm text-gray-700 flex items-center gap-2">
              Material
              <span className="w-1.5 h-1.5 border-r border-b border-gray-600 rotate-45 -translate-y-0.5"></span>
            </button>

            <button className="bg-gray-100 px-4 py-2 rounded-full text-sm text-gray-700 flex items-center gap-2">
              Offer
              <span className="w-1.5 h-1.5 border-r border-b border-gray-600 rotate-45 -translate-y-0.5"></span>
            </button>

            <button className="bg-gray-100 px-4 py-2 rounded-full text-sm text-gray-700 flex items-center gap-2">
              All Filters

              <span className="flex flex-col gap-[1px]">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-[1px] bg-gray-700"></span>
                  <span className="w-[3px] h-[3px] rounded-full bg-gray-700"></span>
                </span>

                <span className="flex items-center gap-1">
                  <span className="w-[3px] h-[3px] rounded-full bg-gray-700"></span>
                  <span className="w-2.5 h-[1px] bg-gray-700"></span>
                </span>

                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-[1px] bg-gray-700"></span>
                  <span className="w-[3px] h-[3px] rounded-full bg-gray-700"></span>
                </span>
              </span>
            </button>

          </div>

          {/* Sort */}
          <button className="bg-white border border-black px-4 py-2 rounded-full text-sm text-gray-700 flex items-center gap-2">
            Sort by
            <span className="w-1.5 h-1.5 border-r border-b border-gray-600 rotate-45 -translate-y-0.5"></span>
          </button>

        </div>
      </section>
       {/* Headphones Section */}
      <section className="w-full bg-white py-8">
        <div className="max-w-7xl mx-auto px-6">

          {/* Title */}
          <h2 className="text-2xl font-bold text-black mb-6">
            Headphones For You!
          </h2>
          {/* Products */}
          <div className="grid grid-cols-4 gap-5">

            {/* Product 1 */}
            <div>
              <div className="relative w-[270px]  h-[250px] bg-gray-100 rounded-lg flex items-center justify-center">

               
                <button className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center">
                  ♡
                </button>
              </div>

              <div className="mt-3">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-[15px]">
                    Wireless Earbuds, IPX8
                  </h3>

                  <span className="font-bold text-[14px]">
                    $89.00
                  </span>
                </div>

                <p className="text-xs text-gray-500 mt-2">
                  Organic Cotton, fairtrade certified
                </p>

                <p className="text-green-600 text-sm mt-2">
                  ★★★★★ <span className="text-gray-500 text-xs">(121)</span>
                </p>

                <button className="mt-3 px-5 py-2 border border-gray-400 rounded-full text-sm">
                  Add to Cart
                </button>
              </div>
            </div>


            {/* Product 2 */}
            <div>
              <div className="relative w-[270px]  h-[250px]  bg-gray-100 rounded-lg flex items-center justify-center">

                

                <button className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center">
                  ♡
                </button>
              </div>

              <div className="mt-3">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-[15px]">
                    AirPods Max
                  </h3>

                  <span className="font-bold text-[14px]">
                    $559.00
                  </span>
                </div>

                <p className="text-xs text-gray-500 mt-2">
                  A perfect balance of high-fidelity audio
                </p>

                <p className="text-green-600 text-sm mt-2">
                  ★★★★★ <span className="text-gray-500 text-xs">(121)</span>
                </p>

                <button className="mt-3 px-5 py-2 bg-[#064d3b] text-white rounded-full text-sm">
                  Add to Cart
                </button>
              </div>
            </div>


            {/* Product 3 */}
            <div>
              <div className="relative w-[270px]  h-[250px]  bg-gray-100 rounded-lg flex items-center justify-center">

              

                <button className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center">
                  ♡
                </button>
              </div>

              <div className="mt-3">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-[15px]">
                    Bose BT Earphones
                  </h3>

                  <span className="font-bold text-[14px]">
                    $289.00
                  </span>
                </div>

                <p className="text-xs text-gray-500 mt-2">
                  Table with air purifier, stained veneer/black
                </p>

                <p className="text-green-600 text-sm mt-2">
                  ★★★★★ <span className="text-gray-500 text-xs">(121)</span>
                </p>

                <button className="mt-3 px-5 py-2 border border-gray-400 rounded-full text-sm">
                  Add to Cart
                </button>
              </div>
            </div>


            {/* Product 4 */}
            <div>
              <div className="relative w-[270px]  h-[250px]  bg-gray-100 rounded-lg flex items-center justify-center">

               

                <button className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center">
                  ♡
                </button>
              </div>

              <div className="mt-3">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-[15px]">
                    VIVEFOX Headphones
                  </h3>

                  <span className="font-bold text-[14px]">
                    $39.00
                  </span>
                </div>

                <p className="text-xs text-gray-500 mt-2">
                  Wired Stereo Headsets With Mic
                </p>

                <p className="text-green-600 text-sm mt-2">
                  ★★★★★ <span className="text-gray-500 text-xs">(121)</span>
                </p>

                <button className="mt-3 px-5 py-2 border border-gray-400 rounded-full text-sm">
                  Add to Cart
                </button>
              </div>
            </div>

          </div>
        </div>

      </section>
      <div className="px-6 pb-10">
    <div className="grid grid-cols-4 gap-5">


            {/* Product 5 */}
            <div>
              <div className="relative w-[270px]  h-[250px]  bg-gray-100 rounded-lg flex items-center justify-center">

             
                <button className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center">
                  ♡
                </button>

              </div>

              <div className="mt-3">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-[15px]">
                    JBL TUNE 600BTNC
                  </h3>

                  <span className="font-bold text-[14px]">
                    $59.00
                  </span>
                </div>

                <p className="text-xs text-gray-500 mt-2">
                  Premium Bone Conduction Open Ear Bluetooth
                </p>

                <p className="text-green-600 text-sm mt-2">
                  ★★★★★ <span className="text-gray-500 text-xs">(121)</span>
                </p>

                <button className="mt-3 px-5 py-2 border border-gray-400 rounded-full text-sm">
                  Add to Cart
                </button>
              </div>
            </div>


            {/* Product 6 */}
            <div>
              <div className="relative w-[270px]  h-[250px]  bg-gray-100 rounded-lg flex items-center justify-center">

              

                <button className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center">
                  ♡
                </button>

              </div>

              <div className="mt-3">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-[15px]">
                    TAGRY Bluetooth
                  </h3>

                  <span className="font-bold text-[14px]">
                    $109.00
                  </span>
                </div>

                <p className="text-xs text-gray-500 mt-2">
                  256, 8 core GPU, 8 GB
                </p>

                <p className="text-green-600 text-sm mt-2">
                  ★★★★★ <span className="text-gray-500 text-xs">(121)</span>
                </p>

                <button className="mt-3 px-5 py-2 border border-gray-400 rounded-full text-sm">
                  Add to Cart
                </button>
              </div>
            </div>


            {/* Product 7 */}
            <div>
              <div className="relative w-[270px]  h-[250px]  bg-gray-100 rounded-lg flex items-center justify-center">

                <button className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center">
                  ♡
                </button>

              </div>

              <div className="mt-3">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-[15px]">
                    Monster MNFLEX
                  </h3>

                  <span className="font-bold text-[14px]">
                    $89.75
                  </span>
                </div>

                <p className="text-xs text-gray-500 mt-2">
                  Flex Active Noise Canceling Bluetooth
                </p>

                <p className="text-green-600 text-sm mt-2">
                  ★★★★★ <span className="text-gray-500 text-xs">(121)</span>
                </p>

                <button className="mt-3 px-5 py-2 border border-gray-400 rounded-full text-sm">
                  Add to Cart
                </button>
              </div>
            </div>


            {/* Product 8 */}
            <div>
              <div className="relative w-[270px]  h-[250px]  bg-gray-100 rounded-lg flex items-center justify-center">

              

                <button className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center">
                  ♡
                </button>

              </div>

              <div className="mt-3">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-[15px]">
                    Mpow CH6
                  </h3>

                  <span className="font-bold text-[14px]">
                    $569.00
                  </span>
                </div>

                <p className="text-xs text-gray-500 mt-2">
                  Kids Headphones
                </p>

                <p className="text-green-600 text-sm mt-2">
                  ★★★★★ <span className="text-gray-500 text-xs">(121)</span>
                </p>

                <button className="mt-3 px-5 py-2 border border-gray-400 rounded-full text-sm">
                  Add to Cart
                </button>
              </div>
            </div>

          </div>
        </div>
        </div>
     




    
  );
}

export default App;

