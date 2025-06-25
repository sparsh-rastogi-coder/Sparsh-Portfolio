
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import MagneticEffect from '@/components/MagneticEffect';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  cursorFollower: boolean;
  toggleCursorFollower: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode, cursorFollower, toggleCursorFollower }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];
  
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <MagneticEffect enabled={cursorFollower}>
            <div 
              className="text-xl font-bold text-gradient-green cursor-pointer"
              onClick={() => scrollToSection('hero')}
            >
              Sparsh Rastogi
            </div>
          </MagneticEffect>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <MagneticEffect key={item.id} enabled={cursorFollower} strength={0.2}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></div>
                  )}
                </button>
              </MagneticEffect>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <MagneticEffect enabled={cursorFollower}>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleCursorFollower}
                className="w-9 h-9 p-0"
                title="Toggle Cursor Effects"
              >
                {cursorFollower ? '✨' : '🖱️'}
              </Button>
            </MagneticEffect>
            
            <MagneticEffect enabled={cursorFollower}>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDarkMode}
                className="w-9 h-9 p-0"
              >
                {darkMode ? '☀️' : '🌙'}
              </Button>
            </MagneticEffect>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
