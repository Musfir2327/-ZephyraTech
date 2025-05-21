import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h2 className="logo">MRKT.AI</h2>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/product">Product</Link></li>
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/download">Download</Link></li>
        </ul>
      </nav>
      <button className="signin-btn">Sign In</button>
    </header>
  );
}

export default Header;
