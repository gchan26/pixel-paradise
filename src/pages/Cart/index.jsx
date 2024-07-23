import { useCart } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeItemFromCart, cartTotal } = useCart();

  return (
    <div className="h-screen p-4 bg-dark-blue-700 text-white">
      <h1 className="text-3xl font-semibold mb-4">My Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link to="/products" className="text-light-blue-500 underline">Continue shopping</Link></p>
      ) : (
        <>
          <div className="overflow-x-auto w-full">
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2">Product</th>
                  <th className="px-4 py-2">Price</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td className="border px-4 py-2">{item.name}</td>
                    <td className="border px-4 py-2">${item.price.toFixed(2)}</td>
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
            <h2 className="text-2xl font-semibold">Total: ${cartTotal.toFixed(2)}</h2>
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