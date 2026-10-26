import React, { useState } from 'react';
import { 
  Code2, 
  Database, 
  Cpu, 
  Terminal, 
  Globe, 
  Check, 
  Sparkles, 
  Layers, 
  Command, 
  FolderGit2
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import type { SkillItem } from '../data/portfolioData';

interface SkillsProps {
  reducedMotion: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ reducedMotion: _reducedMotion }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeSkill, setActiveSkill] = useState<SkillItem | null>(SKILLS_DATA[0]);

  const categories = [
    'All',
    'Programming',
    'Database',
    'Computer Science',
    'Tools & Environment',
    'Web Fundamentals'
  ];

  const filteredSkills = selectedCategory === 'All'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming':
        return <Code2 className="w-4 h-4 text-purple-400" />;
      case 'Database':
        return <Database className="w-4 h-4 text-blue-400" />;
      case 'Computer Science':
        return <Cpu className="w-4 h-4 text-cyan-400" />;
      case 'Tools & Environment':
        return <Terminal className="w-4 h-4 text-amber-400" />;
      case 'Web Fundamentals':
        return <Globe className="w-4 h-4 text-emerald-400" />;
      default:
        return <Layers className="w-4 h-4 text-gray-400" />;
    }
  };

  const getSkillLogo = (name: string) => {
    if (name === 'C') {
      return (
        <span className="font-mono font-black text-xl text-purple-400">C</span>
      );
    }
    if (name === 'C++') {
      return (
        <span className="font-mono font-black text-xl text-indigo-400">C++</span>
      );
    }
    if (name === 'Python') {
      return (
        <span className="font-mono font-bold text-lg text-yellow-400">py</span>
      );
    }
    if (name.includes('SQL')) {
      return <Database className="w-5 h-5 text-blue-400" />;
    }
    if (name.includes('Linux') || name.includes('Shell')) {
      return <Terminal className="w-5 h-5 text-amber-400" />;
    }
    if (name.includes('Git')) {
      return <FolderGit2 className="w-5 h-5 text-red-400" />;
    }
    if (name.includes('HTML') || name.includes('CSS')) {
      return <Globe className="w-5 h-5 text-emerald-400" />;
    }
    return <Cpu className="w-5 h-5 text-cyan-400" />;
  };

  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#06070a] border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Capabilities & Toolkit
          </div>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-400 max-w-2xl text-base sm:text-lg">
            Honestly represented capabilities based on core engineering coursework, practical problem solving, and hands-on systems development. Progress-free and evidence-focused.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-900/30 border border-purple-400/40'
                    : 'bg-white/[0.03] text-gray-400 hover:text-white hover:bg-white/[0.07] border border-white/10'
                }`}
              >
                {getCategoryIcon(cat)}
                <span>{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {filteredSkills.map((skill) => {
            const isSelected = activeSkill?.name === skill.name;
            return (
              <div
                key={skill.name}
                onClick={() => setActiveSkill(skill)}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden group ${
                  isSelected
                    ? 'bg-gradient-to-br from-white/[0.08] to-white/[0.02] border-purple-500/60 shadow-xl shadow-purple-950/30 -translate-y-1'
                    : 'bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.05] hover:-translate-y-1'
                }`}
              >
                {/* Top Row: Icon + Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0b0d18] border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                    {getSkillLogo(skill.name)}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.04] text-purple-300 border border-purple-500/20">
                    {skill.level}
                  </span>
                </div>

                {/* Skill Name */}
                <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors flex items-center justify-between">
                  <span>{skill.name}</span>
                  <span className="text-xs font-mono text-gray-500 font-normal">
                    {skill.category}
                  </span>
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                  {skill.description}
                </p>

                {/* Tags / Sub-concepts */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.03] text-gray-300 border border-white/5"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Subtle bottom border glow */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500/0 via-purple-500/40 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            );
          })}
        </div>

        {/* Selected Skill Spotlight Box */}
        {activeSkill && (
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0d0f1b] via-[#090b14] to-[#0d0f1b] border border-purple-500/30 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Command className="w-32 h-32 text-cyan-400" />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>SKILL SPOTLIGHT // {activeSkill.category.toUpperCase()}</span>
                </div>
                <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-white mb-3 flex items-center gap-3">
                  <span>{activeSkill.name}</span>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
                    {activeSkill.level}
                  </span>
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                  {activeSkill.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {activeSkill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-purple-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 bg-black/40 rounded-2xl p-4 border border-white/10">
                <div className="text-xs font-mono text-gray-400 mb-2 pb-2 border-b border-white/10 flex items-center justify-between">
                  <span>Honest Presentation Policy</span>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <p className="text-xs text-gray-300 leading-relaxed font-mono">
                  No arbitrary 85% or 95% progress bars. Skills are built on genuine coursework, self-study, and projects in C/C++, Linux, and Python.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
