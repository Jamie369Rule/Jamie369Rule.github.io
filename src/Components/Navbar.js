import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="nav-left">
        <Link to="/">Jamie Rule</Link>
      </div>
      <div className="nav-right">
        <Link to="/projects">Projects</Link>
        <Link to="/certifications">Certifications</Link>
      </div>
    </div>
  );
}

export default Navbar;
