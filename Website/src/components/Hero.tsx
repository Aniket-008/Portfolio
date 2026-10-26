import React, { useState, useRef } from 'react';
import { ArrowDown, Sparkles, Terminal, Code2, Database, Cpu } from 'lucide-react';
import { SocialIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';
import { getActiveSocialLinks, formatProfileHref } from '../data/socialLinks';
import avatar3d from '../assets/avatar-3d.jpg';

interface HeroProps {
  reducedMotion: boolean;
}

export const Hero: React.FC<HeroProps> = ({ reducedMotion }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background glow orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Column: Expressive Typography & CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          
          {/* Engineering Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md w-fit mb-6 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-xs font-mono font-medium tracking-wider uppercase text-cyan-300">
              REVA University • ISE Undergrad • Bengaluru
            </span>
          </div>

          {/* Main Title: “HEY, I'M ANIKET KUMAR” */}
          <h1 className="font-['Space_Grotesk'] text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white mb-4 leading-[1.08]">
            HEY, I'M{' '}
            <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent inline-block drop-shadow-[0_0_35px_rgba(168,85,247,0.35)]">
              {PERSONAL_INFO.name.toUpperCase()}
            </span>
          </h1>

          {/* Core Subtitle: “Building software from the fundamentals to the future.” */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-200 mb-4 font-['Space_Grotesk']">
            "{PERSONAL_INFO.tagline}"
          </h2>

          {/* Tagline: “Systems Development • Backend Engineering • Problem Solving” */}
          <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base font-mono text-purple-300/90 mb-8 font-medium">
            <span className="px-2.5 py-1 rounded-md bg-purple-950/40 border border-purple-500/20 text-purple-300">Systems Development</span>
            <span className="text-gray-600">•</span>
            <span className="px-2.5 py-1 rounded-md bg-blue-950/40 border border-blue-500/20 text-blue-300">Backend Engineering</span>
            <span className="text-gray-600">•</span>
            <span className="px-2.5 py-1 rounded-md bg-cyan-950/40 border border-cyan-500/20 text-cyan-300">Problem Solving</span>
          </div>

          {/* Description snippet */}
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mb-8">
            Information Science and Engineering student at <strong className="text-gray-200">REVA University, Bengaluru</strong>. Passionate about low-level computing, memory management in C/C++, scalable backend architecture, and mastering computer science fundamentals from the ground up.
          </p>

          {/* CTA Buttons & Social Quick Links */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            {/* Primary CTA: Explore My Work */}
            <button
              onClick={() => scrollToSection('projects')}
              className="group relative inline-flex items-center gap-3 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-xl shadow-purple-900/30 hover:shadow-purple-700/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
            >
              <span>Explore My Work</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-200" />
            </button>

            {/* Secondary CTA: Let's Connect */}
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-gray-200 bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>Let's Connect</span>
            </button>

            {/* Social Links (Configured dynamically in socialLinks.ts) */}
            <div className="flex items-center gap-2 pl-2 flex-wrap">
              {getActiveSocialLinks().map((link) => {
                const isEmail = link.id === 'email';
                return (
                  <a
                    key={link.id}
                    href={formatProfileHref(link)}
                    target={isEmail ? undefined : "_blank"}
                    rel={isEmail ? undefined : "noreferrer"}
                    title={`${link.name} ${isEmail ? '' : 'Profile'}`}
                    className={`p-3 rounded-xl bg-white/[0.03] border border-white/10 text-gray-400 hover:text-white ${link.colorTheme.borderHover} ${link.colorTheme.bgHover} transition-all`}
                  >
                    <SocialIcon name={link.icon} className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/10 max-w-lg">
            <div>
              <div className="text-lg sm:text-xl font-['Space_Grotesk'] font-bold text-white">REVA Univ</div>
              <div className="text-xs font-mono text-gray-400">B.Tech ISE (Bengaluru)</div>
            </div>
            <div>
              <div className="text-lg sm:text-xl font-['Space_Grotesk'] font-bold text-purple-400">C / C++ / Python</div>
              <div className="text-xs font-mono text-gray-400">Core Languages</div>
            </div>
            <div>
              <div className="text-lg sm:text-xl font-['Space_Grotesk'] font-bold text-cyan-400">Systems & DSA</div>
              <div className="text-xs font-mono text-gray-400">Foundational Focus</div>
            </div>
          </div>

        </div>

        {/* Right Column: 3D Character Avatar with Interactive Parallax Card */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          
          {/* Outer glow aura */}
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/30 via-indigo-600/20 to-cyan-500/30 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* 3D Interactive Tilt Container */}
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: reducedMotion
                ? 'none'
                : `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
            }}
            className="relative w-full max-w-[420px] rounded-3xl p-3 bg-gradient-to-b from-white/10 via-white/[0.02] to-transparent border border-white/15 backdrop-blur-xl shadow-2xl shadow-black/80"
          >
            {/* Card Header Tag */}
            <div className="flex items-center justify-between px-3 py-2 mb-2">
              <div className="flex items-center gap-1.5 font-mono text-[11px] text-gray-400">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                <span className="ml-2 text-gray-400">aniket@systems:~</span>
              </div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded-full">
                3D Interactive Model
              </div>
            </div>

            {/* 3D Character Render Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#07080d] border border-white/10 group">
              <img
                src={avatar3d}
                alt="Aniket Kumar — 3D Developer Avatar"
                className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />

              {/* Holographic rim gradient sheen */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06070a] via-transparent to-transparent opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-cyan-500/10 pointer-events-none" />

              {/* Bottom Character Info Bar */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#0b0d18]/85 backdrop-blur-md border border-white/15">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-['Space_Grotesk'] font-bold text-white text-base">
                      Aniket Kumar
                    </h3>
                    <p className="text-xs font-mono text-purple-400">
                      Aspiring Systems & Backend Dev
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Online
                  </div>
                </div>
              </div>
            </div>

            {/* Floating 3D Tech Orbit Badges */}
            <div
              className={`absolute -top-4 -left-4 px-3.5 py-1.5 rounded-xl bg-[#0f111e]/90 border border-purple-500/40 shadow-lg shadow-purple-500/20 backdrop-blur-md flex items-center gap-2 transition-transform duration-300 ${
                reducedMotion ? '' : 'animate-bounce'
              }`}
              style={{ animationDuration: '4s' }}
            >
              <Cpu className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-mono font-bold text-white">C / C++</span>
            </div>

            <div
              className={`absolute top-1/3 -right-5 px-3 py-1.5 rounded-xl bg-[#0f111e]/90 border border-cyan-500/40 shadow-lg shadow-cyan-500/20 backdrop-blur-md flex items-center gap-2 transition-transform duration-300 ${
                reducedMotion ? '' : 'animate-pulse'
              }`}
            >
              <Code2 className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-mono font-bold text-white">DSA</span>
            </div>

            <div
              className={`absolute -bottom-4 -right-2 px-3.5 py-1.5 rounded-xl bg-[#0f111e]/90 border border-blue-500/40 shadow-lg shadow-blue-500/20 backdrop-blur-md flex items-center gap-2 transition-transform duration-300 ${
                reducedMotion ? '' : 'animate-bounce'
              }`}
              style={{ animationDuration: '5s' }}
            >
              <Database className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-mono font-bold text-white">SQL & MySQL</span>
            </div>

            <div
              className={`absolute bottom-20 -left-6 px-3 py-1.5 rounded-xl bg-[#0f111e]/90 border border-amber-500/40 shadow-lg shadow-amber-500/20 backdrop-blur-md flex items-center gap-2 transition-transform duration-300`}
            >
              <Terminal className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-mono font-bold text-white">Linux CLI</span>
            </div>

          </div>

        </div>

      </div>

      {/* Scroll indicator chevron */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500 cursor-pointer hover:text-white transition-colors"
        onClick={() => scrollToSection('about')}
      >
        <span className="text-[11px] font-mono tracking-widest uppercase">Scroll Down</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-purple-400" />
      </div>
    </section>
  );
};
