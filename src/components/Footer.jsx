import React from 'react';
import { CheckSquare, Sparkles } from 'lucide-react';
import './Footer.css';

export default function Footer({ onLogoClick }) {
  return (
    <footer className="footer-section">
      <div className="container footer-container">
        
        {/* Left Brand Column */}
        <div className="footer-brand" onClick={onLogoClick} style={{ cursor: 'pointer' }} title="Click for Easter Egg">
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
          <button 
            onClick={onLogoClick} 
            className="footer-link" 
            style={{ 
              background: 'transparent', 
              border: 'none', 
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.25rem',
              color: '#5b5fef',
              fontWeight: '600'
            }}
          >
            <Sparkles size={13} /> Easter Egg
          </button>
        </div>

        {/* Right Copyright */}
        <div className="footer-copyright">
          © 2026 TaskFlow. Built for Acdyon Engineering.
        </div>

      </div>
    </footer>
  );
}
