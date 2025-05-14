import React from "react";
import "./Card.css";

function Card({ id, title, image, onClick }) {
  return (
    <div className="card" onClick={() => onClick(id)}>
      <img src={image} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
    </div>
  );
}

export default Card;
