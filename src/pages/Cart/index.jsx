/* eslint-disable react/no-unescaped-entities */
// Context
import { useCart } from "../../contexts/CartContext";

// Router
import { Link } from "react-router-dom";

// Images
import Block from "../../assets/Block.gif";

const Cart = () => {
  const { cartItems, removeItemFromCart, cartTotal } = useCart();

  return (
    <div className="min-h-[90vh] p-4 bg-dark-blue-700 text-white">
      {cartItems.length === 0 ? (
        <div className="flex justify-center flex-col">
            <div className="flex justify-center items-center flex-col">
            <h1 className="font-retro text-3xl text-center">
                Your cart is empty!{" "}
            </h1>
            <img src={Block} className="" />
            <h3 className="font-semibold p-4">
                Continue shopping to add items to your cart!
            </h3>
            <Link to="/products">
                <button className="btn bg-light-blue-600 hover:bg-light-blue-700 text-white hover:text-light-blue-50 ">
                Let's a Go!
                </button>
            </Link>
            </div>
        </div>
      ) : (
        <>
          <h1 className="text-3xl font-semibold mb-4">My Cart</h1>
          <div className="overflow-x-auto w-full">
            <table className="table-auto w-full">
              <thead>
                <tr className="rounded-lg">
                  <th className="px-4 py-2">Product</th>
                  <th className="px-4 py-2">Price</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td className="border px-4 py-2">{item.name}</td>
                    <td className="border px-4 py-2">
                      ${item.price.toFixed(2)}
                    </td>
                    <td className="border px-4 py-2">
                      <button
                        onClick={() => removeItemFromCart(item.id)}
                        className="btn bg-red-500 hover:bg-red-600 text-white"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-semibold">
              Total: ${cartTotal.toFixed(2)}
            </h2>
            <button className="btn bg-green-500 hover:bg-green-600 text-white mt-2">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
