// src/TOS.js
import React from 'react';
import { Link } from 'react-router-dom';
import icon from './icon.png';
import './App.css';

function TOS() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={icon} className="App-icon" alt="icon" />
        <h2>Terms of Service</h2>
        <div className="content-box">
          <h3>Effective Date: April 15, 2025</h3>

          <h4>1. Acceptance of Terms</h4>
          <p>By accessing or using Klick, you agree to be bound by these terms and all applicable laws and regulations.</p>

          <h4>2. Use of Service</h4>
          <ul>
            <li>You must be at least 13 years old to use this app.</li>
            <li>You agree to use Klick only for lawful purposes and in accordance with these terms.</li>
          </ul>

          <h4>3. Integrations with TikTok and Others</h4>
          <p>By linking your social accounts, including TikTok, you give us permission to access public profile information and content analytics based on your granted permissions.</p>

          <h4>4. User-Generated Content</h4>
          <p>You retain rights to the content you upload but grant Klick a non-exclusive license to use, display, and promote that content within the app and associated promotions.</p>

          <h4>5. Prohibited Conduct</h4>
          <ul>
            <li>Do not impersonate others or submit false information.</li>
            <li>Do not upload harmful, offensive, or illegal content.</li>
            <li>Do not attempt to disrupt the app’s operation.</li>
          </ul>

          <h4>6. Account Suspension or Termination</h4>
          <p>We reserve the right to suspend or terminate accounts that violate these terms at our discretion.</p>

          <h4>7. Disclaimer and Limitation of Liability</h4>
          <p>Klick is provided “as is.” We are not responsible for indirect, incidental, or consequential damages resulting from your use of the service.</p>

          <h4>8. Governing Law</h4>
          <p>These terms are governed by the laws of your local jurisdiction unless otherwise stated.</p>

          <h4>9. Contact Us</h4>
          <p>Questions or concerns? Contact <a href="mailto:support@klickcontent.com">support@klickcontent.com</a>.</p>
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

export default TOS;
