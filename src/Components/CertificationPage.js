import React from "react";
import "./CertificationPage.css";
import Card from "./Card";

function CertificationPage() {
  return (
    <>
      <h1 className="certification-title">certifications</h1>
      <div className="certification-cards">
        <Card
          title="Computer Science Degree"
          image={require("../images/Otago-Logo.jpeg")}
        />
        <Card
          title="React Certification"
          image={require("../images/React_Cert.png")}
        />
        <Card title="Card" />
        <Card title="Card" />
      </div>
    </>
  );
}

export default CertificationPage;
