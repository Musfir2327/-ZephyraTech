import React from 'react';
import './Pricing.css';

function Pricing() {
  return (
    <section className="pricing-container">
      <h2>Our Plans</h2>
      <p className="subheading">
        Try our free plan to discover the platform's potential. Upgrade with flexible pricing options tailored to your budget and business objectives.
      </p>

      <div className="plans-wrapper">
        <div className="plan-card free-plan">
          <h3>Free</h3>
          <h1>$0</h1>
          <p>No credit card details required</p>
          <h4>For individuals</h4>
          <ul>
            <li>✔ CPU powered servers</li>
            <li>✔ Up to 50/month API requests</li>
            <li>✔ Up to 5MB payload size</li>
          </ul>
          <button className="get-started">Get Started</button>
        </div>

        <div className="plan-card enterprise-plan">
          <h3>Enterprise</h3>
          <h1>Custom</h1>
          <p>a price that suits your needs</p>
          <h4>For large teams</h4>
          <ul>
            <li>✔ CPU + GPU powered servers</li>
            <li>✔ Custom API requests</li>
            <li>✔ Custom payload size</li>
          </ul>
          <button className="get-in-touch">Get in touch 📩</button>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
