// React
// eslint-disable-next-line no-unused-vars
import React from "react";

// Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "../src/pages/Home";
import Navbar from "../src/components/Navbar";

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
