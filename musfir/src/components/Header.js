import React from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate('/signup'); // or '/login' if you mean a login page
  };

  return (
    <header className="header">
      <h2 className="logo">MRKT.AI</h2>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/product">Product</Link></li>
          <li><Link to="/Features">Features</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/AboutUs">AboutUs</Link></li>
        </ul>
      </nav>
      <button className="signin-btn" onClick={handleSignInClick}>Sign In</button>
    </header>
  );
}

export default Header;
