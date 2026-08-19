import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import './Hero.css';

export default function Hero({ children }) {
  return (
    <section className="hero-section" id="hero">
      {/* Extremely subtle ambient glow behind dashboard */}
      <div className="hero-ambient-glow" aria-hidden="true"></div>

      <div className="container hero-container">
        
        {/* Subtle pill tag */}
        <div className="hero-badge">
          <Sparkles size={14} className="hero-badge-icon" />
          <span>Productivity Redefined</span>
        </div>

        {/* Hero Main Headline with subtle accent highlight */}
        <h1 className="hero-headline">
          Stop managing your work.
          <br />
          Start <span className="hero-highlight">moving it forward.</span>
        </h1>

        {/* Supporting Copy */}
        <p className="hero-subtext">
          TaskFlow turns scattered tasks into a focused daily plan, so you always know what deserves your attention next.
        </p>

        {/* Action Buttons */}
        <div className="hero-actions">
          <a href="#product" className="btn btn-primary hero-btn-main">
            Try TaskFlow
            <ArrowRight size={16} />
          </a>
          <a href="#how-it-works" className="btn btn-ghost hero-btn-sub">
            See how it works
          </a>
        </div>

        {/* Product Dashboard Container passed as children */}
        <div className="hero-dashboard-wrapper" id="product">
          {children}
        </div>

      </div>
    </section>
  );
}
