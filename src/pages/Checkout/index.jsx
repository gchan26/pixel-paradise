// React
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useCart } from "../../contexts/CartContext";

// Data
import { usStates } from "../../data/usStates";

const Checkout = () => {
  const [zipCode, setZipcode] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvc, setCvc] = useState("");
  const [expiry, setExpiry] = useState("");
  const { cartTotal } = useCart();

  const handlePlaceOrderAlert = () => {
    alert(
      "Thank you for checking out my retro video game store project! This website is part of my developer portfolio and not an actual store (You can check my other projects here: https://gchan26.github.io/). Your interest and time are greatly appreciated!"
    );
  };

  const handleZipChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 5);
    setZipcode(value);
  };

  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 16);
    setCardNumber(value);
  };

  const handleCvcChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 3);
    setCvc(value);
  };

  const handleExpiryChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 4);
    let formattedValue = "";

    if (value.length >= 3) {
      formattedValue = `${value.slice(0, 2)}/${value.slice(2)}`;
    } else if (value.length >= 1) {
      formattedValue = value;
    }

    setExpiry(formattedValue);
  };

  return (
    <div className="min-h-screen bg-dark-blue-500 p-4">
      <div className="max-w-4xl mx-auto bg-[#121a23] rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Checkout</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h3 className="text-lg font-medium mb-4">Shipping Address</h3>
            <form className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Leon S. Kennedy"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Street Address</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="2004 Grove Street Blvd"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">City</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Racoon City"
                  required
                />
              </div>
              <div className="form-control grid grid-cols-2 gap-4">
                <div>
                  <label className="label">
                    <span className="label-text">State</span>
                  </label>
                  <div className="relative w-full">
                    <select
                      className="input input-bordered w-full appearance-none pr-10"
                      required
                    >
                      <option value="" disabled selected>
                        Hyrule
                      </option>
                      {usStates.map((state) => (
                        <option key={state.value} value={state.value}>
                          {state.label}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6 w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="label">
                    <span className="label-text">Zip Code</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    onChange={handleZipChange}
                    value={zipCode}
                    placeholder="76543"
                    required
                  />
                </div>
              </div>
            </form>

            <h3 className="text-lg font-medium mt-8 mb-4">Payment Methods</h3>
            <form className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Credit Card Number</span>
                </label>
                <input
                  type="text"
                  placeholder="1234 5678 9101 1121"
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control grid grid-cols-2 gap-4">
                <div>
                  <label className="label">
                    <span className="label-text">Expiration Date</span>
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    value={expiry}
                    onChange={handleExpiryChange}
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">CVC</span>
                  </label>
                  <input
                    type="text"
                    placeholder="123"
                    value={cvc}
                    onChange={handleCvcChange}
                    className="input input-bordered w-full"
                    required
                  />
                </div>
              </div>
            </form>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Summary</h3>
            <div className="bg-dark-blue-500 rounded-lg p-4 shadow-sm">
              <div className="flex justify-between mb-2">
                <span>Item(s) Total</span>
                <span>${cartTotal}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>$4.99</span>
              </div>
              <div className="flex justify-between mb-2 text-lg font-semibold">
                <span>Total</span>
                <span>${cartTotal + 4.99}</span>
              </div>
              <button
                onClick={handlePlaceOrderAlert}
                className="btn btn-primary w-full mt-4"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
