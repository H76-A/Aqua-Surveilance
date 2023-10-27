import React from "react";

import { Link } from "react-router-dom";

import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
        
      <ul>
        <li>
          <img alt='home' src="./Images/home.png" />
          <Link to="/">Home</Link>
        </li>
        <li>
        <img alt='home' src="./Images/user.png" />
          <Link to="/user">User</Link>
        </li>
        <li>
        <img alt='home' src="./Images/bill.png" />
          <Link to="/billing">Billing</Link>
        </li>
      </ul>
    </div>
  );
}
