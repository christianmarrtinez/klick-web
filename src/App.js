import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Privacy from './Privacy';
import TOS from './TOS';
import icon from './icon.png';  // Ensure your icon is correctly referenced or replaced
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={icon} className="App-icon" alt="icon" />
          <h1>Welcome to My App</h1>

          <div className="App-links">
            <Link to="/privacy" className="App-link">Privacy Policy</Link>
            <Link to="/tos" className="App-link">Terms of Service</Link>
          </div>

          <Routes>
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/tos" element={<TOS />} />
            <Route path="/" element={<p>Welcome to the main page of the app. Please choose a page from above.</p>} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
