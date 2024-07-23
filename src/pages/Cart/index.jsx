/* eslint-disable react/no-unescaped-entities */
// Context
import { useCart } from "../../contexts/CartContext";

// Router
import { Link } from "react-router-dom";

// Images
import Block from "../../assets/Block.gif";

const Cart = () => {
  const { cartItems, removeItemFromCart, cartTotal, toastMessage } = useCart();

  return (
    <div className="min-h-[90vh] p-8 bg-dark-blue-700 text-white">
      {toastMessage && (
        <div className="toast toast-top toast-end">
          <div className="alert alert-success">
            <div>
              <span>{toastMessage}</span>
            </div>
          </div>
        </div>
      )}

      {cartItems.length === 0 ? (
        <div className="flex justify-center flex-col">
          <div className="flex justify-center items-center flex-col">
            <h1 className="font-retro text-3xl text-center">
              Your cart is empty!{" "}
            </h1>
            <img src={Block} alt="empty cart" />
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
          <div className="flex flex-row items-center justify-center gap-2 mb-4">
            <h1 className="text-3xl font-semibold text-center font-retro">
              My Cart
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 004 0z"
              />
            </svg>
          </div>
          <div className="overflow-x-auto w-full flex justify-center">
            <table className="table-auto max-w-7xl">
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td className="border px-4 py-2 text-center">
                      <Link
                        to={`/product/${item.id}`}
                        className="text-light-blue-300 font-semibold no-underline"
                      >
                        {item.name}
                      </Link>
                    </td>
                    <td className="border px-4 py-2 text-center font-bold">
                      ${Number(item.price).toFixed(2)}
                    </td>
                    <td className="border px-4 py-2">
                      <div className="flex justify-center">
                        <button
                          onClick={() => removeItemFromCart(item.id)}
                          className="btn bg-red-500 hover:bg-red-600 text-white"
                        >
                          Remove
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-center">
              Total: ${cartTotal.toFixed(2)}
            </h2>
            <div className="flex justify-center">
              <button className="btn bg-green-500 hover:bg-green-600 text-white mt-2 max-w-40">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;