// React
import { useState } from "react";

// React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Toast from "../src/components/Toast.jsx";

// Pages
import Home from "../src/pages/Home";
import NotFound from "../src/pages/Errors/NotFound.jsx";
import Login from "../src/pages/Login";
import SignUp from "../src/pages/SignUp";
import Recover from "../src/pages/Recover";
import Products from "../src/pages/Products";
import ProductDetails from "../src/pages/ProductDetails";
import AboutUs from "../src/pages/AboutUs";
import Cart from "../src/pages/Cart";
import Checkout from "../src/pages/Checkout";
import EasterEgg from "../src/pages/EasterEgg";

import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";

function App() {
  const [loginSuccess, setLoginSuccess] = useState(false);

  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  loginSuccess={loginSuccess}
                  setLoginSuccess={setLoginSuccess}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
            <Route
              path="/login"
              element={<Login setLoginSuccess={setLoginSuccess} />}
            />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/recover" element={<Recover />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:category" element={<Products />} />
            <Route path="/products/:company/:category" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/my-cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/easter-egg" element={<EasterEgg />} />
          </Routes>
          <Toast />
          <Footer />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
