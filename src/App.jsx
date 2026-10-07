import { useState } from "react";
import heroImage from "./assets/hero-headphone.jpg.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import Profile from "./Profile";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const [showSort, setShowSort] = useState(false);

  const [addedProducts, setAddedProducts] = useState(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    return cart.map((item) => item.id);
  });

  const products = [
    {
      id: "1",
      name: "Wireless Earbuds, IPX8",
      price: 89,
      priceText: "$89.00",
      image:
        "https://images.unsplash.com/photo-1546435770-a3e426bf472b",
      description: "Organic Cotton, fairtrade certified",
      cartImage:
        "https://images.unsplash.com/photo-1546435770-a3e426bf472b",
    },
    {
      id: "2",
      name: "AirPods Max",
      price: 559,
      priceText: "$559.00",
      image:
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
      description: "A perfect balance of high-fidelity audio",
      cartImage:
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
    },
    {
      id: "3",
      name: "Bose BT Earphones",
      price: 289,
      priceText: "$289.00",
      image:
        "https://images.unsplash.com/photo-1583394838336-acd977736f90",
      description: "Table with air purifier, stained veneer/black",
      cartImage:
        "https://images.unsplash.com/photo-1583394838336-acd977736f90",
    },
    {
      id: "4",
      name: "VIVEFOX Headphones",
      price: 39,
      priceText: "$39.00",
      image:
        "https://cdn.mos.cms.futurecdn.net/NLpAsbaFXNVdkhFZbLrnrV.jpg",
      description: "Wired Stereo Headsets With Mic",
      cartImage:
        "https://cdn.mos.cms.futurecdn.net/NLpAsbaFXNVdkhFZbLrnrV.jpg",
    },
    {
      id: "5",
      name: "JBL TUNE 600BTNC",
      price: 59,
      priceText: "$59.00",
      image:
        "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a",
      description: "Premium Bone Conduction Open Ear Bluetooth",
      cartImage:
        "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a",
    },
    {
      id: "6",
      name: "TAGRY Bluetooth",
      price: 109,
      priceText: "$109.00",
      image:
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
      description: "256, 8 core GPU, 8 GB",
      cartImage:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    },
    {
      id: "7",
      name: "Monster MNFLEX",
      price: 89.75,
      priceText: "$89.75",
      image:
        "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1",
      description: "Flex Active Noise Canceling Bluetooth",
      cartImage:
        "https://images.unsplash.com/photo-1484704849700-f032a568e944",
    },
    {
      id: "8",
      name: "Mpow CH6",
      price: 569,
      priceText: "$569.00",
      image:
        "https://makerworld.bblmw.com/makerworld/model/US4d3c692ec4aa67/design/2024-07-06_93457225c973b8.jpeg",
      description: "Kids Headphones",
      cartImage:
        "https://images.unsplash.com/photo-1484704849700-f032a568e944",
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "low") {
      return a.price - b.price;
    }

    if (sortOption === "high") {
      return b.price - a.price;
    }

    return 0;
  });

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
      id: product.id,
      name: product.name,
      price: product.priceText,
      image: product.cartImage,
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    setAddedProducts([...addedProducts, product.id]);
  };

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
            <a href="#categories" className="text-gray-700 hover:text-black">
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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>

          {/* Right side */}
          <div className="flex items-center gap-5 text-[16px]">
            <Link to="/profile" className="cursor-pointer">
              👤 Account
            </Link>

            <Link to="/cart" className="cursor-pointer">
              🛒 Cart
            </Link>
          </div>

        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full px-6 mt-4">
        <div className="max-w-7xl mx-auto h-[250px] bg-[#fff4e6] rounded-lg flex items-center justify-between overflow-hidden">

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

          <div className="h-full mr-16">
            <div className="h-[250px] w-[380px] flex items-end justify-center ml-auto mr-8">
              <img
                src={heroImage}
                alt="Headphones"
                className="h-full w-auto object-contain scale-130"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Product Filter */}
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

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

          {/* Sort By */}
          <div className="relative">
            <button
              onClick={() => setShowSort(!showSort)}
              className="bg-white border border-black px-4 py-2 rounded-full text-sm text-gray-700 flex items-center gap-2"
            >
              Sort by

              <span className="w-1.5 h-1.5 border-r border-b border-gray-600 rotate-45 -translate-y-0.5"></span>
            </button>

            {showSort && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">

                <button
                  onClick={() => {
                    setSortOption("default");
                    setShowSort(false);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Default
                </button>

                <button
                  onClick={() => {
                    setSortOption("low");
                    setShowSort(false);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Price: Low to High
                </button>

                <button
                  onClick={() => {
                    setSortOption("high");
                    setShowSort(false);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Price: High to Low
                </button>

              </div>
            )}
          </div>

        </div>
      </section>

      {/* Headphones Section */}

      <section id="categories" className="w-full bg-white py-8">
        <div className="max-w-7xl mx-auto px-6">

          {searchTerm && (
            <p className="text-gray-500 mb-4">
              Search results for: "{searchTerm}"
            </p>
          )}

          {/* Products */}
          <div className="grid grid-cols-4 gap-5">

            {sortedProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
              >
                <div className="cursor-pointer">

                  <div className="relative w-[270px] h-[250px] bg-gray-100 rounded-lg flex items-center justify-center">

                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-[290px] h-[245px]"
                    />

                    <button
                      onClick={(e) => e.preventDefault()}
                      className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center"
                    >
                      ♡
                    </button>

                  </div>

                  <div className="mt-3">

                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-[15px]">
                        {product.name}
                      </h3>

                      <span className="font-bold text-[14px]">
                        {product.priceText}
                      </span>
                    </div>

                    <p className="text-xs text-gray-500 mt-2">
                      {product.description}
                    </p>

                    <p className="text-green-600 text-sm mt-2">
                      ★★★★★{" "}
                      <span className="text-gray-500 text-xs">
                        (121)
                      </span>
                    </p>

                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleAddToCart(product);
                      }}
                      className={`mt-3 px-5 py-2 rounded-full text-sm ${addedProducts.includes(product.id)
                          ? "bg-[#064e3b] text-white"
                          : "border border-gray-400"
                        }`}
                    >
                      Add to Cart
                    </button>

                  </div>

                </div>
              </Link>
            ))}

          </div>

          {/* No Results */}
          {searchTerm && sortedProducts.length === 0 && (
            <p className="text-center text-gray-500 mt-10">
              No products found.
            </p>
          )}

        </div>
      </section>

    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;