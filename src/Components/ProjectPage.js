import React from "react";
import { useState } from "react";
import Card from "./Card";
import "./ProjectPage.css";
import todoImage from "../images/ToDoList.png";
import inProgressImage from "../images/Loading.avif";

function ProjectPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <>
      <h1 className="project-title">Projects</h1>
      <div className="project-cards">
        <Card
          title={"To-Do List"}
          image={todoImage}
          onClick={() => setSelectedImage(todoImage)}
        />
        <Card
          title={"In Progress"}
          image={inProgressImage}
          onClick={() => setSelectedImage(inProgressImage)}
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

export default ProjectPage;
