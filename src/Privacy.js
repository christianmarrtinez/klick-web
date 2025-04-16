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
        <div className="content-box">
          <h3>Effective Date: April 15, 2025</h3>

          <h4>1. Information We Collect</h4>
          <p>We may collect the following types of data:</p>
          <ul>
            <li>User-provided information (name, email, content shared).</li>
            <li>Social media account data from platforms you connect, like TikTok.</li>
            <li>App usage analytics, including engagement and interaction metrics.</li>
          </ul>

          <h4>2. How We Use Your Information</h4>
          <ul>
            <li>Personalize your experience and show relevant content.</li>
            <li>Provide performance and competition statistics.</li>
            <li>Improve app functionality and user experience.</li>
          </ul>

          <h4>3. Sharing Information</h4>
          <ul>
            <li>Only with trusted vendors (e.g., payment processors, analytics providers).</li>
            <li>As required by law, or to enforce legal rights and protect users.</li>
          </ul>

          <h4>4. Data Security</h4>
          <p>We implement industry-standard security practices to protect your data from unauthorized access, loss, or misuse.</p>

          <h4>5. Your Rights</h4>
          <p>You may request access to, correction of, or deletion of your personal information. You may also withdraw consent at any time.</p>

          <h4>6. Children’s Privacy</h4>
          <p>Our service is not directed to children under 13. We do not knowingly collect personal data from children.</p>

          <h4>7. Changes to This Policy</h4>
          <p>We may update this policy periodically. Changes will be posted on this page with a new effective date.</p>

          <h4>8. Contact Us</h4>
          <p>For questions about this Privacy Policy, contact <a href="mailto:christianmarrtinez@gmail.com">christianmarrtinez@gmail.com</a>.</p>
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

export default Privacy;
