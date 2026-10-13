import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(""); 
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [showReturnDetails, setShowReturnDetails] = useState(false);
  const [postalCode, setPostalCode] = useState("");
  const [deliveryMessage, setDeliveryMessage] = useState("");

  // Fetch product details from API
  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    setProduct(null);
    setSelectedImage("");
    setQuantity(1);
    setDeliveryMessage("");

    fetch(`https://dummyjson.com/products/${id}`, {
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Product not found");
        }

        return response.json();
      })
      .then((data) => {
        const formattedProduct = {
          id: String(data.id),
          name: data.title,
          price: data.price,
          description: data.description,
          rating: data.rating,
          images:
            data.images && data.images.length > 0
              ? data.images
              : [data.thumbnail],
        };

        setProduct(formattedProduct);
        setSelectedImage(formattedProduct.images[0]);
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          console.error("Product fetch error:", error);
          setProduct(null);
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      });

    return () => controller.abort();
  }, [id]);

  // Loading
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading product details...</p>
      </div>
    );
  }

  // Add product to cart
  const handleAddToCart = () => {
    try {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const existingItem = cart.find(
        (item) => String(item.id) === String(product.id)
      );

      if (existingItem) {
        existingItem.quantity =
          (Number(existingItem.quantity) || 1) + quantity;
      } else {
        cart.push({
          id: product.id,
          name: product.name,
          price: `$${product.price.toFixed(2)}`,
          image: selectedImage || product.images[0],
          quantity,
        });
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      navigate("/cart");
    } catch (error) {
      console.error("Unable to update cart:", error);
      alert("Unable to add product to cart.");
    }
  };

  return (
    <div className="min-h-screen bg-white px-5 py-5">
      {/* Breadcrumb */}
      <p className="text-xs text-gray-500 mb-4">
        <Link to="/" className="hover:text-black">
          Home
        </Link>{" "}
        / Products /{" "}
        <span className="text-black font-semibold">
          {product.name}
        </span>
      </p>

      {/* Product Details */}
      <div className="max-w-5xl mx-auto mt-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* LEFT SIDE: Images */}
          <div>
            <div className="h-[400px] bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden relative">

              {/* Previous Image */}
              <button
                onClick={() => {
                  const index = product.images.indexOf(selectedImage);
                  const previousIndex =
                    (index - 1 + product.images.length) %
                    product.images.length;

                  setSelectedImage(product.images[previousIndex]);
                }}
                aria-label="Previous image"
                className="absolute left-3 z-10 bg-white rounded-full w-9 h-9 shadow text-xl"
              >
                &lt;
              </button>

              <img
                src={selectedImage || product.images[0]}
                alt={product.name}
                className="w-full h-full object-contain"
              />

              {/* Next Image */}
              <button
                onClick={() => {
                  const index = product.images.indexOf(selectedImage);
                  const nextIndex =
                    (index + 1) % product.images.length;

                  setSelectedImage(product.images[nextIndex]);
                }}
                aria-label="Next image"
                className="absolute right-3 z-10 bg-white rounded-full w-9 h-9 shadow text-xl"
              >
                &gt;
              </button>
            </div>

            {/* Thumbnail Images */}
            <div className="flex gap-3 mt-3 flex-wrap">
              {product.images.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  onClick={() => setSelectedImage(image)}
                  aria-label={`View image ${index + 1}`}
                  className={`w-[75px] h-[75px] bg-gray-100 rounded-lg overflow-hidden border ${selectedImage === image
                      ? "border-green-800"
                      : "border-transparent"
                    }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Product Information */}
          <div>
            <h1 className="text-2xl font-bold text-black">
              {product.name}
            </h1>

            <p className="text-sm text-gray-600 mt-2">
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
              ${product.price.toFixed(2)}
            </h2>

            <p className="text-xs text-gray-600 mt-2">
              Product price shown above
            </p>

            <hr className="my-4" />
            {/* Color selection */}
            <h3 className="text-base font-semibold">
              Color
            </h3>

            <div className="flex gap-3 mt-3">
              {product.images.slice(0, 4).map((image, index) => {
                const colors = [
                  { name: "Black", bg: "bg-black" },
                  { name: "White", bg: "bg-white" },
                  { name: "Blue", bg: "bg-blue-600" },
                  { name: "Red", bg: "bg-red-600" },
                ];

                return (
                  <button
                    key={`${image}-${index}`}
                    onClick={() => {
                      setSelectedColor(index);
                      setSelectedImage(image);
                    }}
                    title={colors[index].name}
                    aria-label={colors[index].name}
                    className={`w-8 h-8 rounded-full border-2 ${colors[index].bg
                      } ${selectedColor === index
                        ? "border-green-800 ring-2 ring-green-300"
                        : "border-gray-300"
                      }`}
                  />
                );
              })}
            </div>

            <p className="text-sm text-gray-500 mt-2">
              Selected color: {["Black", "White", "Blue", "Red"][selectedColor]}
            </p>

            <hr className="my-4" />

            {/* Quantity */}
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-between w-[135px] bg-gray-100 rounded-full px-5 py-2.5">
                <button
                  onClick={() =>
                    setQuantity((previous) =>
                      Math.max(1, previous - 1)
                    )
                  }
                  aria-label="Decrease quantity"
                >
                  −
                </button>

                <span className="font-semibold text-sm">
                  {quantity}
                </span>

                <button
                  onClick={() =>
                    setQuantity((previous) => previous + 1)
                  }
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-4">
              <button
                onClick={() => {
                  handleAddToCart();
                }}
                className="flex-1 bg-[#064e3b] text-white py-2.5 rounded-full text-sm font-semibold"
              >
                Buy Now
              </button>

              <button
                onClick={handleAddToCart}
                className="flex-1 border border-[#064e3b] text-[#064e3b] py-2.5 rounded-full text-sm font-semibold"
              >
                Add to Cart
              </button>
            </div>

            {/* Delivery */}
            <div className="border rounded-lg mt-4">
              <div className="px-3 py-3 border-b">
                <h3 className="font-semibold text-sm">
                  Free Delivery
                </h3>

                <div className="mt-2 flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter Postal code"
                    value={postalCode}
                    onChange={(event) => {
                      setPostalCode(
                        event.target.value.replace(/\D/g, "").slice(0, 6)
                      );
                      setDeliveryMessage("");
                    }}
                    className="border rounded px-2 py-2 text-xs w-36"
                  />

                  <button
                    onClick={() => {
                      setDeliveryMessage(
                        /^\d{6}$/.test(postalCode)
                          ? "Postal code entered. Delivery availability needs confirmation."
                          : "Please enter a valid 6-digit postal code."
                      );
                    }}
                    className="border border-gray-300 px-3 py-2 rounded text-xs"
                  >
                    Check
                  </button>
                </div>

                {deliveryMessage && (
                  <p className="text-xs text-gray-600 mt-2">
                    {deliveryMessage}
                  </p>
                )}
              </div>

              {/* Return Delivery */}
              <div className="px-3 py-3">
                <h3 className="font-semibold text-sm">
                  Return Delivery
                </h3>

                <p className="text-xs text-gray-600 mt-1">
                  Check the seller's return policy.{" "}
                  <button
                    onClick={() =>
                      setShowReturnDetails(!showReturnDetails)
                    }
                    className="underline"
                  >
                    Details
                  </button>
                </p>

                {showReturnDetails && (
                  <p className="text-xs text-gray-600 mt-2">
                    Return eligibility and return period depend on
                    the seller's policy.
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