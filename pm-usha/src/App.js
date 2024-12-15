import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/shared/Header";
import Dashboard from "./components/Dashboard";
import Construction from "./components/Construction"; 
import Renovation from "./components/Renovation"; 

const App = () => {
  return (
    <Router>
      <div>
        {/* Header is displayed on all pages */}
        <Header />
        <div className="mt-4 md:mx-auto md:max-w-7xl p-4">
          <Routes>
            {/* Main Dashboard */}
            <Route path="/" element={<Dashboard />} />
            
            {/* Specific Routes */}
            <Route path="/construction" element={<Construction />} />
            <Route path="/renovation" element={<Renovation />} />

            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
