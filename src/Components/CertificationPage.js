import React, { useState } from "react";
import "./CertificationPage.css";
import Card from "./Card";
import cert1 from "../images/Degree.png";
import cert2 from "../images/React_Cert.png";
import cert3 from "../images/PreSecurity_Cert.png";
import cert4 from "../images/SD_Job_Simulation_Cert.png";

function CertificationPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <h1 className="certification-title">Certifications</h1>
      <div className="certification-cards">
        <Card
          title="Computer Science Degree"
          image={cert1}
          onClick={() => setSelectedImage(cert1)}
        />
        <Card
          title="React Certification"
          image={cert2}
          onClick={() => setSelectedImage(cert2)}
        />
        <Card
          title="Pre Security Certification"
          image={cert3}
          onClick={() => setSelectedImage(cert3)}
        />
        <Card
          title="Job Simulation Certification"
          image={cert4}
          onClick={() => setSelectedImage(cert4)}
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

export default CertificationPage;
