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
          <h3>Effective Date: April 21, 2025</h3>

          <h4>1. Information We Collect</h4>
          <p>We may collect the following types of data:</p>
          <ul>
            <li>User-provided information (e.g., name, email, and content submitted through the app).</li>
            <li>Social media account data from platforms you connect (e.g., your TikTok username, profile picture, video metrics, and followers count).</li>
            <li>App usage analytics, including engagement and interaction metrics.</li>
            <li>Device and browser information such as IP address and user agent (for security and analytics purposes).</li>
          </ul>

          <h4>2. How We Use Your Information</h4>
          <ul>
            <li>Personalize your experience and show relevant content.</li>
            <li>Provide performance tracking, rankings, and competition statistics.</li>
            <li>Improve app functionality, content recommendations, and user experience.</li>
            <li>Respond to user data access or deletion requests, and comply with legal obligations.</li>
          </ul>

          <h4>3. Sharing Information</h4>
          <ul>
            <li>With trusted vendors (e.g., payment processors, hosting providers, analytics tools).</li>
            <li>As required by law, or to enforce legal rights and protect users.</li>
            <li>Only when necessary and under agreements that maintain data confidentiality and security.</li>
          </ul>

          <h4>4. Data Security</h4>
          <p>We implement industry-standard security practices (such as HTTPS, encryption in transit, and secure server infrastructure) to protect your data from unauthorized access, loss, or misuse.</p>

          <h4>5. Your Rights</h4>
          <p>
            You may:
            <ul>
              <li>Request access to, correction of, or deletion of your personal information.</li>
              <li>Withdraw your consent at any time.</li>
              <li>Request data portability by contacting us directly.</li>
            </ul>
            We aim to respond to all valid requests within 30 days.
          </p>

          <h4>6. Children’s Privacy</h4>
          <p>Our service is not directed to children under 13. We do not knowingly collect personal data from children. If we discover such data, we will promptly delete it.</p>

          <h4>7. Changes to This Policy</h4>
          <p>We may update this policy periodically. Changes will be posted on this page with a new effective date.</p>

          <h4>8. Contact Us</h4>
          <p>For questions or requests related to this Privacy Policy, contact <a href="mailto:support@klickcontent.com">support@klickcontent.com</a>.</p>
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
