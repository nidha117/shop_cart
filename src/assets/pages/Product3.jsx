import whiteImage from "../white-headphone.png";
import blueImage from "../blue-headphone.png";
import ReddImage from "../redd-headphone.png";
function Product3() {
  return (
    <div className="min-h-screen bg-white">

      {/* Breadcrumb */}
      <div className="max-w-5xl mx-auto px-5 pt-4">
        <p className="text-xs text-gray-500">
          Electronics / Audio / Earphones /
          <span className="text-black font-semibold"> Bose BT Earphones</span>
        </p>
      </div>

      {/* Product Details */}
      <div className="max-w-5xl mx-auto px-5 mt-3">
        <div className="grid grid-cols-2 gap-6">

          {/* LEFT SIDE */}
          <div>

            {/* Main Image */}
            <div className="h-[420px] bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1583394838336-acd977736f90"
                alt="Bose BT Earphones"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Small Images */}
            <div className="flex gap-3 mt-3">

              <div className="w-[85px] h-[85px] bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1583394838336-acd977736f90"
                  alt="Bose Earphones"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-[85px] h-[85px] bg-gray-100 rounded-lg">
              <img
                src={whiteImage}
                alt="Whitee Headphones"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="w-[85px] h-[85px] bg-gray-100 rounded-lg">
              <img
                src={blueImage}
                alt="skybluee Headphones"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="w-[85px] h-[85px] bg-gray-100 rounded-lg">
              <img
                src={ReddImage}
                alt="Redd Headphones"
                className="w-full h-full object-contain"
              />
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>

          {/* Product Name */}
          <h1 className="text-2xl font-bold text-black">
            Bose BT Earphones
          </h1>

          {/* Description */}
          <p className="text-xs text-gray-600 mt-2 max-w-md">
            Enjoy clear sound and comfortable listening with these
            wireless Bose Bluetooth earphones.
          </p>

          {/* Rating */}
          <p className="text-green-600 mt-3 text-sm">
            ★★★★★
            <span className="text-black ml-2">(121)</span>
          </p>

          <hr className="my-4" />

          {/* Price */}
          <h2 className="text-xl font-bold text-black">
            $289.00
          </h2>

          <p className="text-xs text-gray-600 mt-2">
            Suggested payments with 6 months special financing
          </p>

          <hr className="my-4" />

          {/* Color */}
          <h3 className="text-base font-semibold">
            Choose a Color
          </h3>

          <div className="flex gap-3 mt-3">

            <button
              className="w-8 h-8 rounded-full bg-black ring-2 ring-[#064e3b] ring-offset-2"
              title="Black"
            ></button>

            <button
              className="w-8 h-8 rounded-full bg-white border border-gray-300"
              title="White"
            ></button>

            <button
              className="w-8 h-8 rounded-full bg-blue-500"
              title="Blue"
            ></button>

            <button
              className="w-8 h-8 rounded-full bg-red-500"
              title="Red"
            ></button>

          </div>

          <hr className="my-4" />

          {/* Quantity */}
          <div className="flex items-center gap-4">

            <div className="flex items-center justify-between w-[135px] bg-gray-100 rounded-full px-5 py-2.5">

              <button className="text-base">
                −
              </button>

              <span className="font-semibold text-sm">
                1
              </span>

              <button className="text-base">
                +
              </button>

            </div>

            <div>
              <p className="font-semibold text-xs">
                Only <span className="text-orange-500">12 Items</span> Left!
              </p>

              <p className="text-xs text-gray-600">
                Don't miss it
              </p>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-4">

            <button className="flex-1 bg-[#064e3b] text-white py-2.5 rounded-full text-xs font-semibold">
              Buy Now
            </button>

            <button className="flex-1 border border-[#064e3b] text-[#064e3b] py-2.5 rounded-full text-xs font-semibold">
              Add to Cart
            </button>

          </div>

          {/* Delivery */}
          <div className="border rounded-lg mt-3">

            <div className="px-3 py-2 border-b">

              <h3 className="font-semibold text-[11px]">
                🚚 Free Delivery
              </h3>

              <p className="text-[10px] text-gray-600 mt-1 underline">
                Enter your Postal code for Delivery Availability
              </p>

            </div>

            <div className="px-3 py-2">

              <h3 className="font-semibold text-[11px]">
                ↩ Return Delivery
              </h3>

              <p className="text-[10px] text-gray-600 mt-1">
                Free 30days Delivery Returns.{" "}
                <span className="underline">
                  Details
                </span>
              </p>

            </div>

          </div>

        </div>
      </div>
    </div>

    </div >
  );
}

export default Product3;