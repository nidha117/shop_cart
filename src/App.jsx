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
  const [menuOpen, setMenuOpen] = useState(false);

  const [addedProducts, setAddedProducts] = useState(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    return cart.map((item) => item.id);
  });

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/mobile-accessories")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
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
    if (sortOption === "low") return a.price - b.price;
    if (sortOption === "high") return b.price - a.price;
    return 0;
  });

  const handleWishlist = (productId) => {
    setWishlist((previous) =>
      previous.includes(productId)
        ? previous.filter((id) => id !== productId)
        : [...previous, productId]
    );
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
    setAddedProducts((previous) => [...previous, product.id]);
  };

  const scrollToCategories = () => {
    setMenuOpen(false);
    document.getElementById("categories")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Navbar */}
      <nav className="w-full border-b bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2 flex flex-wrap items-center justify-between gap-3">

          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src="https://i.pinimg.com/originals/11/ba/64/11ba64a31b83b3497045c2e3d8f5d6f3.png"
              alt="Shopcart Logo"
              className="w-16 h-12 sm:w-24 sm:h-16 md:w-28 md:h-[70px] object-contain"
            />
            <h1 className="text-lg sm:text-2xl font-bold text-[#0b2945] -ml-3 sm:-ml-5">
              Shopcart
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8 text-sm lg:text-base">
            <a href="#categories" onClick={(e) => {
              e.preventDefault();
              scrollToCategories();
            }} className="text-gray-700 hover:text-black">
              Categories
            </a>
            <a href="#deals" className="text-gray-700 hover:text-black">
              Deals
            </a>
            <a href="#categories" className="text-gray-700 hover:text-black whitespace-nowrap">
              What's New
            </a>
            <a href="#delivery" className="text-gray-700 hover:text-black">
              Delivery
            </a>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-40 lg:w-60">
            <span className="text-gray-400 mr-2">⌕</span>
            <input
              type="text"
              placeholder="Search Product"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>

          {/* Desktop Account and Cart */}
          <div className="hidden md:flex items-center gap-3 lg:gap-5 text-sm lg:text-base">
            <Link to="/profile">Account</Link>
            <Link to="/cart">Cart</Link>
          </div>

          {/* Mobile Icons */}
          <div className="flex md:hidden items-center gap-4">
            <Link to="/cart" aria-label="Cart" className="text-xl">
              🛒
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="text-2xl text-gray-700"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="w-full md:hidden flex flex-col gap-4 border-t pt-4 pb-3 text-sm">
              <a href="#categories" onClick={(e) => {
                e.preventDefault();
                scrollToCategories();
              }}>Categories</a>
              <a href="#deals" onClick={() => setMenuOpen(false)}>Deals</a>
              <a href="#categories" onClick={() => setMenuOpen(false)}>What's New</a>
              <a href="#delivery" onClick={() => setMenuOpen(false)}>Delivery</a>

              <input
                type="text"
                placeholder="Search Product"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-gray-100 rounded-full px-4 py-2 outline-none w-full"
              />

              <Link to="/profile" onClick={() => setMenuOpen(false)}>
                Account
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full px-3 sm:px-6 mt-4">
        <div className="max-w-7xl mx-auto h-[230px] sm:h-[280px] bg-[#fff4e6] rounded-lg flex items-center overflow-hidden">

          <div className="w-[60%] sm:w-[58%] pl-4 sm:pl-8 md:pl-12 z-10">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#064e3b] leading-tight">
              Grab Upto 50% Off On
              <br />
              Selected Headphone
            </h2>

            <a
              href="#categories"
              className="mt-4 sm:mt-5 inline-block bg-[#064e3b] text-white px-4 sm:px-7 py-2 sm:py-3 rounded-full text-xs sm:text-sm"
            >
              Buy Now
            </a>
          </div>

          <div className="w-[40%] sm:w-[42%] h-full flex items-center justify-center">
            <img
              src={heroImage}
              alt="Headphones"
              className="w-full h-36 sm:h-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* Product Filters */}
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-4">

          <div className="flex items-center justify-between gap-3">
            {/* Horizontally scrollable filters */}
            <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto flex-1 min-w-0 pb-2">
              {["Headphone Type", "Price", "Review", "Color", "Material", "Offer", "All Filters"].map((filter) => (
                <button
                  key={filter}
                  className="shrink-0 bg-gray-100 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm text-gray-700"
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Sort By */}
            <div className="relative shrink-0">
              <button
                onClick={() => setShowSort(!showSort)}
                className="bg-white border border-black px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm flex items-center gap-2"
              >
                Sort by
                <span className="w-1.5 h-1.5 border-r border-b border-gray-600 rotate-45 -translate-y-0.5" />
              </button>

              {showSort && (
                <div className="absolute right-0 mt-2 w-44 sm:w-48 bg-white border rounded-lg shadow-lg z-20">
                  <button
                    onClick={() => {
                      setSortOption("default");
                      setShowSort(false);
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    Default
                  </button>
                  <button
                    onClick={() => {
                      setSortOption("low");
                      setShowSort(false);
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    Price: Low to High
                  </button>
                  <button
                    onClick={() => {
                      setSortOption("high");
                      setShowSort(false);
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    Price: High to Low
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Headphones Section */}
      <section id="categories" className="w-full bg-white py-5 sm:py-8">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">

          {searchTerm && (
            <p className="text-gray-500 mb-4 text-sm">
              Search results for: "{searchTerm}"
            </p>
          )}

          {isLoading && (
            <p className="text-center py-10">Loading products...</p>
          )}

          {error && (
            <p className="text-center text-red-500 py-10">{error}</p>
          )}

          {/* Responsive Product Grid */}
          {!isLoading && !error && (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-6 sm:gap-5">
              {sortedProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="block min-w-0"
                >
                  <div className="cursor-pointer min-w-0">

                    <div className="relative w-full aspect-square bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="w-full h-full object-contain"
                      />

                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleWishlist(product.id);
                        }}
                        aria-label="Add to wishlist"
                        className="absolute top-2 right-2 sm:top-3 sm:right-3 w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-full flex items-center justify-center"
                      >
                        {wishlist.includes(product.id) ? "♥" : "♡"}
                      </button>
                    </div>

                    <div className="mt-2 sm:mt-3">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                        <h3 className="font-semibold text-sm sm:text-base leading-snug break-words">
                          {product.name}
                        </h3>
                        <span className="font-bold text-sm shrink-0">
                          {product.priceText}
                        </span>
                      </div>

                      <p className="text-xs text-gray-500 mt-2 line-clamp-2">
                        {product.description}
                      </p>

                      <p className="text-green-600 text-sm mt-2">
                        ★★★★★{" "}
                        <span className="text-gray-500 text-xs">
                          ({product.rating ?? 0})
                        </span>
                      </p>

                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleAddToCart(product);
                        }}
                        className={`mt-3 w-full sm:w-auto px-3 sm:px-5 py-2 rounded-full text-xs sm:text-sm ${
                          addedProducts.includes(product.id)
                            ? "bg-[#064e3b] text-white"
                            : "border border-gray-400"
                        }`}
                      >
                        {addedProducts.includes(product.id)
                          ? "Added to Cart"
                          : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {!isLoading && !error && searchTerm && sortedProducts.length === 0 && (
            <p className="text-center text-gray-500 mt-10">
              No products found.
            </p>
          )}
        </div>
      </section>

      
    </>
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
