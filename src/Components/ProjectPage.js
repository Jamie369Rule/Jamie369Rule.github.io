import React, { useState } from "react";
import Card from "./Card";
import "./ProjectPage.css";
import todoImage from "../images/proj_img/ToDoList.png";
import inProgressImage from "../images/proj_img/Loading.avif";
import RogueWavesImage1 from "../images/proj_img/RogueWaves/RogueWaves1.png";
import RogueWavesImage2 from "../images/proj_img/RogueWaves/RogueWaves2.png";
import RogueWavesImage3 from "../images/proj_img/RogueWaves/RogueWaves3.png";
import RogueWavesImage4 from "../images/proj_img/RogueWaves/RogueWaves4.png";

function ProjectPage() {
  const [modalImages, setModalImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openImageModal = (images, index = 0) => {
    setModalImages(images);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setModalImages([]);
    setCurrentIndex(0);
  };

  const showNextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % modalImages.length);
  };

  const showPrevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? modalImages.length - 1 : prev - 1));
  };

  return (
    <>
      <h1 className="project-title">Projects</h1>
      <div className="project-cards">
        <Card
          title="To-Do List"
          images={[todoImage]}
          onClick={() => openImageModal([todoImage])}
        />

        <Card
          title="RogueWaves"
          images={[
            RogueWavesImage1,
            RogueWavesImage2,
            RogueWavesImage3,
            RogueWavesImage4,
          ]}
          onClick={() =>
            openImageModal([
              RogueWavesImage1,
              RogueWavesImage2,
              RogueWavesImage3,
              RogueWavesImage4,
            ])
          }
        />

        <Card
          title="In Progress"
          images={[inProgressImage]}
          onClick={() => openImageModal([inProgressImage])}
        />
      </div>

      {modalImages.length > 0 && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img
            src={modalImages[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="modal-content"
          />
          {modalImages.length > 1 && (
            <>
              <button className="modal-nav prev" onClick={showPrevImage}>
                &#10094;
              </button>
              <button className="modal-nav next" onClick={showNextImage}>
                &#10095;
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default ProjectPage;
