import React from 'react';
import { Inbox, Filter, CheckCircle2 } from 'lucide-react';
import './HowItWorks.css';

export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Capture',
      description: 'Put everything you need to do in one place without friction or clutter.',
      icon: Inbox
    },
    {
      step: '02',
      title: 'Prioritize',
      description: 'TaskFlow helps you focus on what matters first with intelligent daily lists.',
      icon: Filter
    },
    {
      step: '03',
      title: 'Finish',
      description: 'Complete your work and watch your progress move forward effortlessly.',
      icon: CheckCircle2
    }
  ];

  return (
    <section className="how-section" id="how-it-works">
      <div className="container">
        
        {/* Header */}
        <div className="how-header">
          <span className="how-sub-tag">SIMPLE WORKFLOW</span>
          <h2 className="section-title">How TaskFlow works</h2>
          <p className="section-description">
            Three simple steps to transform daily chaos into meaningful progress.
          </p>
        </div>

        {/* Steps */}
        <div className="how-steps-grid">
          {steps.map((item, index) => {
            const IconComp = item.icon;
            return (
              <div key={item.step} className="step-card">
                <div className="step-number-row">
                  <span className="step-number">{item.step}</span>
                  <div className="step-icon-bubble">
                    <IconComp size={20} />
                  </div>
                </div>
                <h3 className="step-title">{item.title}</h3>
                <p className="step-desc">{item.description}</p>
                {index < steps.length - 1 && <div className="step-connector-line"></div>}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
