import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import './FinalCTA.css';

export default function FinalCTA() {
  return (
    <section className="final-cta-section">
      <div className="container">
        <div className="final-cta-card card">
          <div className="cta-glow"></div>
          
          <h2 className="cta-headline">
            Make your next workday simpler.
          </h2>

          <p className="cta-subtext">
            Everything you need to focus. Nothing you don't.
          </p>

          <div className="cta-button-group">
            <a href="#product" className="btn btn-primary cta-btn">
              Try TaskFlow
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="cta-bullets">
            <span className="cta-bullet-item">
              <CheckCircle size={14} className="bullet-icon" /> Free UI demonstration
            </span>
            <span className="cta-bullet-item">
              <CheckCircle size={14} className="bullet-icon" /> No credit card needed
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
