
import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import blueHeadphone from "./assets/blue-headphone.png";
import whiteHeadphone from "./assets/white-headphone.png";
import lightRedHeadphone from "./assets/red-headphone.png";

import red2 from "./assets/red2.png";
import white2 from "./assets/white2.png";
import blue2 from "./assets/blue2.png";


import red4 from "./assets/red4.jpeg";
import white4 from "./assets/white4.jpeg";
import blue4 from "./assets/blue4.png";

import redHeadphone3 from "./assets/redheadphone3.png";
import whiteHeadphone3 from "./assets/white headphone3..png";
import blueHeadphone3 from "./assets/blue headphone3.png";


import red5 from "./assets/red5.jpg";
import white5 from "./assets/white5.png";
import blue5 from "./assets/blue5.jpeg";

import red7 from "./assets/red7.jpeg";
import white7 from "./assets/white7.jpeg";
import blue7 from "./assets/blue7.jpeg";

import red8 from "./assets/red8.jpeg";
import white8 from "./assets/white8.jpeg";
import blue8 from "./assets/blue8.jpeg";


const products = {

  1: {
    name: "Wireless Earbuds, IPX8",
    price: "$549.00 or 99.99/month",
    description:
      "a perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods.",
    rating: 121,

    images: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b",
      whiteHeadphone,
      lightRedHeadphone,
      blueHeadphone,
    ],
  },


  2: {
    name: "Airpods- Max",
    price: "$559.00",
    description:
      "A perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods.",
    rating: 121,
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
      white2,
      red2,
      blue2,

    ],
  },

  3: {
    name: "Bose BT Earphones",
    price: "$289.00",
    description:
      "Enjoy clear sound and comfortable listening with these wireless Bose Bluetooth earphones.",
    rating: 121,

    images: [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90",

      whiteHeadphone3,
      redHeadphone3,
      blueHeadphone3,
    ],
  },
  4: {
    name: "VIVEFOX Headphones",
    price: "$39.00",
    description:
      "Wired Stereo Headsets With Mic for clear sound and comfortable everyday listening.",
    rating: 121,

    images: [
      "https://cdn.mos.cms.futurecdn.net/NLpAsbaFXNVdkhFZbLrnrV.jpg",
      white4,
      red4,
      blue4,
    ],
  },

  5: {
    name: "JBL TUNE 600BTNC",
    price: "$59.00",
    description:
      "Premium Bone Conduction Open Ear Bluetooth headphones with comfortable design and clear sound.",
    rating: 121,

    images: [
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a",
      white5,
      red5,
      blue5,
    ],
  },
  6: {
    name: "TAGRY Bluetooth",
    price: "$109.00",
    description: "256, 8 core GPU, 8 GB",
    rating: 121,

    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
      white2,
      red2,
      blue2,

    ],
  },
  7: {
    name: "Monster MNFLEX",
    price: "$89.75",
    description: "Flex Active Noise Canceling Bluetooth",
    rating: 121,

    images: [
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1",
      white7,
      red7,
      blue7,
    ],
  },
  8: {
    name: "Mpow CH6",
    price: "$569.00",
    description: "Kids Headphones",
    rating: 121,

    images: [
      "https://makerworld.bblmw.com/makerworld/model/US4d3c692ec4aa67/design/2024-07-06_93457225c973b8.jpeg",
      white8,
      red8,
      blue8,
    ],
  },
};

function ProductDetails() {
  const { id } = useParams();
  const product = products[id];
  const navigate = useNavigate();



  const [selectedImage, setSelectedImage] = useState(
    product.images[0]
  );
  const [quantity, setQuantity] = useState(1);
  const [showReturnDetails, setShowReturnDetails] = useState(false);
  const [postalCode, setPostalCode] = useState("");
  const [deliveryMessage, setDeliveryMessage] = useState("");

  return (
    <div className="min-h-screen bg-white">
      <p className="text-xs text-gray-500">
        <Link to="/" className="hover:text-black">
          Electronics
        </Link>{" "}
        /{" "}
        <Link to="/" className="hover:text-black">
          Audio
        </Link>{" "}
        /{" "}
        <a href="/#categories" className="hover:text-black">
          Headphones
        </a>{" "}
        /{" "}
        <a href="/#categories" className="hover:text-black">
          Shop Headphones by type
        </a>{" "}
        /{" "}
        <span className="text-black font-semibold">
          {product.name}
        </span>
      </p>

      {/* Product Details */}
      <div className="max-w-5xl mx-auto px-5 mt-3">
        <div className="grid grid-cols-2 gap-6">

          {/* LEFT SIDE */}
          <div>

            {/* Main Image */}
            <div className="h-[420px] bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden relative">

              {/* Previous Arrow */}
              <button
                onClick={() => {
                  const currentIndex = product.images.indexOf(selectedImage);

                  if (currentIndex > 0) {
                    setSelectedImage(product.images[currentIndex - 1]);
                  }
                }}
                className="absolute left-3 z-10 bg-white rounded-full w-9 h-9 shadow text-xl"
              >
                &lt;
              </button>

              {/* Main Image */}
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />

              {/* Next Arrow */}
              <button
                onClick={() => {
                  const currentIndex = product.images.indexOf(selectedImage);

                  if (currentIndex < product.images.length - 1) {
                    setSelectedImage(product.images[currentIndex + 1]);
                  }
                }}
                className="absolute right-3 z-10 bg-white rounded-full w-9 h-9 shadow text-xl"
              >
                &gt;
              </button>

            </div>

            {/* Small Images */}
            <div className="flex gap-3 mt-3">

              {product.images.map((image, index) => (
                <div
                  key={index}
                  className="w-[85px] h-[85px] bg-gray-100 rounded-lg overflow-hidden"
                >
                  <img
                    src={image}
                    alt={`Product ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="pt-0">

            <h1 className="text-2xl font-bold text-black">
              {product.name}
            </h1>

            <p className="text-xs text-gray-600 mt-2 max-w-md">
              {product.description}
            </p>

            {/* Rating */}
            <p className="text-green-600 mt-3 text-sm">
              ★★★★★
              <span className="text-black ml-2">
                ({product.rating})
              </span>
            </p>
            <hr className="my-4" />

            {/* Price */}
            <h2 className="text-xl font-bold text-black">
              {product.price}
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
              {["bg-black", "bg-white border border-gray-300", "bg-red-500", "bg-blue-500"].map(
                (color, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (product.images[index]) {
                        setSelectedImage(product.images[index]);
                      }
                    }}
                    className={`w-8 h-8 rounded-full ${color}`}
                  ></button>
                )
              )}
            </div>

            <hr className="my-4" />

            {/* Quantity */}
            <div className="flex items-center gap-4">

              <div className="flex items-center justify-between w-[135px] bg-gray-100 rounded-full px-5 py-2.5">
                <button
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="text-base"
                >
                  −
                </button>

                <span className="font-semibold text-sm">
                  {quantity}
                </span>

                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="text-base"
                >
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


              <button
                onClick={() => navigate("/cart")}
                className="flex-1 bg-[#064e3b] text-white py-2.5 rounded-full text-xs font-semibold"
              >
                Buy Now
              </button>
              <button
                onClick={() => {
                  const cart = JSON.parse(localStorage.getItem("cart")) || [];

                  cart.push({
                    id: id,
                    name: product.name,
                    price: product.price,
                    image: product.images[0],
                  });

                  localStorage.setItem("cart", JSON.stringify(cart));

                  navigate("/cart");
                }}
                className="flex-1 border border-[#064e3b] text-[#064e3b] py-2.5 rounded-full text-xs font-semibold"
              >
                Add to Cart
              </button>

            </div>

            {/* Delivery */}
            <div className="border rounded-lg mt-3">

              <div className="px-3 py-2 border-b">
                <h3 className="font-semibold text-[11px]">
                  🚚  Free Delivery
                </h3>

                <div className="mt-1">
                  <input
                    type="text"
                    placeholder="Enter Postal code"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    className="border rounded px-2 py-1 text-[10px] w-32"
                  />

                  <button
                    onClick={() => setDeliveryMessage("Delivery available")}
                    className="ml-2 border border-gray-300 px-2 py-1 rounded text-[10px]"
                  >
                    Check
                  </button>

                  {deliveryMessage && (
                    <p className="text-[10px] text-green-600 mt-1">
                      {deliveryMessage}
                    </p>
                  )}
                </div>
              </div>

              <div className="px-3 py-2">
                <h3 className="font-semibold text-[11px]">
                  ↩ Return Delivery
                </h3>

                <p className="text-[10px] text-gray-600 mt-1">
                  Free 30days Delivery Returns.{" "}
                  <span
                    onClick={() => setShowReturnDetails(!showReturnDetails)}
                    className="underline cursor-pointer"
                  >
                    Details
                  </span>
                </p>
                {showReturnDetails && (
                  <p className="text-[10px] text-gray-600 mt-2">
                    Items can be returned within 30 days of delivery.
                  </p>
                )}
              </div>

            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default ProductDetails;

