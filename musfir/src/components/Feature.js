import React from 'react';
import './Feature.css';

function Feature() {
  return (
    <section className="features-section">
      <h2>Discover Our Comprehensive <br />Suite of Features</h2>
      <p>
        Our platform is designed to empower your business with the smartest tools for success.
        Explore our powerful suite of AI-driven tools and see how we help you grow.
      </p>
      
      
      <div className="insight-section">
        <div className="insight-text">
          <h3>Harness Insights for Success</h3>
          <p>
            Discover valuable insights into your firm's data using state-of-the-art AI and analytics tools.
            Make informed decisions, reduce your margin for error, and stay ahead of the competition
            by leveraging the wealth of information at your fingertips.
          </p>
        </div>
        <div className="insight-image">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/world-business-plan-calendar-10009083-8152386.png"
            alt="Analytics Graphic"
          />
        </div>
      </div>
    </section>
  );
}

export default Feature;
