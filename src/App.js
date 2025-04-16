import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Privacy from './Privacy';
import TOS from './TOS';
import './App.css';

function App() {
  return (
    <Router basename="/klick-web">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/tos" element={<TOS />} />
      </Routes>
    </Router>
  );
}

export default App;
