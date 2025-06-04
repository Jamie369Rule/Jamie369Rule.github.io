import React, { useState } from "react";
import "./Card.css";

function Card({ id, title, images, onClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    onClick(images[nextIndex]); // Pass selected image back to parent (optional)
  };

  return (
    <div className="card" onClick={handleImageClick}>
      <img src={images[currentIndex]} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
    </div>
  );
}

export default Card;
