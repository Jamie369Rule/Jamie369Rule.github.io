import React, { useState } from "react";
import "./ExperiencePage.css";
import Card from "./Card";

function ExperiencePage() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <h1 className="experience-title">Experience</h1>
      <div className="experience-cards">
        <Card
          title="National Communications Officer"
          images={[]}
          onClick={() => setSelectedImage(null)}
        />
        <Card
          title="Code Tutor"
          images={[]}
          onClick={() => setSelectedImage(null)}
        />
        <Card
          title="Training AI"
          images={[]}
          onClick={() => setSelectedImage(null)}
        />
        <Card
          title="Records Management"
          images={[]}
          onClick={() => setSelectedImage(null)}
        />
        <Card
          title="Tractor Driving"
          images={[]}
          onClick={() => setSelectedImage(null)}
        />
        <Card
          title="Restaurant Server"
          images={[]}
          onClick={() => setSelectedImage(null)}
        />
        <Card
          title="Supermarket Worker"
          images={[]}
          onClick={() => setSelectedImage(null)}
        />
        <Card
          title="Dairy Farming"
          images={[]}
          onClick={() => setSelectedImage(null)}
        />
      </div>

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <span className="close">&times;</span>
          <img src={selectedImage} alt="Full View" className="modal-content" />
        </div>
      )}
    </>
  );
}

export default ExperiencePage;
