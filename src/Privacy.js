// src/Privacy.js
import React from 'react';
import { Link } from 'react-router-dom';
import icon from './icon.png';
import './App.css';

function Privacy() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={icon} className="App-icon" alt="icon" />
        <h2>Privacy Policy</h2>
        <p>
          This is the full privacy policy page. We value your privacy and are committed to protecting your data.
        </p>
        <p>
          Information you provide to us is used solely for the purposes of operating the Klick Competitions app.
        </p>
        <p>
          We do not share your information with third parties without your consent unless required by law.
        </p>

        <div className="App-links">
          <Link to="/" className="App-link">Home</Link>
          <Link to="/tos" className="App-link">Terms of Service</Link>
        </div>
      </header>
    </div>
  );
}

export default Privacy;
