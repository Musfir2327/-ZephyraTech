import React from 'react';
import './Hero.css';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1><span className="highlight">AI-Driven</span> marketing</h1>
        <p>Enhance your brand with intelligent marketing strategies powered by AI tools.</p>
        <div className="buttons">
          <button className="get-started">Get Started</button>
          <button className="demo">View a Demo</button>
        </div>
        <p className="rating">
          
          <FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStarHalfAlt color="gold" />
          Trusted software rating <strong>4.9/5.0</strong>{' '}
        </p>
      </div>
      <div className="hero-image">
        <img src="https://th.bing.com/th/id/OIP.zXiNxkM_RwJ78WVEsJH4nwHaE8?rs=1&pid=ImgDetMain" alt="AI Bot" />
      </div>
    </section>
  );
}

export default Hero;
