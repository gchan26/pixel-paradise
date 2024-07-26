import { createContext, useContext, useState, useEffect } from 'react';
import { firestore, auth } from '../services/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

const CartContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [toastMessage, setToastMessage] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        fetchCart(currentUser);
      }
    });

    return () => unsub();
  }, []);

  const fetchCart = async (currentUser) => {
    try {
      const cartRef = doc(firestore, 'carts', currentUser.uid);
      const cartSnap = await getDoc(cartRef);
      if (cartSnap.exists()) {
        setCartItems(cartSnap.data().items);
      }
    } catch (error) {
      console.error('Error fetching cart:', error);
    }
  }

  const saveCart = async (items) => {
    if (user) {
      const cartRef = doc(firestore, 'carts', user.uid);
      try {
        await setDoc(cartRef, { items });
      } catch (error) {
        console.error('Error saving cart:', error);
      }
    }
  }

  const addItemToCart = (item) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      let updatedItems;
      if (itemIndex > -1) {
        updatedItems = [...prevItems];
        updatedItems[itemIndex] = {
          ...updatedItems[itemIndex],
          quantity: updatedItems[itemIndex].quantity + 1,
        };
      } else {
        updatedItems = [...prevItems, { ...item, quantity: 1 }];
      }
      saveCart(updatedItems);
      return updatedItems;
    });

    setToastMessage(`${item.name} added to the cart!`);
    setTimeout(() => setToastMessage(""), 3000);
  };

  const decreaseItemQuantity = (itemId) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems
        .map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0);

      saveCart(updatedItems);
      return updatedItems;
    });
  };

  const removeItemFromCart = (itemId) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== itemId);
      saveCart(updatedItems);
      return updatedItems;
    });
  };

  const clearCart = () => {
    setCartItems([]);
    saveCart([]);
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        decreaseItemQuantity,
        removeItemFromCart,
        clearCart,
        cartTotal,
        toastMessage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};