import React, { useState } from 'react';
import { 
  FolderGit2, 
  Sparkles, 
  Cpu, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp,
  Info,
  Wrench,
  Bot,
  Laptop
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { PROJECTS_DATA } from '../data/portfolioData';
import type { ProjectItem } from '../data/portfolioData';

interface ProjectsProps {
  reducedMotion: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ reducedMotion: _reducedMotion }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [expandedFutureProjects, setExpandedFutureProjects] = useState(false);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'service-finder':
        return <Wrench className="w-6 h-6 text-cyan-400" />;
      case 'ai-recommender':
        return <Bot className="w-6 h-6 text-purple-400" />;
      case 'portfolio-website':
        return <Laptop className="w-6 h-6 text-blue-400" />;
      default:
        return <Cpu className="w-6 h-6 text-amber-400" />;
    }
  };

  const getStatusBadge = (status: ProjectItem['status']) => {
    switch (status) {
      case 'Live Project':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-950/60 border border-emerald-500/40 text-emerald-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Live Project
          </span>
        );
      case 'Concept Architecture':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-purple-950/60 border border-purple-500/40 text-purple-300">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            Concept Architecture
          </span>
        );
      case 'In Development':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-amber-950/60 border border-amber-500/40 text-amber-300">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            In Active Lab
          </span>
        );
    }
  };

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#06070a] border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 font-mono text-xs uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Featured Work & Engineering Concepts
          </div>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl text-base sm:text-lg">
            Engineering concepts, system design architectures, and interactive implementations honestly presented without fabricated statistics.
          </p>
        </div>

        {/* Featured Projects 3-Card Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {PROJECTS_DATA.slice(0, 3).map((project, index) => (
            <div
              key={project.id}
              className="flex flex-col justify-between rounded-3xl bg-gradient-to-b from-white/[0.05] via-white/[0.02] to-transparent border border-white/10 hover:border-purple-500/40 transition-all duration-300 p-7 hover:shadow-2xl hover:shadow-purple-950/30 hover:-translate-y-1.5 group relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header: Status + Category */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  {getStatusBadge(project.status)}
                  <span className="text-xs font-mono text-gray-500">
                    0{index + 1}
                  </span>
                </div>

                {/* Project Icon & Title */}
                <div className="flex items-start gap-4 mb-3">
                  <div className="p-3 rounded-2xl bg-[#0b0e1b] border border-white/10 shrink-0 group-hover:scale-110 transition-transform">
                    {getProjectIcon(project.id)}
                  </div>
                  <div>
                    <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white group-hover:text-purple-300 transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400 mt-1">
                      {project.category}
                    </p>
                  </div>
                </div>

                {/* Tagline */}
                <p className="text-sm font-medium text-gray-300 mb-4 italic">
                  "{project.tagline}"
                </p>

                {/* Description */}
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-6 p-4 rounded-2xl bg-black/30 border border-white/5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-purple-400 block mb-1">
                    System Architecture Highlights:
                  </span>
                  {project.highlights.slice(0, 2).map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-300 font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom: Tech Stack & Action Links */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] text-gray-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-mono font-medium text-white transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Repository</span>
                  </a>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-purple-600/30 hover:bg-purple-600/50 border border-purple-500/40 text-xs font-mono font-medium text-purple-200 transition-colors cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5 text-cyan-400" />
                    <span>System Spec</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Expandable Area for Future Projects */}
        <div className="mt-8 text-center">
          <button
            onClick={() => setExpandedFutureProjects(!expandedFutureProjects)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-sm font-mono text-gray-300 hover:text-white transition-all cursor-pointer"
          >
            <FolderGit2 className="w-4 h-4 text-purple-400" />
            <span>{expandedFutureProjects ? 'Collapse Explorations' : 'View More Projects & Systems Lab'}</span>
            {expandedFutureProjects ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {expandedFutureProjects && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {/* 4th Project: Systems & Algorithms Lab */}
              <div className="p-6 rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  {getStatusBadge(PROJECTS_DATA[3].status)}
                  <span className="text-xs font-mono text-gray-500">C / C++ Repo</span>
                </div>
                <h4 className="font-['Space_Grotesk'] text-xl font-bold text-white mb-2">
                  {PROJECTS_DATA[3].title}
                </h4>
                <p className="text-gray-300 text-xs sm:text-sm mb-4 leading-relaxed">
                  {PROJECTS_DATA[3].description}
                </p>
                <div className="space-y-1.5 mb-4">
                  {PROJECTS_DATA[3].highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs font-mono text-gray-400">
                      <CheckCircle2 className="w-3 h-3 text-purple-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                  <a
                    href={PROJECTS_DATA[3].githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View Repository Placeholder</span>
                  </a>
                </div>
              </div>

              {/* Editable Placeholder for Next Project */}
              <div className="p-6 rounded-3xl bg-white/[0.02] border border-dashed border-white/15 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-950/60 border border-blue-500/40 text-blue-300 mb-4">
                    [Future Project Slot]
                  </div>
                  <h4 className="font-['Space_Grotesk'] text-xl font-bold text-gray-300 mb-2">
                    Upcoming Systems / Hackathon Project
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm mb-4 leading-relaxed">
                    This slot is reserved for Aniket's next upcoming software implementation, university hackathon project, or low-level systems tool.
                  </p>
                  <div className="p-3 rounded-xl bg-black/40 font-mono text-xs text-gray-500">
                    <code>// Ready for your next repository commit</code>
                  </div>
                </div>
                <div className="pt-4 text-xs font-mono text-gray-500">
                  Easily editable in <code className="text-purple-400">src/data/portfolioData.ts</code>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Project Architecture Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="relative w-full max-w-2xl rounded-3xl bg-[#0c0e1a] border border-purple-500/40 p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
              
              <div className="flex items-start justify-between pb-4 border-b border-white/10 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    {getStatusBadge(selectedProject.status)}
                    <span className="text-xs font-mono text-cyan-400">
                      // {selectedProject.category}
                    </span>
                  </div>
                  <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-white">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-mono uppercase text-gray-400 tracking-wider mb-2">
                    Project Overview
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase text-gray-400 tracking-wider mb-3">
                    System Architecture & Design Highlights
                  </h4>
                  <div className="space-y-2.5">
                    {selectedProject.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs font-mono text-gray-200">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase text-gray-400 tracking-wider mb-2">
                    Technologies & Architecture Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-lg bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs text-gray-400">
                  <div className="text-cyan-400 font-semibold mb-1">// HONEST ARCHITECTURE NOTE:</div>
                  This card outlines an architectural specification designed with clean schema, modular components, and real algorithms. You can customize repository links at any time in the config file.
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 text-center rounded-xl bg-purple-600 hover:bg-purple-500 font-medium text-white text-sm transition-colors"
                  >
                    View GitHub Repository
                  </a>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-gray-300 text-sm font-medium transition-colors cursor-pointer"
                  >
                    Close Spec
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
