import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Cart() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(savedCart);
    }, []);

    return (
        <div className="min-h-screen bg-white p-10">

            <h1 className="text-3xl font-bold mb-8">
                Shopping Cart
            </h1>

            {cart.length === 0 ? (
                <p className="text-gray-500">
                    Your cart is empty.
                </p>
            ) : (
                <div className="space-y-5">

                    {cart.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-5 border rounded-xl p-4"
                        >
                            <Link to={`/product/${item.id}`}>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-28 h-28 object-cover rounded-lg cursor-pointer"
                                />
                            </Link>

                            <div className="flex-1">
                                <h2 className="font-semibold text-lg">
                                    {item.name}
                                </h2>

                                <p className="font-bold mt-2">
                                    {item.price}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>
            )}

        </div>
    );
}

export default Cart;