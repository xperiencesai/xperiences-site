import React, { useState } from "react";
import "./App.scss";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">Xperiences<span>AI</span></div>
      <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#platforms" onClick={closeMenu}>Platforms</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>
      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h1>Pioneering Human-Centered AI Experiences</h1>
        <p>
          At <strong>Xperiences AI</strong>, we push the boundaries of innovation by
          building AI-powered products that transform how people learn, work, and thrive.
        </p>
        <a href="#platforms" className="cta">Explore Our Platforms</a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="about">
      <h2>Our Mission</h2>
      <p>
        We believe in creating equitable access to knowledge and opportunity. Our vision is to blend innovation with impact and build category-defining, AI-powered products that transform how people learn, work, and thrive.
      </p>
    </section>
  );
}

function Platforms() {
  return (
    <section id="platforms" className="platforms">
      <h2>Our Platforms</h2>
      <div className="cards">
        <div className="card">
          <h3>InteractED Foundation</h3>
          <div className="partner">Independent nonprofit — built & powered by Xperiences AI</div>
          <p>
            InteractED Foundation is an independent nonprofit organization delivering free, high-quality courses globally.
            Xperiences AI built and powers their learning platform to ensure open access to learning for everyone.
          </p>
          <a href="https://www.interacted.app" target="_blank" rel="noreferrer" className="btn">
            Visit InteractED
          </a>
        </div>
        <div className="card coming-soon">
          <h3>InteractED Labs</h3>
          <p>
            A subscription-based platform with advanced AI features, adaptive learning,
            and premium tools for learners and institutions.
          </p>
          <span className="tag">Coming Soon</span>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Get in Touch</h2>
      <p>
        Interested in partnerships, collaborations, or learning more about our work?
        Reach out and let’s build the future of learning together.
      </p>
      <a href="mailto:xperiencesai@gmail.com" className="btn">Contact Us</a>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Xperiences AI. All rights reserved.</p>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Platforms />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;