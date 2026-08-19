import React, { useState } from 'react';
import { CheckSquare, Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ onLogoClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  return (
    <header className="navbar-header">
      <div className="container navbar-container">
        {/* Logo with Easter Egg Trigger */}
        <div className="navbar-logo-group" onClick={onLogoClick} title="Click logo for a surprise">
          <div className="navbar-logo-icon">
            <CheckSquare size={20} className="logo-icon-svg" />
          </div>
          <span className="navbar-logo-text">TaskFlow</span>
        </div>

        {/* Desktop Links */}
        <nav className="navbar-desktop-nav">
          <a href="#product" className="nav-link">Product</a>
          <a href="#features" className="nav-link">Features</a>
          <a href="#how-it-works" className="nav-link">How it works</a>
        </nav>

        {/* Desktop CTA */}
        <div className="navbar-desktop-cta">
          <a href="#product" className="btn btn-primary btn-sm">
            Try TaskFlow
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="navbar-mobile-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="navbar-mobile-drawer">
          <a 
            href="#product" 
            className="mobile-nav-link" 
            onClick={() => setMobileMenuOpen(false)}
          >
            Product
          </a>
          <a 
            href="#features" 
            className="mobile-nav-link" 
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#how-it-works" 
            className="mobile-nav-link" 
            onClick={() => setMobileMenuOpen(false)}
          >
            How it works
          </a>
          <a 
            href="#product" 
            className="btn btn-primary mobile-cta-btn" 
            onClick={() => setMobileMenuOpen(false)}
          >
            Try TaskFlow
            <ArrowRight size={16} />
          </a>
        </div>
      )}
    </header>
  );
}
