// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import icon from './icon.png';
import './App.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={icon} className="App-icon" alt="icon" />
        <h1>Klick Competitions Coming to the Google Play/App store soon</h1>

        <div className="App-links">
          <Link to="/privacy" className="App-link">Privacy Policy</Link>
          <Link to="/tos" className="App-link">Terms of Service</Link>
        </div>
      </header>
    </div>
  );
}

export default Home;
