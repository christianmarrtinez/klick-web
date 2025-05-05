import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Privacy from './Privacy';
import TOS from './TOS';
import Success from './Success';
import './App.css';
import NotFound from './NotFound'; 

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/tos" element={<TOS />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<NotFound />} /> {/* <- Catch-all route */}
      </Routes>
    </Router>
  );
}

export default App;