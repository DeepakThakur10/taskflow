import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ProductPreview from './components/ProductPreview.jsx';
import FeatureSection from './components/FeatureSection.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import FinalCTA from './components/FinalCTA.jsx';
import Footer from './components/Footer.jsx';
import { Sparkles, X, Gamepad2 } from 'lucide-react';

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
  const [easterEggMessage, setEasterEggMessage] = useState({
    title: 'Easter Egg Found! 🎉',
    desc: 'TaskFlow secret speed mode unlocked. Keep moving forward!'
  });

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
      // Check if key matches current position in Konami code
      if (e.key.toLowerCase() === konamiCode[konamiIndex].toLowerCase()) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          setEasterEggMessage({
            title: '🎮 KONAMI CODE UNLOCKED! 🚀',
            desc: 'Acdyon Secret Konami Mode Activated! +100 Productivity Points.'
          });
          setShowEasterEgg(true);
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0; // reset sequence if wrong key pressed
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

  // Handle Logo Easter Egg click
  const handleLogoClick = () => {
    setLogoClicks(prev => {
      const nextCount = prev + 1;
      if (nextCount >= 3) {
        setEasterEggMessage({
          title: 'Logo Secret Unlocked! ⚡',
          desc: 'You clicked the TaskFlow logo 3 times! Acdyon reviewer bonus activated.'
        });
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
          <Gamepad2 size={22} style={{ color: '#5b5fef' }} />
          <div>
            <strong>{easterEggMessage.title}</strong>
            <p style={{ fontSize: '0.8125rem', color: '#667085', margin: 0 }}>
              {easterEggMessage.desc}
            </p>
          </div>
          <button 
            onClick={() => setShowEasterEgg(false)}
            style={{ 
              background: 'transparent', 
              border: 'none', 
              color: '#98a2b3', 
              cursor: 'pointer',
              marginLeft: '0.75rem',
              padding: '0.25rem'
            }}
            aria-label="Close easter egg notification"
          >
            <X size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
