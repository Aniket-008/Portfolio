import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, EyeOff, Eye } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  reducedMotion: boolean;
  setReducedMotion: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar: React.FC<NavbarProps> = ({ reducedMotion, setReducedMotion }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['about', 'skills', 'projects', 'journey', 'contact'];
      const scrollPos = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#06070a]/80 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
          }}
          className="group flex items-center gap-3 text-white focus:outline-none"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-cyan-400 p-[1.5px] transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-[#090b14] rounded-[10px] flex items-center justify-center">
              <span className="font-['Space_Grotesk'] font-bold text-sm tracking-wide bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">
                AK
              </span>
            </div>
          </div>
          <div>
            <div className="font-['Space_Grotesk'] font-bold text-base tracking-tight text-white flex items-center gap-2">
              {PERSONAL_INFO.name}
              <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Available for opportunities" />
            </div>
            <div className="text-[10px] font-mono text-purple-400/90 tracking-wider uppercase hidden sm:block">
              Systems & Backend
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-white/10 shadow-sm'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Controls & CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Reduced Motion Toggle Button */}
          <button
            onClick={() => setReducedMotion((prev) => !prev)}
            aria-label={reducedMotion ? 'Enable animations' : 'Reduce animations'}
            title={reducedMotion ? 'Animations reduced (Click to enable)' : 'Click to reduce motion'}
            className="p-2 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:border-purple-500/50 hover:bg-white/5 transition-all text-xs flex items-center gap-1.5 cursor-pointer"
          >
            {reducedMotion ? (
              <>
                <EyeOff className="w-4 h-4 text-purple-400" />
                <span className="font-mono text-[11px] hidden lg:inline">Motion: Off</span>
              </>
            ) : (
              <>
                <Eye className="w-4 h-4 text-cyan-400" />
                <span className="font-mono text-[11px] hidden lg:inline">Motion: On</span>
              </>
            )}
          </button>

          {/* Quick Connect CTA */}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-md shadow-purple-600/20 hover:shadow-purple-600/40 transition-all duration-300"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            <span>Let's Connect</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setReducedMotion((prev) => !prev)}
            className="p-2 rounded-lg border border-white/10 text-gray-400 hover:text-white"
            title="Toggle Motion"
          >
            {reducedMotion ? <EyeOff className="w-4 h-4 text-purple-400" /> : <Eye className="w-4 h-4 text-cyan-400" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded-xl border border-white/10 text-gray-300 hover:text-white hover:bg-white/5 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0c16]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 transition-all duration-300">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between pb-3 border-b border-white/5">
              <span className="text-xs font-mono text-gray-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                Available for internships & projects
              </span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-base font-medium text-gray-200 hover:text-purple-400 py-2 border-b border-white/5 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs font-mono text-gray-600">→</span>
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="w-full text-center py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 shadow-md text-sm"
              >
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
