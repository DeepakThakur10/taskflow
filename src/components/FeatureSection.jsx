import React from 'react';
import { Target, Layers, TrendingUp } from 'lucide-react';
import './FeatureSection.css';

export default function FeatureSection() {
  const features = [
    {
      id: 'focus',
      icon: Target,
      tag: 'FOCUS',
      title: 'Know what deserves your attention now.',
      description: 'Filter out the noise. TaskFlow surfaces your top priority tasks so you start every workday with single-minded focus.',
      color: 'indigo'
    },
    {
      id: 'organize',
      icon: Layers,
      tag: 'ORGANIZE',
      title: 'Turn scattered tasks into a clear plan.',
      description: 'Group ideas, client work, and personal projects seamlessly without complex project management overhead.',
      color: 'emerald'
    },
    {
      id: 'move-forward',
      icon: TrendingUp,
      tag: 'MOVE FORWARD',
      title: 'See progress without drowning in dashboards.',
      description: 'Real-time completion tracking gives you immediate momentum feedback without spending hours configuring charts.',
      color: 'amber'
    }
  ];

  return (
    <section className="features-section" id="features">
      <div className="container">
        
        {/* Section Header */}
        <div className="features-header">
          <h2 className="section-title">Designed for clarity & speed</h2>
          <p className="section-description">
            Everything you need to plan your day, and nothing to distract you from actually executing.
          </p>
        </div>

        {/* 3 Grid Cards */}
        <div className="features-grid">
          {features.map(feature => {
            const IconComponent = feature.icon;
            return (
              <div key={feature.id} className="feature-card card">
                <div className={`feature-icon-wrapper feature-icon-${feature.color}`}>
                  <IconComponent size={24} />
                </div>
                <div className="feature-tag">{feature.tag}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
