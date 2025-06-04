import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import ProjectsPage from "./Components/ProjectPage.js";
import CertificationPage from "./Components/CertificationPage.js";
import TriangleLink from "./Components/TriangleLink";

function TriangleLinksWrapper() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <TriangleLink
        position="top-left"
        to="/"
        color="#3498db"
        label="Home"
        collapsed={!isHome}
      />
      <TriangleLink
        position="top-right"
        to="/projects"
        color="#2ecc71"
        label="Projects"
        collapsed={!isHome}
      />
      <TriangleLink
        position="bottom-left"
        to="/certifications"
        color="#e74c3c"
        label="Certifications"
        collapsed={!isHome}
      />
      <TriangleLink
        position="bottom-right"
        to="/experience"
        color="#f1c40f"
        label="Experience"
        collapsed={!isHome}
      />
    </>
  );
}

function App() {
  return (
    <Router>
      <TriangleLinksWrapper />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/certifications" element={<CertificationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
