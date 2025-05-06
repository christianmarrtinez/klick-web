// src/Success.js
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Success() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    
    if (token) {
      console.log('TikTok Access Token:', token);
      // You could also store the token in localStorage or make a request to your backend
    }
  }, [location]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>🎉 Login Successful!</h1>
        <p>Thanks for logging in with TikTok.</p>
      </header>
    </div>
  );
}

export default Success;
