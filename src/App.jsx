import { useEffect, useState } from "react";
import heroImage from "./assets/hero-headphone.jpg.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import Profile from "./Profile";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const [showSort, setShowSort] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [products, setProducts] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState("");

  const [addedProducts, setAddedProducts] = useState(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    return cart.map((item) => item.id);
  }); 
 useEffect(() => {
  fetch("https://dummyjson.com/products/category/mobile-accessories")
    .then((res) => res.json())
    .then((data) => {
      const audioProducts = data.products
        .filter((p) =>
          /airpods|earphones|headphones|beats|speaker|homepod|charger|magsafe|watch|phone case|selfie stick/i.test(
            p.title + " " + p.tags?.join(" ")
          )
        )
        .slice(0, 8)
        .map((p) => ({
          id: String(p.id),
          name: p.title,
          price: p.price,
          priceText: `$${p.price.toFixed(2)}`,
          image: p.thumbnail,
          cartImage: p.thumbnail,
          description: p.description,
          rating: p.rating,
        }));

      setProducts(audioProducts);
    })
    .catch(() => setError("Unable to load products."))
    .finally(() => setIsLoading(false));
}, []);
 
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

  const handleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter((id) => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  };


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

            <a
              href="#categories"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("categories").scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="text-gray-700 hover:text-black cursor-pointer"
            >
              Categories
            </a>

            <a
              href="#"
              className="text-gray-700 hover:text-black"
            >
              Deals
            </a>

            <a
              href="#"
              className="text-gray-700 hover:text-black"
            >
              What's New
            </a>

            <a
              href="#"
              className="text-gray-700 hover:text-black"
            >
              Delivery
            </a>

          </div>

          {/* Search */}
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-64 text-[17px] cursor-pointer">

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

            <Link
              to="/profile"
              className="cursor-pointer">
              👤 Account
            </Link>

            <Link
              to="/cart"
              className="cursor-pointer"
            >
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

            <a
              href="#categories"
              className="mt-5 inline-block bg-[#064e3b] text-white px-7 py-3 rounded-full text-sm"
            >
              Buy Now
            </a>

          </div>

          <div className="h-full mr-16">

            <div className="h-[250px] w-[380px] flex items-end justify-center ml-auto mr-8">

              <img
                src={heroImage}
                alt="Headphones"
                className="h-full w-auto object-contain scale-130"/>
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
            </button>
          </div>

          {/* Sort By */}
          <div className="relative">

            <button
              onClick={() => setShowSort(!showSort)}
              className="bg-white border border-black px-4 py-2 rounded-full text-sm text-gray-700 flex items-center gap-2 cursor-pointer"
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
      <section
        id="categories"
        className="w-full bg-white py-8"
      >

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
                      onClick={(e) => {
                        e.preventDefault();
                        handleWishlist(product.id);
                      }}
                      className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center cursor-pointer"
                    >
                      {wishlist.includes(product.id) ? "♥" : "♡"}
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
                    
                      className={`mt-3 px-5 py-2 rounded-full text-sm cursor-pointer ${
                        addedProducts.includes(product.id)
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

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;