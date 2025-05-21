import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import './SignUp.css';

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Create an account</h2>
        

        <button className="google-button">
          <FcGoogle size={20} />
          <span>Sign up with Google</span>
        </button>

        <div className="divider">
          <hr />
          <span>or</span>
          <hr />
        </div>

        <form className="signup-form">
          <div>
            <label>Username</label>
            <input type="text" placeholder="Enter your name" required />
          </div>
          <div>
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div>
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>

          <button type="submit" className="submit-button">Sign Up</button>
        </form>

        <p className="login-link">
          Already have an account? <a href="/login">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
