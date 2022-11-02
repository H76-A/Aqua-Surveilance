import "./App.css";

import { useState } from "react";

// Bootstrap
import { Button } from "react-bootstrap";
// Dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import User from "./Pages/User";
import Billing from "./Pages/Billing";
import Home from "./Pages/Home";

// Component
import Sidebar from "./Components/Sidebar";

function App() {
  const [imgshow, setImgShow] = useState(true);
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setImgShow(false);
    setShow(true);
    
  };
  return (
    <div className="App">
      {imgshow && 
        <div className="front">
          <Button onClick={() => handleClick()}> Continue</Button>
        </div>
      }

      {show && (
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
      )}
    </div>
  );
}

export default App;
