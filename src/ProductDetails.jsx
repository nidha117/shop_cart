function ProductDetails() {
  return (
    <div className="min-h-screen bg-white">

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <p className="text-sm text-gray-500">
          Electronics / Audio / Headphones / Shop Headphones by type /
          <span className="text-black font-semibold"> airpods-max</span>
        </p>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-6 mt-8">
        <div className="grid grid-cols-2 gap-12">

          {/* LEFT SIDE */}
          <div>
            <div className="h-[640px] bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
              <img
              src="https://images.unsplash.com/photo-1546435770-a3e426bf472b"
                alt="AirPods Max"
                className="w-[620px] h-[580px] object-contain"
              />
            </div>

            {/* Small Images */}
            <div className="flex gap-5 mt-5">

              <div className="w-[140px] h-[140px] bg-gray-100 rounded-lg flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1546435770-a3e426bf472b"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="w-[140px] h-[140px] bg-gray-100 rounded-lg"></div>

              <div className="w-[140px] h-[140px] bg-gray-100 rounded-lg"></div>

              <div className="w-[140px] h-[140px] bg-gray-100 rounded-lg"></div>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="pt-2">

            <h1 className="text-4xl font-bold text-black">
              Airpods- Max
            </h1>

            <p className="text-sm text-gray-600 mt-5 max-w-xl">
              a perfect balance of exhilarating high-fidelity audio and the
              effortless magic of AirPods.
            </p>

            {/* Rating */}
            <p className="text-green-600 mt-5">
              ★★★★★
              <span className="text-black ml-2">(121)</span>
            </p>

            <hr className="my-7" />

            {/* Price */}
            <h2 className="text-3xl font-bold text-black">
              $549.00 or 99.99/month
            </h2>

            <p className="text-sm text-gray-600 mt-3">
              Suggested payments with 6 months special financing
            </p>

            <hr className="my-7" />

            {/* Color */}
            <h3 className="text-xl font-semibold">
              Choose a Color
            </h3>

            <div className="flex gap-5 mt-5">

              <button className="w-12 h-12 rounded-full bg-red-400 ring-2 ring-[#064e3b] ring-offset-2"></button>

              <button className="w-12 h-12 rounded-full bg-gray-800"></button>

              <button className="w-12 h-12 rounded-full bg-green-100"></button>

              <button className="w-12 h-12 rounded-full bg-gray-200"></button>

              <button className="w-12 h-12 rounded-full bg-slate-700"></button>

            </div>

            <hr className="my-7" />

            {/* Quantity */}
            <div className="flex items-center gap-7">

              <div className="flex items-center justify-between w-[180px] bg-gray-100 rounded-full px-7 py-4">
                <button className="text-xl">−</button>
                <span className="font-semibold">1</span>
                <button className="text-xl">+</button>
              </div>

              <div>
                <p className="font-semibold">
                  Only <span className="text-orange-500">12 Items</span> Left!
                </p>
                <p className="text-sm text-gray-600">
                  Don't miss it
                </p>
              </div>

            </div>

            {/* Buttons */}
            <div className="flex gap-5 mt-7">

              <button className="flex-1 bg-[#064e3b] text-white py-4 rounded-full font-semibold">
                Buy Now
              </button>

              <button className="flex-1 border border-[#064e3b] text-[#064e3b] py-4 rounded-full font-semibold">
                Add to Cart
              </button>

            </div>

            {/* Delivery */}
            <div className="border rounded-lg mt-8">

              <div className="p-5 border-b">
                <h3 className="font-semibold">
                  🚚 Free Delivery
                </h3>

                <p className="text-sm text-gray-600 mt-3 underline">
                  Enter your Postal code for Delivery Availability
                </p>
              </div>

              <div className="p-5">
                <h3 className="font-semibold">
                  ↩ Return Delivery
                </h3>

                <p className="text-sm text-gray-600 mt-3">
                  Free 30days Delivery Returns.{" "}
                  <span className="underline">Details</span>
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>

    </div>
  );
}

export default ProductDetails;