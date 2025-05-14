import React from "react";
import "./HomePage.css";
import profilePic from "../images/profile.JPG"; // Replace with your image path

function HomePage() {
  return (
    <div className="home-page-container">
      <div className="home-page-content">
        <div className="image-column">
          <img src={profilePic} alt="Profile" className="profile-image" />
        </div>
        <div className="text-column">
          <h1>Hi, I'm Jamie Rule</h1>
          <p>
            I grew up in a small town working on farms learning the value of
            hard work and perseverance. However I always had a passion of
            technology which lead me to studying computer science at university.
            I am always eager to learn new things and enjoy taking on new
            challenges, never hesitating to give something a go. I love solving
            problems, whether using my mind or my hands and thrive in an
            environment that keeps me busy.
          </p>
          <div className="contact-section">
            <h2>Contact</h2>
            <p>Email: jamie369rule@gmail.com</p>
            <p>
              LinkedIn:{" "}
              <a href="https://www.linkedin.com/in/jamierulenz/">
                Visit My LinkedIn
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
