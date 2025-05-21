import React, { useState } from 'react';
import './About.css';

const AboutUs = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="page-container">
      <div className="left-section">
        <div className="info-block">
          <h1 className="title animate-fade-in">Supercharge AI Adoption</h1>
          <h2 className="subtitle animate-fade-in">Transform Your Business 10X Faster</h2>
          
          <div className="feature-card animate-slide-up">
            <h3>Next-Gen Intelligence</h3>
            <p>
              Our cutting-edge Generative AI stack and largest collection of ready-to-use AI models 
              empower businesses to revolutionize products and processes.
            </p>
          </div>

          <div className="feature-card animate-slide-up delay-1">
            <h3>Security and Compliance</h3>
            <p>
              We prioritize the highest standards of encryption, compliance, and user control 
              to safeguard your valuable data and ensure privacy protection.
            </p>
          </div>
        </div>
      </div>

      <div className="right-section">
        {isSubmitted ? (
          <div className="success-message animate-bounce-in">
            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
              <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
              <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            </svg>
            <h3>Thank You!</h3>
            <p>We'll get back to you shortly.</p>
          </div>
        ) : (
          <form className="form-container animate-slide-up" onSubmit={handleSubmit}>
            <h2 className="form-title">Get in Touch</h2>
            <div className="form-row">
              <div className="input-group">
                <input type="text" placeholder="First Name*" required />
                <span className="focus-border"></span>
              </div>
              <div className="input-group">
                <input type="text" placeholder="Last Name*" required />
                <span className="focus-border"></span>
              </div>
            </div>
            <div className="input-group">
              <input type="text" placeholder="Job Title*" required />
              <span className="focus-border"></span>
            </div>
            <div className="input-group">
              <input type="text" placeholder="Company Website*" required />
              <span className="focus-border"></span>
            </div>
            <div className="input-group">
              <input type="text" placeholder="Phone number" />
              <span className="focus-border"></span>
            </div>
            <div className="select-group">
              <select required>
                <option value="">Select Industry*</option>
                <option value="finance">Finance</option>
                <option value="education">Education</option>
                <option value="technology">Technology</option>
              </select>
              <span className="focus-border"></span>
            </div>
            <div className="select-group">
              <select required>
                <option value="">Select Area of Interest*</option>
                <option value="ai">AI Solutions</option>
                <option value="cloud">Cloud Infrastructure</option>
                <option value="security">Cybersecurity</option>
              </select>
              <span className="focus-border"></span>
            </div>
            <div className="textarea-group">
              <textarea placeholder="Do you have any specific query?" rows="4"></textarea>
              <span className="focus-border"></span>
            </div>
            <button type="submit" className="submit-btn">
              <span>Submit</span>
              <svg className="arrow" viewBox="0 0 24 24">
                <path d="M4 12h16m-7-7l7 7-7 7"></path>
              </svg>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AboutUs;