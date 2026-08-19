import React from 'react';
import { CheckSquare } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container footer-container">
        
        {/* Left Brand Column */}
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="footer-logo-icon">
              <CheckSquare size={18} />
            </div>
            <span className="footer-logo-text">TaskFlow</span>
          </div>
          <p className="footer-tagline">
            Turn scattered tasks into a focused daily plan.
          </p>
        </div>

        {/* Links Column */}
        <div className="footer-links-group">
          <a href="#product" className="footer-link">Product</a>
          <a href="#features" className="footer-link">Features</a>
          <a href="#how-it-works" className="footer-link">How it works</a>
        </div>

        {/* Right Copyright */}
        <div className="footer-copyright">
          © 2026 TaskFlow. Built for Acdyon Engineering.
        </div>

      </div>
    </footer>
  );
}
