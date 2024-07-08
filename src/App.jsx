// React
// eslint-disable-next-line no-unused-vars
import React from "react";

// Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";

// Pages
import Home from "../src/pages/Home";
import NotFound from "../src/pages/Errors/NotFound.jsx";
import Login from "../src/pages/Login";
import SignUp from "../src/pages/SignUp";
import Recover from "../src/pages/Recover";
import AllProducts from "../src/pages/AllProducts";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/recover" element={<Recover />} />
        <Route path="/allproducts" element={<AllProducts />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
