// React
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useCart } from "../../contexts/CartContext";

const Checkout = () => {

    const {
        cartTotal,
      } = useCart();

    return (
      <div className="min-h-screen bg-dark-blue-500 p-4">
        <div className="max-w-4xl mx-auto bg-[#121a23] rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-6">Checkout</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <h3 className="text-lg font-medium mb-4">Shipping Address</h3>
              <form className="space-y-4">
                <div className="form-control">
                  <label className="label"><span className="label-text">Full Name</span></label>
                  <input type="text" className="input input-bordered w-full"/>
                </div>
                <div className="form-control">
                  <label className="label"><span className="label-text">Street Address</span></label>
                  <input type="text" className="input input-bordered w-full"/>
                </div>
                <div className="form-control">
                  <label className="label"><span className="label-text">City</span></label>
                  <input type="text" className="input input-bordered w-full"/>
                </div>
                <div className="form-control grid grid-cols-2 gap-4">
                  <div>
                    <label className="label"><span className="label-text">State</span></label>
                    <input type="text" className="input input-bordered w-full"/>
                  </div>
                  <div>
                    <label className="label"><span className="label-text">Zip Code</span></label>
                    <input type="text" className="input input-bordered w-full"/>
                  </div>
                </div>
              </form>
  
              <h3 className="text-lg font-medium mt-8 mb-4">Payment Methods</h3>
              <form className="space-y-4">
                <div className="form-control">
                  <label className="label"><span className="label-text">Credit Card Number</span></label>
                  <input type="text" className="input input-bordered w-full"/>
                </div>
                <div className="form-control grid grid-cols-2 gap-4">
                  <div>
                    <label className="label"><span className="label-text">Expiration Date</span></label>
                    <input type="text" className="input input-bordered w-full"/>
                  </div>
                  <div>
                    <label className="label"><span className="label-text">CVC</span></label>
                    <input type="text" className="input input-bordered w-full"/>
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
                <button className="btn btn-primary w-full mt-4">Place Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Checkout;