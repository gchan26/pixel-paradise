/* eslint-disable react/no-unescaped-entities */
// Context
import { useCart } from "../../contexts/CartContext";

// Router
import { Link } from "react-router-dom";

// Images
import Block from "../../assets/Block.gif";

const Cart = () => {
  const {
    cartItems,
    removeItemFromCart,
    increaseItemQuantity,
    decreaseItemQuantity,
    cartTotal,
    toastMessage,
  } = useCart();

  return (
    <div className="min-h-[90vh] p-8 bg-dark-blue-700 text-white">
      {toastMessage && (
        <div className="toast toast-bottom toast-end">
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
            <img src={Block} alt="empty cart" className="w-80" />
            <h3 className="font-semibold p-4 text-center">
              Continue shopping to add items to your cart!
            </h3>
            <Link to="/products">
              <button className="btn bg-light-blue-600 hover:bg-light-blue-700 text-white hover:text-light-blue-50">
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
            <table className="table-auto max-w-7xl border border-gray-600 rounded-lg">
              <thead className="hidden xs:table-header-group">
                <tr className="bg-gray-700">
                  <th className="border border-gray-600 px-4 py-2 text-white">
                    Product
                  </th>
                  <th className="border border-gray-600 px-4 py-2 text-white">
                    Price
                  </th>
                  <th className="border border-gray-600 px-4 py-2 text-white">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="block xs:table-row">
                    <td className="border border-gray-600 px-4 py-2 text-center xs:table-cell block">
                      <Link
                        to={`/product/${item.id}`}
                        className="text-light-blue-300 font-semibold no-underline"
                      >
                        {item.name}
                      </Link>
                      <div className="block xs:hidden mt-2">
                        <span className="font-bold text-xl">
                          ${Number(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                      <div className="block xs:hidden mt-2">
                        <div className="flex justify-center">
                          <button
                            onClick={() => decreaseItemQuantity(item.id)}
                            className="btn p-2 rounded-full text-white mx-1 bg-[#14181D] border-black"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                              />
                            </svg>
                          </button>
                          <h1 className="self-center p-2 text-center font-bold">
                            {item.quantity}
                          </h1>
                          <button
                            onClick={() => increaseItemQuantity(item.id)}
                            className="btn p-2 rounded-full text-white mx-1 bg-[#14181D] border-black"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                              />
                            </svg>
                          </button>

                          <button
                            onClick={() => removeItemFromCart(item.id)}
                            className="btn p-2 rounded-full text-red-500 mx-1 bg-[#14181D] border-black"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="hidden xs:table-cell border border-gray-600 px-4 py-2 text-center font-bold">
                      ${Number(item.price * item.quantity).toFixed(2)}
                    </td>
                    <td className="hidden xs:table-cell border border-gray-600 px-4 py-2">
                      <div className="flex justify-center">
                        <button
                          onClick={() => decreaseItemQuantity(item.id)}
                          className="btn p-2 rounded-full text-white mx-1"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                          </svg>
                        </button>
                        <h1 className="self-center p-2 text-center font-bold">
                          {item.quantity}
                        </h1>
                        <button
                          onClick={() => increaseItemQuantity(item.id)}
                          className="btn p-2 rounded-full text-white mx-1"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                          </svg>
                        </button>

                        <button
                          onClick={() => removeItemFromCart(item.id)}
                          className="btn p-2 rounded-full text-red-500 mx-1"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
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
