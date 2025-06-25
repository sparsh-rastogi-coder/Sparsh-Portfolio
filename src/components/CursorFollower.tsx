
import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  alpha: number;
  scale: number;
  vx: number;
  vy: number;
}

interface CursorFollowerProps {
  enabled: boolean;
}

const CursorFollower: React.FC<CursorFollowerProps> = ({ enabled }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const [isHovering, setIsHovering] = useState(false);
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    if (!enabled) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;

      // Check if hovering over clickable elements
      const target = e.target as HTMLElement;
      const isClickable = target.tagName === 'BUTTON' || 
                         target.tagName === 'A' || 
                         target.closest('button') || 
                         target.closest('a') ||
                         target.style.cursor === 'pointer';
      setIsHovering( isClickable );
      
      // Detect current section
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    const createParticle = () => {
      if (particlesRef.current.length < 15) {
        particlesRef.current.push({
          x: cursorRef.current.x,
          y: cursorRef.current.y,
          alpha: 1,
          scale: Math.random() * 0.5 + 0.5,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
        });
      }
    };

    const getSectionColor = (section: string) => {
      const colors = {
        hero: '#4ade80',
        about: '#60a5fa',
        skills: '#a78bfa',
        projects: '#fb7185',
        experience: '#fbbf24',
        contact: '#34d399',
      };
      return colors[section as keyof typeof colors] || '#4ade80';
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      // Smooth cursor following with lag
      const lagFactor = 0.15;
      cursorRef.current.x += (targetRef.current.x - cursorRef.current.x) * lagFactor;
      cursorRef.current.y += (targetRef.current.y - cursorRef.current.y) * lagFactor;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create particles periodically
      if (Math.random() < 0.3) {
        createParticle();
      }

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        particle.alpha -= 0.02;
        particle.scale *= 0.98;
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.alpha <= 0) {
          particlesRef.current.splice(index, 1);
          return;
        }

        ctx.save();
        ctx.globalAlpha = particle.alpha;
        ctx.fillStyle = getSectionColor(currentSection);
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 3 * particle.scale, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Draw main cursor follower
      const size = isHovering ? 25 : 15;
      const color = getSectionColor(currentSection);

      // Glow effect
      ctx.save();
      ctx.globalAlpha = 0.3;
      ctx.fillStyle = color;
      ctx.filter = 'blur(10px)';
      ctx.beginPath();
      ctx.arc(cursorRef.current.x, cursorRef.current.y, size * 1.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Main cursor
      ctx.save();
      ctx.globalAlpha = 0.8;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(cursorRef.current.x, cursorRef.current.y, size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Inner highlight
      ctx.save();
      ctx.globalAlpha = 1;
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(cursorRef.current.x, cursorRef.current.y, size * 0.3, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [enabled, currentSection, isHovering]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[60]"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default CursorFollower;
