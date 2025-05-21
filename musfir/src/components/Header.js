import React from 'react';
import './Header.css';


function Header() {
  return (
    <header className="header">
      <h2 className="logo">MRKT.AI</h2>
      <nav>
        <ul className="nav-links">
          <li>Home</li>
          <li>Product</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Download</li>
        </ul>
      </nav>
      <button className="signin-btn">Sign In</button>
      
    </header>
    
  );
}

export default Header;
