import React from "react";
import Card from "./Card";
import "./ProjectPage.css";

function ProjectPage() {
  return (
    <>
      <h1 className="project-title">Projects</h1>
      <div className="project-cards">
        <Card title="Card" />
        <Card title="Card" />
        <Card title="Card" />
        <Card title="Card" />
        <Card title="Card" />
        <Card title="Card" />
        <Card title="Card" />
      </div>
    </>
  );
}

export default ProjectPage;
