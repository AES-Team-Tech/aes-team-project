import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <nav className="nav-bar">
        <img src="/aes-logo.png" alt="AES Nigeria" className="logo" />
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#benefits">Benefits of AES</a>
          <a href="#education">Voters' Education</a>
        </div>
      </nav>

      <main className="hero-section">
        <h1>Transforming Nigeria's Voting System with INEC's AES</h1>
        <p>
          Building a future of transparent, secure and accessible elections for
          all Nigerians
        </p>
        <button
          className="register-button"
          onClick={() => navigate("/register")}
        >
          Register Now
        </button>
      </main>

      <section className="benefits">
        <h2>Benefits of AES</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>To Nigerians</h3>
            <p>
              Ease Participation and confidence in elections, knowing your vote
              is securely recorded and counted
            </p>
          </div>
          {/* Add other benefit cards */}
        </div>
      </section>
    </div>
  );
};
export default LandingPage;
