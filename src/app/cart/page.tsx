"use client";

import Image from "next/image";
import { useCart } from "../context/CartContex";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  // Function to calculate the total price for an item
  const calculateTotalPrice = (price: number, quantity: number) => {
    return (price * quantity).toFixed(2); // Ensure the price is formatted to 2 decimal places
  };

  // Calculate the grand total for all items in the cart
  const grandTotal = cart
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <>
    <PageHeader title="Cart" currentPage="Cart" />
    
    
    
    
    
    <div className="p-4 sm:p-8">
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4 max-w-6xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6">Cart</h1>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center justify-between border p-4 rounded-lg shadow"
            >
              <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                {/* Display product image */}
                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={50}
                    height={30}
                    className="w-16 h-16 object-cover rounded"
                  />
                )}
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">Price: ${item.price}</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                  <p className="text-gray-600 font-semibold">
                    Total: ${calculateTotalPrice(item.price, item.quantity)}
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-4 sm:flex-row items-center text-lg space-y-2 sm:space-y-0 sm:space-x-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="px-3 py-1 sm:px-4 sm:py-2 bg-white text-black text-sm sm:text-lg rounded border border-gray-300 hover:bg-gray-100 transition"
                  disabled={item.quantity <= 1} // Disable the button if quantity is 1 or less
                >
                  -
                </button>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-3 py-1 sm:px-4 sm:py-2 bg-white text-black text-sm sm:text-lg rounded border border-gray-300 hover:bg-gray-100 transition"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="px-3 py-1 sm:px-4 sm:py-2 bg-orange-500 text-white text-sm sm:text-base rounded hover:bg-orange-700 transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Grand Total Section */}
          <div className="mt-6 text-left">
            <p className="text-xl font-semibold">Total: ${grandTotal}</p>
          </div>
          {/* Checkout Button */}
          <div className="mt-6 text-right">
            <Link href="/generate-tracking">
              <button
                disabled={cart.length === 0}
                className={`px-4 py-2 sm:px-6 sm:py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition ${
                  cart.length === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default CartPage;