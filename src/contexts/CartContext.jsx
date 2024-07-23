/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  
  const addItemToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
};