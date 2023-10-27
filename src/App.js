import "./App.css";

import { useState } from "react";

// Bootstrap
import { Button,Form } from "react-bootstrap";
// Dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import User from "./Pages/User";
import Billing from "./Pages/Billing";
import Home from "./Pages/Home";

// Component
import Sidebar from "./Components/Sidebar";

function App() {
 

  
  return (
    <div className="App">
     
        <div>
          <Router>
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user" element={<User />} />
              <Route path="/billing" element={<Billing />} />
            </Routes>
          </Router>
        </div>
      
    </div>
  );
}

export default App;
