import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome back</h2>

        <button className="google-button">
          <FcGoogle size={20} />
          <span>Login with Google</span>
        </button>

        <div className="divider">
          <hr />
          <span>or</span>
          <hr />
        </div>

        <form className="login-form">
          <div>
            <label>Email/Username</label>
            <input type="text" placeholder="Enter your email/username" required />
          </div>
          <div>
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>

          <div className="forgot-password">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>

          <button type="submit" className="submit-button">Login</button>
        </form>

        <p className="signup-link">
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
