import React, { useState, useEffect } from 'react';
import './styles/index.scss';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';

function App() {
  const [activeComponent, setActiveComponent] = useState('home');
  const [isLightMode, setIsLightMode] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  const handleComponentChange = (component) => {
    setFadeIn(false); // Reset fade-in animation
    setActiveComponent(component);
    setTimeout(() => setFadeIn(true), 0); // Trigger fade-in animation after a short delay
  };

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <div className={`app-container ${isLightMode ? 'light-mode' : ''}`}>
      <div className='content-container'>
        <div className='navigation-container'>
          <Navigation onComponentChange={handleComponentChange} toggleTheme={toggleTheme} />
        </div>

        <div className={`information-container ${fadeIn ? 'fade-in' : ''}`}>
          {activeComponent === 'home' && <Home />}
          {activeComponent === 'about' && <About />}
        </div>
      </div>
    </div>
  );
}

export default App;
