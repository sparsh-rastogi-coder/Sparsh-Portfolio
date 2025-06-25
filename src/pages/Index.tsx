
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import ParticleBackground from '@/components/ParticleBackground';
import ScrollToTop from '@/components/ScrollToTop';
import CursorFollower from '@/components/CursorFollower';

const Index = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [cursorFollower, setCursorFollower] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
    }
  }, [darkMode]);

  useEffect(() => {
    // Hide default cursor when cursor follower is enabled
    if (cursorFollower) {
      document.body.style.cursor = 'none';
    } else {
      document.body.style.cursor = 'auto';
    }

    return () => {
      document.body.style.cursor = 'auto';
    };
  }, [cursorFollower]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleCursorFollower = () => {
    setCursorFollower(!cursorFollower);
  };

  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <CursorFollower enabled={cursorFollower} />
      <Navbar 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode}
        cursorFollower={cursorFollower}
        toggleCursorFollower={toggleCursorFollower}
      />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      <ScrollToTop />
    </div>
  );
};

export default Index;
