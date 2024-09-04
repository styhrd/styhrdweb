import React, { useState } from 'react';
import './styles/index.scss';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { AnapoloProj } from './components/AnapoloProj';
import { BaryoProj } from './components/BaryoProj';

function App() {
  const [activeComponent, setActiveComponent] = useState('home');
  const [isLightMode, setIsLightMode] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleComponentChange = (component) => {
    setFadeIn(false); // Reset fade-in animation
    setActiveComponent(component);
    setTimeout(() => setFadeIn(true), 0); // Trigger fade-in animation after a short delay
    setShowOverlay(false); // Hide navigation when a menu item is clicked
  };

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <div className={`app-container ${isLightMode ? 'light-mode' : ''}`}>
      <div className='content-container'>
        <div className='mobnav'>
          <button className='toggle-btn' onClick={toggleOverlay}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
            </svg>
          </button>
          <p className='mobname'>STYHRD</p>
        </div>

        <div className='navigation-container'>
          <Navigation onComponentChange={handleComponentChange} toggleTheme={toggleTheme} />
        </div>

        {/* Overlay navigation for smaller screens */}
        <div className={`overlay ${showOverlay ? 'overlay-active' : ''}`}>
          <Navigation onComponentChange={handleComponentChange} toggleTheme={toggleTheme} />
        </div>

        {/* Information container */}
        <div className={`information-container ${fadeIn ? 'fade-in' : ''}`}>
          {activeComponent === 'home' && <Home />}
          {activeComponent === 'about' && <About />}
          {activeComponent === 'skills' && <Skills />}
          {activeComponent === 'projects' && <Projects onProjectSelect={handleComponentChange} />}
          {activeComponent === 'anapoloProj' && <AnapoloProj />}
          {activeComponent === 'baryoProj' && <BaryoProj />}
        </div>
      </div>
    </div>
  );
}

export default App;
