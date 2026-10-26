import React from 'react';
import { GraduationCap, Code2, Database, Trophy, Sparkles, MapPin, Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import { TIMELINE_DATA } from '../data/portfolioData';

interface JourneyProps {
  reducedMotion: boolean;
}

export const Journey: React.FC<JourneyProps> = ({ reducedMotion: _reducedMotion }) => {
  const getTimelineIcon = (id: string) => {
    switch (id) {
      case 'reva-btech':
        return <GraduationCap className="w-5 h-5 text-purple-400" />;
      case 'programming-fundamentals':
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'dsa-backend-skills':
        return <Database className="w-5 h-5 text-blue-400" />;
      case 'projects-hackathons':
        return <Trophy className="w-5 h-5 text-amber-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="journey" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#06070a] border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Milestones & Academic Path
          </div>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Education & Learning Journey
          </h2>
          <p className="text-gray-400 max-w-2xl text-base sm:text-lg">
            A chronological timeline detailing formal education at REVA University, foundational programming rigor, and hands-on skill development.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-white/10 ml-4 sm:ml-8 md:ml-32 pl-6 sm:pl-8 space-y-12">
          
          {TIMELINE_DATA.map((item) => (
            <div key={item.id} className="relative group">
              
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-10 h-10 rounded-2xl bg-[#090b14] border-2 border-purple-500/50 flex items-center justify-center shadow-lg shadow-purple-950/40 group-hover:scale-110 group-hover:border-cyan-400 transition-all">
                {getTimelineIcon(item.id)}
              </div>

              {/* Date / Period tag for desktop (floated left on wide screens) */}
              <div className="hidden md:block absolute -left-40 top-3 text-right w-24">
                <span className="text-xs font-mono font-semibold text-cyan-400">
                  {item.period}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 group-hover:border-purple-500/40 group-hover:bg-white/[0.06] transition-all shadow-xl">
                
                {/* Mobile Period Badge */}
                <div className="md:hidden inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.period}</span>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>
                  <span className={`text-[11px] font-mono px-3 py-1 rounded-full border ${
                    item.status === 'Completed'
                      ? 'bg-emerald-950/50 border-emerald-500/40 text-emerald-300'
                      : item.status === 'In Progress'
                      ? 'bg-purple-950/50 border-purple-500/40 text-purple-300'
                      : 'bg-blue-950/50 border-blue-500/40 text-blue-300'
                  }`}>
                    {item.status}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-400 mb-4 pb-3 border-b border-white/5">
                  <span className="text-purple-300 font-medium">{item.institution}</span>
                  <span className="text-gray-600">•</span>
                  <span className="flex items-center gap-1 text-gray-400">
                    <MapPin className="w-3 h-3 text-cyan-400" />
                    {item.location}
                  </span>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Achievements / Highlights */}
                <div className="space-y-2">
                  {item.achievements.map((ach, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-mono text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Editable Progress Note Banner */}
        <div className="mt-16 p-6 rounded-3xl bg-gradient-to-r from-purple-950/30 via-[#0a0d18] to-cyan-950/30 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-white/[0.05] text-cyan-400 shrink-0">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-['Space_Grotesk'] font-bold text-white text-base">
                Looking Ahead: Internships & Real-World Systems
              </h4>
              <p className="text-xs font-mono text-gray-400">
                Continuously updating with university milestones, new repository releases, and hackathon wins.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-xs font-mono text-white transition-colors shrink-0"
          >
            <span>Discuss Opportunities</span>
            <ArrowRight className="w-3.5 h-3.5 text-purple-400" />
          </a>
        </div>

      </div>
    </section>
  );
};
