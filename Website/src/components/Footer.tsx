import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { SocialIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';
import { getActiveSocialLinks, formatProfileHref } from '../data/socialLinks';

interface FooterProps {
  reducedMotion: boolean;
}

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC<FooterProps> = ({ reducedMotion }) => {
  const [bengaluruTime, setBengaluruTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }).format(now);
      setBengaluruTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
  };

  return (
    <footer className="relative bg-[#040508] border-t border-white/10 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-cyan-400 p-[1.5px]">
                <div className="w-full h-full bg-[#090b14] rounded-[10px] flex items-center justify-center">
                  <span className="font-['Space_Grotesk'] font-bold text-sm tracking-wide bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">
                    AK
                  </span>
                </div>
              </div>
              <span className="font-['Space_Grotesk'] font-bold text-xl text-white">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              {PERSONAL_INFO.title}. Focused on memory efficiency, computer science fundamentals, and building practical systems.
            </p>
            {/* Live Bengaluru Time Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-gray-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Bengaluru, IN (IST):</span>
              <span className="text-cyan-400 font-semibold">{bengaluruTime || 'Loading...'}</span>
            </div>
          </div>

          {/* Quick Nav Col */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-purple-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-mono text-gray-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">01 // About Me</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">02 // Technical Skills</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">03 // Featured Projects</a>
              </li>
              <li>
                <a href="#journey" className="hover:text-white transition-colors">04 // Education & Journey</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">05 // Contact & Connect</a>
              </li>
            </ul>
          </div>

          {/* Connect & Socials Col */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-wider text-cyan-400">
              Connect Channels
            </h4>
            <div className="flex items-center gap-3 flex-wrap">
              {getActiveSocialLinks().map((link) => {
                const isEmail = link.id === 'email';
                return (
                  <a
                    key={link.id}
                    href={formatProfileHref(link)}
                    target={isEmail ? undefined : "_blank"}
                    rel={isEmail ? undefined : "noreferrer"}
                    className={`p-3 rounded-xl bg-white/[0.04] border border-white/10 text-gray-400 hover:text-white ${link.colorTheme.borderHover} ${link.colorTheme.bgHover} transition-colors`}
                    title={link.name}
                  >
                    <SocialIcon name={link.icon} className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
            <p className="text-[11px] font-mono text-gray-500">
              Undergraduate at REVA University. Open for software engineering internships and hackathons.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <div>
            © {CURRENT_YEAR} Aniket Kumar. All rights reserved.
          </div>

          <div className="flex items-center gap-2">
            <span>Built with React 19, TypeScript, Tailwind CSS & Three.js</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white px-3 py-1.5 rounded-xl border border-white/10 hover:border-purple-500/40 bg-white/[0.02] hover:bg-white/[0.05] transition-all cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>

      </div>
    </footer>
  );
};
