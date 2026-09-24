
import { useState } from "react";
import { useParams } from "react-router-dom";

import blueHeadphone from "./assets/blue-headphone.png";
import whiteHeadphone from "./assets/white-headphone.png";
import lightRedHeadphone from "./assets/red-headphone.png";

const products = {
  1: {
    name: "Airpods Max",
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
};

function ProductDetails() {
  const { id } = useParams();
  const product = products[id];
  


  const [selectedImage, setSelectedImage] = useState(
    product.images[0]
  );


  return (
    <div className="min-h-screen bg-white">

      {/* Breadcrumb */}
      <div className="max-w-5xl mx-auto px-5 pt-4">
        <p className="text-xs text-gray-500">
          Electronics / Audio / Headphones / Shop Headphones by type /
          <span className="text-black font-semibold">
            {product.name}
          </span>
        </p>
      </div>

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

              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className={`w-8 h-8 rounded-full ${index === 0
                    ? "bg-black ring-2 ring-[#064e3b]"
                    : index === 1
                      ? "bg-white border border-gray-300"
                      : index === 2
                        ? "bg-red-500"
                        : "bg-blue-500"
                    }`}
                ></button>
              ))}

            </div>

            <hr className="my-4" />

            {/* Quantity */}
            <div className="flex items-center gap-4">

              <div className="flex items-center justify-between w-[135px] bg-gray-100 rounded-full px-5 py-2.5">
                <button className="text-base">−</button>

                <span className="font-semibold text-sm">
                  1
                </span>

                <button className="text-base">+</button>
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


