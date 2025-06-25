
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import MagneticEffect from '@/components/MagneticEffect';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-green-600/20"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-gradient">Sparsh Rastogi</span>
          </h1>
          
          <div className="text-xl md:text-2xl font-medium mb-8 space-y-2">
            <div className="flex flex-wrap justify-center gap-4 text-muted-foreground">
              <span className="bg-gradient-green px-4 py-2 rounded-full text-white font-semibold animate-float">
                AI ML Enthusiast
              </span>
              <span className="bg-gradient-primary px-4 py-2 rounded-full text-white font-semibold animate-float" style={{ animationDelay: '1s' }}>
                Web Developer
              </span>
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2 rounded-full text-white font-semibold animate-float" style={{ animationDelay: '2s' }}>
                Quant Enthusiast
              </span>
            </div>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
            Turning ideas into <span className="text-gradient-green font-semibold">smart</span>, 
            <span className="text-gradient font-semibold"> scalable systems</span>
          </p>

          <div className="space-y-6">
            <MagneticEffect strength={0.4}>
              <Button
                onClick={scrollToAbout}
                size="lg"
                className="bg-gradient-green hover:scale-105 transition-all duration-300 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl"
              >
                Explore My Journey
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
            </MagneticEffect>

            <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>IIT Patna</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span>WorldQuant</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span>Codeforces Expert</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
