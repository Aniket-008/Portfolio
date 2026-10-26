import React, { useState, useEffect } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { ThreeBackground } from './components/ThreeBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Journey } from './components/Journey';
import { TerminalSection } from './components/Terminal';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  // Check user system preference for reduced motion on mount
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#06070a] text-gray-100 selection:bg-purple-600 selection:text-white font-sans overflow-x-hidden">
      {/* Loading Screen */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Three.js 3D Interactive Background */}
      <ThreeBackground reducedMotion={reducedMotion} />

      {/* Subtle Background Grid Overlay */}
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0" />

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation Bar */}
        <Navbar reducedMotion={reducedMotion} setReducedMotion={setReducedMotion} />

        {/* Page Sections */}
        <main className="flex-1">
          <Hero reducedMotion={reducedMotion} />
          <About reducedMotion={reducedMotion} />
          <Skills reducedMotion={reducedMotion} />
          <Projects reducedMotion={reducedMotion} />
          <Journey reducedMotion={reducedMotion} />
          <TerminalSection />
          <Contact reducedMotion={reducedMotion} />
        </main>

        {/* Footer */}
        <Footer reducedMotion={reducedMotion} />
      </div>
    </div>
  );
};

export default App;
