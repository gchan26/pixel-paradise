import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [toastMessage, setToastMessage] = useState("");

  const addItemToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
    setToastMessage(`${item.name} added to the cart!`);

    setTimeout(() => setToastMessage(""), 3000);
  };

  const removeItemFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart, clearCart, cartTotal, toastMessage }}>
      {children}
    </CartContext.Provider>
  );
};