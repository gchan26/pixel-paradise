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
import Login from "../src/pages/Login";
import SignUp from "../src/pages/SignUp";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
