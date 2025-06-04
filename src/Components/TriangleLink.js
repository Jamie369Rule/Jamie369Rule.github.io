import React from "react";
import { Link } from "react-router-dom";
import "./TriangleLink.css";

function TriangleLink({ position, to, color, label, collapsed }) {
  return (
    <Link
      to={to}
      className={`triangle ${position} ${collapsed ? "collapsed" : ""}`}
      style={{ backgroundColor: color }}
    >
      <span className="triangle-label">{label}</span>
    </Link>
  );
}

export default TriangleLink;
