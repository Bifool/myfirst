import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './index.css'; // Ensure the CSS file is imported
import About from "./About";
import Home from "./Home";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md">
        <ul className="flex justify-center space-x-4 p-4 font-times text-lg">
          <li>
            <Link to="/" className="text-blue-600 hover:text-blue-800">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-blue-600 hover:text-blue-800">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;