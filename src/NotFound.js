// src/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import icon from './icon.png';
import './App.css';

function NotFound() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={icon} className="App-icon" alt="icon" />
        <h2>404 - Page Not Found</h2>
        <p>The page you are looking for does not exist or has been moved.</p>
        <Link to="/" className="App-link">Return to Home</Link>
      </header>
    </div>
  );
}

export default NotFound;
