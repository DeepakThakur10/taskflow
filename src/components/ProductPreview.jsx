import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  CheckCircle2, 
  FolderKanban, 
  Target, 
  Activity, 
  Check, 
  Play, 
  Pause, 
  RotateCcw,
  Plus,
  Clock,
  Zap,
  TrendingUp,
  Sparkles
} from 'lucide-react';
import './ProductPreview.css';

export default function ProductPreview({ tasks, onToggleTask }) {
  // Sidebar active navigation item state
  const [activeTab, setActiveTab] = useState('Today');

  // Focus Timer state (25 minutes = 1500 seconds)
  const [timerSeconds, setTimerSeconds] = useState(1500);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Simple Timer effect
  useEffect(() => {
    let interval = null;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds(prev => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSeconds]);

  // Format seconds into MM:SS
  const formatTime = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleTimer = () => {
    setIsTimerRunning(prev => !prev);
  };

  const resetTimer = () => {
    setIsTimerRunning(false);
    setTimerSeconds(1500);
  };

  // Calculate dynamic progress stats
  const completedCount = tasks.filter(t => t.completed).length;
  const totalCount = tasks.length;
  const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <div className="dashboard-container card">
      {/* Top Window Bar (Simulates macOS/SaaS App Frame) */}
      <div className="dashboard-window-bar">
        <div className="window-dots">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        <div className="window-title">
          <Sparkles size={12} className="window-title-icon" />
          TaskFlow Workspace — Today
        </div>
        <div className="window-badge">UI Demo Mode</div>
      </div>

      {/* Main Dashboard Layout */}
      <div className="dashboard-grid">
        
        {/* Sidebar Navigation */}
        <aside className="dashboard-sidebar">
          <div className="sidebar-section-label">Workspace</div>
          <nav className="sidebar-nav">
            <button 
              className={`sidebar-link ${activeTab === 'Today' ? 'active' : ''}`}
              onClick={() => setActiveTab('Today')}
            >
              <Calendar size={16} />
              <span>Today</span>
              <span className="sidebar-counter">{tasks.filter(t => !t.completed).length}</span>
            </button>
            <button 
              className={`sidebar-link ${activeTab === 'Tasks' ? 'active' : ''}`}
              onClick={() => setActiveTab('Tasks')}
            >
              <CheckCircle2 size={16} />
              <span>Tasks</span>
            </button>
            <button 
              className={`sidebar-link ${activeTab === 'Projects' ? 'active' : ''}`}
              onClick={() => setActiveTab('Projects')}
            >
              <FolderKanban size={16} />
              <span>Projects</span>
            </button>
            <button 
              className={`sidebar-link ${activeTab === 'Focus' ? 'active' : ''}`}
              onClick={() => setActiveTab('Focus')}
            >
              <Target size={16} />
              <span>Focus</span>
            </button>
            <button 
              className={`sidebar-link ${activeTab === 'Activity' ? 'active' : ''}`}
              onClick={() => setActiveTab('Activity')}
            >
              <Activity size={16} />
              <span>Activity</span>
            </button>
          </nav>

          {/* Quick Tip inside sidebar */}
          <div className="sidebar-tip">
            <Zap size={14} className="tip-icon" />
            <p><strong>Pro Tip:</strong> Click checkboxes to experience live progress tracking.</p>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="dashboard-main">
          
          {/* Greeting Header */}
          <div className="dashboard-header">
            <div>
              <h2 className="greeting-title">Good morning 👋</h2>
              <p className="greeting-sub">Here is your focused plan for today.</p>
            </div>
            <div className="date-pill">
              <Clock size={14} />
              <span>Today, Aug 20</span>
            </div>
          </div>

          {/* Tasks Section Header */}
          <div className="section-subtitle-bar">
            <h3 className="section-subtitle">Today's Focus</h3>
            <span className="subtitle-count">{completedCount} of {totalCount} completed</span>
          </div>

          {/* Task List */}
          <div className="task-list">
            {tasks.map(task => (
              <div 
                key={task.id} 
                className={`task-card ${task.completed ? 'completed' : ''}`}
                onClick={() => onToggleTask(task.id)}
              >
                <div 
                  className={`task-checkbox ${task.completed ? 'checked' : ''}`}
                  role="checkbox"
                  aria-checked={task.completed}
                  tabIndex={0}
                >
                  {task.completed && <Check size={14} strokeWidth={3} />}
                </div>

                <div className="task-content">
                  <span className="task-title">{task.title}</span>
                  <div className="task-metadata">
                    <span className={`badge badge-${task.priority.toLowerCase()}`}>
                      {task.priority}
                    </span>
                    <span className="category-tag">{task.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </main>

        {/* Right Widgets Column (Progress & Focus Timer) */}
        <div className="dashboard-widgets">
          
          {/* Progress Card */}
          <div className="widget-card">
            <div className="widget-header">
              <TrendingUp size={16} className="widget-icon text-emerald" />
              <h4>Today's Progress</h4>
            </div>
            <div className="progress-value-row">
              <span className="progress-percentage">{progressPercent}%</span>
              <span className="progress-detail">{completedCount}/{totalCount} Done</span>
            </div>
            <div className="progress-track">
              <div 
                className="progress-fill" 
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
            <p className="widget-footnote">
              {progressPercent === 100 
                ? "🎉 All tasks completed! Great work." 
                : `${totalCount - completedCount} tasks remaining today.`}
            </p>
          </div>

          {/* Focus Timer Card */}
          <div className="widget-card">
            <div className="widget-header">
              <Target size={16} className="widget-icon text-indigo" />
              <h4>Focus Session</h4>
            </div>
            <div className="timer-display">
              {formatTime(timerSeconds)}
            </div>
            <div className="timer-actions">
              <button 
                className={`btn btn-sm ${isTimerRunning ? 'btn-secondary' : 'btn-primary'}`}
                onClick={toggleTimer}
              >
                {isTimerRunning ? <Pause size={14} /> : <Play size={14} />}
                <span>{isTimerRunning ? 'Pause' : 'Start focus'}</span>
              </button>
              <button 
                className="btn btn-ghost btn-sm"
                onClick={resetTimer}
                title="Reset timer"
              >
                <RotateCcw size={14} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
