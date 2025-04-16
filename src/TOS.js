// src/TOS.js
import React from 'react';
import { Link } from 'react-router-dom';
import icon from './icon.png';
import './App.css';

function TOS() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={icon} className="App-icon" alt="icon" />
        <h2>Terms of Service</h2>
        <div className="content-box">
        <p>
          Welcome to our Terms of Service page. By using this application, you agree to the following terms:
        </p>
        <p>
          1. You must use the app responsibly.<br />
          2. We may update these terms at any time.<br />
          3. Your data may be stored securely in accordance with our Privacy Policy.
        </p>
        <p>
          If you have any questions, feel free to reach out to our support team.
        </p>
        </div>
        <div className="top-right-links">
        <Link to="/" className="App-link">Home</Link>
        <Link to="/privacy" className="App-link">Privacy Policy</Link>
        <Link to="/tos" className="App-link">Terms of Service</Link>
        </div>

      </header>
    </div>
  );
}

export default TOS;
