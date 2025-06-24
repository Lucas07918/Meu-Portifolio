// src/components/Hero.jsx

import React from 'react';
import './Hero.css';
import HeroShapes from '../HeroShapes/HeroShapes';

const Hero = () => {
  return (
    <section className="hero" id="home" aria-label="home">
      <div className="container">

        {/* Textual Content */}
        <div className="hero-content">
          <p className="hero-subtitle">Hello Everyone!</p>

          <h1 className="headline headline-1 section-title">
            I’m <span className="span">Lucas Silva</span>
          </h1>

          <p className="hero-text">
            Aspiring web and software developer looking for an internship in web development, software engineering, or system development. Passionate about creating efficient, scalable, and user-centered solutions.
          </p>
        </div>

        {/* Visual Content */}
        <div className="hero-banner">
          <div className="photo-card">
            <img
              src="/assets/img/FotoPortifolio.jpg"
              alt="Lucas Silva"
              width="327"
              height="490"
              className="w-100"
            />
          </div>

          <HeroShapes />
        </div>

      </div>
    </section>
  );
};

export default Hero;
