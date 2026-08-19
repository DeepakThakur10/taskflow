import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ProductPreview from './components/ProductPreview.jsx';
import FeatureSection from './components/FeatureSection.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import FinalCTA from './components/FinalCTA.jsx';
import Footer from './components/Footer.jsx';
import { Sparkles, X, Heart, Trophy } from 'lucide-react';

export default function App() {
  // Initial realistic demo tasks state
  const [tasks, setTasks] = useState([
    {
      id: 'task-1',
      title: 'Finish API integration',
      priority: 'High',
      category: 'Backend',
      completed: false
    },
    {
      id: 'task-2',
      title: 'Review authentication flow',
      priority: 'Medium',
      category: 'Security',
      completed: true
    },
    {
      id: 'task-3',
      title: 'Update project documentation',
      priority: 'Low',
      category: 'Docs',
      completed: false
    },
    {
      id: 'task-4',
      title: 'Optimize database queries',
      priority: 'High',
      category: 'Performance',
      completed: true
    }
  ]);

  // Easter Egg States
  const [logoClicks, setLogoClicks] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  // Konami Code Listener (↑ ↑ ↓ ↓ ← → ← → b a)
  useEffect(() => {
    const konamiCode = [
      'ArrowUp', 'ArrowUp',
      'ArrowDown', 'ArrowDown',
      'ArrowLeft', 'ArrowRight',
      'ArrowLeft', 'ArrowRight',
      'b', 'a'
    ];
    let konamiIndex = 0;

    const handleKeyDown = (e) => {
      if (e.key.toLowerCase() === konamiCode[konamiIndex].toLowerCase()) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          setShowEasterEgg(true);
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Toggle task completed status
  const handleToggleTask = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Handle Logo Easter Egg click (trigged on logo click)
  const handleLogoClick = () => {
    setShowEasterEgg(true);
  };

  return (
    <div className="app-root">
      {/* Top Navbar */}
      <Navbar onLogoClick={handleLogoClick} />

      {/* Hero Section wrapping Product Dashboard Preview */}
      <Hero>
        <ProductPreview tasks={tasks} onToggleTask={handleToggleTask} />
      </Hero>

      {/* Features Grid Section */}
      <FeatureSection />

      {/* 3-Step How It Works Section */}
      <HowItWorks />

      {/* Final Call To Action Section */}
      <FinalCTA />

      {/* Footer */}
      <Footer onLogoClick={handleLogoClick} />

      {/* Hidden Easter Egg Modal / Toast Banner */}
      {showEasterEgg && (
        <div className="easter-egg-modal-overlay" onClick={() => setShowEasterEgg(false)}>
          <div className="easter-egg-card card" onClick={e => e.stopPropagation()}>
            <button
              className="easter-egg-close-btn"
              onClick={() => setShowEasterEgg(false)}
              aria-label="Close message"
            >
              <X size={18} />
            </button>

            <div className="easter-egg-icon-wrapper">
              <Trophy size={28} className="easter-egg-trophy" />
            </div>

            <span className="easter-egg-badge">
              <Sparkles size={14} /> Secret Easter Egg Unlocked!
            </span>

            <h3 className="easter-egg-heading">
              Sir Finally You Found The Easter Egg!
            </h3>

            <p className="easter-egg-body">
              Dear Acdyon Technologies Team,<br /><br />
              Thank you for reviewing my frontend engineering challenge! I built <strong>TaskFlow</strong> with deep attention to code simplicity, responsiveness, component architecture, and UI polish. I would be thrilled to join Acdyon and build great products with your engineering team.
            </p>

            <div className="easter-egg-footer">
              <button
                className="btn btn-primary btn-sm"
                onClick={() => setShowEasterEgg(false)}
              >
                <Heart size={14} fill="#ffffff" /> Thank you for reviewing!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
