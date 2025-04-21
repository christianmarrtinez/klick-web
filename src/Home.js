// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import icon from './icon.png';
import './App.css';

function Home() {
  const TIKTOK_CLIENT_KEY = "sbaw9nk1ev9cyb12it"; // Public value (safe)
  const REDIRECT_URI = 'https://klick-web.vercel.app/auth/tiktok/callback'; // Backend

  const handleTikTokLogin = () => {
    const loginURL = `https://www.tiktok.com/v2/auth/authorize?client_key=${TIKTOK_CLIENT_KEY}&response_type=code&scope=user.info.basic&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&state=abc123`;
    window.location.href = loginURL;
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={icon} className="App-icon" alt="icon" />
        <h1>Klick Competitions coming to the Google Play/App store soon</h1>

        <div className="top-right-links">
          <Link to="/" className="App-link">Home</Link>
          <Link to="/privacy" className="App-link">Privacy Policy</Link>
          <Link to="/tos" className="App-link">Terms of Service</Link>
        </div>

        <button onClick={handleTikTokLogin} className="purple-text-button" style={{ marginTop: '2rem' }}>
        Login with TikTok
      </button>
      </header>
    </div>
  );
}

export default Home;
