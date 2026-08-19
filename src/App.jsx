import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ProductPreview from './components/ProductPreview.jsx';
import FeatureSection from './components/FeatureSection.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import FinalCTA from './components/FinalCTA.jsx';
import Footer from './components/Footer.jsx';
import { Sparkles, X } from 'lucide-react';

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

  // Easter Egg State (Click logo 3 times to unlock hidden easter egg)
  const [logoClicks, setLogoClicks] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  // Toggle task completed status
  const handleToggleTask = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Handle Logo Easter Egg click
  const handleLogoClick = () => {
    setLogoClicks(prev => {
      const nextCount = prev + 1;
      if (nextCount >= 3) {
        setShowEasterEgg(true);
        return 0;
      }
      return nextCount;
    });
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
      <Footer />

      {/* Hidden Easter Egg Toast */}
      {showEasterEgg && (
        <div className="easter-egg-toast">
          <Sparkles size={20} style={{ color: '#6366f1' }} />
          <div>
            <strong>Easter Egg Found! 🎉</strong>
            <p style={{ fontSize: '0.8125rem', color: '#a1a1aa', margin: 0 }}>
              TaskFlow secret speed mode unlocked. Keep moving forward!
            </p>
          </div>
          <button 
            onClick={() => setShowEasterEgg(false)}
            style={{ 
              background: 'transparent', 
              border: 'none', 
              color: '#a1a1aa', 
              cursor: 'pointer',
              marginLeft: '0.5rem'
            }}
          >
            <X size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
