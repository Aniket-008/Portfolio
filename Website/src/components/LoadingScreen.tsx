import React, { useEffect, useState } from 'react';
import { Terminal, Shield, Zap, CheckCircle2 } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState('Initializing kernel...');
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const steps = [
      { at: 15, text: 'Booting memory allocator & runtime...' },
      { at: 40, text: 'Compiling C/C++ & DSA structures...' },
      { at: 65, text: 'Calibrating Three.js 3D viewport...' },
      { at: 85, text: 'Linking systems & portfolio assets...' },
      { at: 100, text: 'Systems operational. Welcome!' },
    ];

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 8) + 4;
        if (next >= 100) {
          clearInterval(timer);
          setCurrentStep('Systems operational. Welcome!');
          setTimeout(() => {
            setIsFading(true);
            setTimeout(onComplete, 500);
          }, 300);
          return 100;
        }

        const match = steps.find((s) => next >= s.at && prev < s.at);
        if (match) {
          setCurrentStep(match.text);
        }

        return next;
      });
    }, 45);

    return () => clearInterval(timer);
  }, [onComplete]);

  const handleSkip = () => {
    setIsFading(true);
    setTimeout(onComplete, 200);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#06070a] transition-opacity duration-500 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background radial gradient glow */}
      <div className="absolute inset-0 bg-radial from-purple-900/15 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-md px-6 text-center">
        {/* Monogram Badge */}
        <div className="relative inline-flex items-center justify-center mb-8">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-purple-600 via-blue-600 to-cyan-400 p-0.5 shadow-2xl shadow-purple-500/20 animate-pulse">
            <div className="w-full h-full bg-[#090b12] rounded-2xl flex items-center justify-center">
              <span className="font-['Space_Grotesk'] text-3xl font-extrabold tracking-wider bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                AK
              </span>
            </div>
          </div>
          <div className="absolute -bottom-1 -right-1 p-1 bg-[#06070a] rounded-full">
            <Zap className="w-4 h-4 text-cyan-400 animate-bounce" />
          </div>
        </div>

        {/* Title */}
        <h2 className="font-['Space_Grotesk'] text-2xl font-bold tracking-tight text-white mb-2">
          ANIKET KUMAR
        </h2>
        <p className="text-xs uppercase tracking-widest text-purple-400/90 font-mono mb-8 flex items-center justify-center gap-2">
          <Terminal className="w-3.5 h-3.5" /> Systems & Backend Engineering
        </p>

        {/* Progress Bar Container */}
        <div className="w-full bg-gray-900/90 border border-white/10 rounded-full h-2.5 p-0.5 mb-4 shadow-inner">
          <div
            className="h-full rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 transition-all duration-100 ease-out shadow-[0_0_12px_rgba(6,182,212,0.6)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Status Line */}
        <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-8">
          <span className="flex items-center gap-1.5 truncate">
            {progress >= 100 ? (
              <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0" />
            ) : (
              <Shield className="w-3.5 h-3.5 text-cyan-400 shrink-0 animate-spin" />
            )}
            <span className="truncate">{currentStep}</span>
          </span>
          <span className="text-cyan-400 font-semibold shrink-0 ml-2">{progress}%</span>
        </div>

        {/* Skip Button */}
        <button
          onClick={handleSkip}
          className="text-xs font-mono text-gray-500 hover:text-gray-300 transition-colors uppercase tracking-widest border border-white/5 hover:border-white/20 px-3 py-1.5 rounded-lg"
        >
          Skip Intro [ESC]
        </button>
      </div>
    </div>
  );
};
