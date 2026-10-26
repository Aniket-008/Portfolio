import React, { useState } from 'react';
import { Cpu, Server, Binary, BookOpen, Terminal, Sparkles, MapPin, GraduationCap, CheckCircle } from 'lucide-react';

interface AboutProps {
  reducedMotion: boolean;
}

export const About: React.FC<AboutProps> = ({ reducedMotion: _reducedMotion }) => {
  const [activeTab, setActiveTab] = useState<'systems' | 'backend' | 'dsa' | 'learning'>('systems');

  const pillars = [
    {
      id: 'systems' as const,
      title: 'Systems Programming',
      icon: Cpu,
      color: 'from-purple-500 to-indigo-500',
      badge: 'C & C++ Fundamentals',
      desc: 'Understanding the low-level mechanics of execution: memory pointers, stack vs. heap allocation, struct alignment, cache coherence, and how high-level code interacts directly with the OS and hardware.',
      points: [
        'Deterministic memory management with malloc/free and RAII',
        'Direct pointer manipulation & memory layout understanding',
        'Exploring process lifecycles and POSIX system calls'
      ],
      codeSnippet: `// Exploring memory address & pointer arithmetic in C
#include <stdio.h>
#include <stdlib.h>

void inspect_memory() {
    int val = 42;
    int *ptr = &val;
    printf("Value: %d | Addr: %p\\n", *ptr, (void*)ptr);
}`
    },
    {
      id: 'backend' as const,
      title: 'Backend Development',
      icon: Server,
      color: 'from-blue-500 to-cyan-500',
      badge: 'APIs & Relational Databases',
      desc: 'Engineering predictable server-side logic, structured REST APIs, and robust data persistence using SQL and Python. Focused on database normalization, index design, and data integrity.',
      points: [
        'Relational data modeling with primary & foreign constraints',
        'Structured query optimization & multi-table joins in MySQL',
        'RESTful API architecture and clean separation of concerns'
      ],
      codeSnippet: `-- Relational Schema Design & Indexing
SELECT u.name, COUNT(o.id) AS total_orders
FROM users u
INNER JOIN orders o ON u.id = o.user_id
WHERE o.status = 'COMPLETED'
GROUP BY u.id, u.name;`
    },
    {
      id: 'dsa' as const,
      title: 'Data Structures & Algorithms',
      icon: Binary,
      color: 'from-cyan-500 to-teal-500',
      badge: 'Algorithmic Rigor',
      desc: 'Approaching problems with mathematical clarity and asymptotic analysis. Regularly breaking down challenges into time and space complexities (Big-O), implementing fundamental structures from scratch.',
      points: [
        'Asymptotic time & space complexity analysis (Big-O)',
        'Trees, graphs, linked lists, stacks, and binary search',
        'Recursive reasoning and dynamic programming patterns'
      ],
      codeSnippet: `// Binary Search Tree (BST) Node Definition in C++
struct Node {
    int key;
    Node* left;
    Node* right;
    Node(int v) : key(v), left(nullptr), right(nullptr) {}
};`
    },
    {
      id: 'learning' as const,
      title: 'Continuous Learning',
      icon: BookOpen,
      color: 'from-amber-500 to-orange-500',
      badge: 'Curiosity & Growth',
      desc: 'Actively exploring modern engineering paradigms, AI tooling, Linux system configurations, and preparing for developer hackathons and collaborative software engineering projects.',
      points: [
        'Daily driving Linux command-line workflows and tools',
        'Exploring how AI applications augment practical software',
        'Iterative project development and collaborative Git practices'
      ],
      codeSnippet: `$ git status
On branch feature/system-refactor
Your branch is up to date with 'origin/main'.
Changes committed cleanly with zero regressions.`
    }
  ];

  const currentPillar = pillars.find((p) => p.id === activeTab) || pillars[0];

  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 font-mono text-xs uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Core Philosophy
          </div>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            A Little About Me
          </h2>
          <p className="text-gray-400 max-w-2xl text-base sm:text-lg">
            Engineering with curiosity, computational efficiency, and deep appreciation for fundamentals.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Personal Narrative & Quick Facts */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="p-8 rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/10 backdrop-blur-xl shadow-xl space-y-5">
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-300">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-['Space_Grotesk'] font-bold text-lg text-white">
                    Information Science & Engineering
                  </h3>
                  <p className="text-xs font-mono text-cyan-300 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" /> REVA University, Bengaluru, India
                  </p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                I am an Information Science Engineering undergraduate student who is genuinely fascinated by what happens beneath high-level abstractions. While many developers begin solely with high-level web frameworks, my passion was ignited by understanding how compilers translate logic into assembly, how pointers traverse memory, and how operating systems coordinate hardware resources.
              </p>

              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Whether writing procedural programs in <strong className="text-purple-300 font-medium">C</strong>, building structured applications in <strong className="text-purple-300 font-medium">C++</strong>, scripting backend automations in <strong className="text-blue-300 font-medium">Python</strong>, or executing relational queries in <strong className="text-cyan-300 font-medium">MySQL</strong>, I treat code quality, memory discipline, and edge-case resilience as non-negotiable standards.
              </p>

              {/* Quick Profile Indicators */}
              <div className="pt-2 grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-gray-500 block mb-1">// FOCUS DOMAIN</span>
                  <span className="text-white font-medium">Systems & Backend</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-gray-500 block mb-1">// DEGREE</span>
                  <span className="text-white font-medium">B.Tech (ISE)</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-gray-500 block mb-1">// HUB</span>
                  <span className="text-white font-medium">Bengaluru, India</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-gray-500 block mb-1">// MINDSET</span>
                  <span className="text-emerald-400 font-medium">First-Principles</span>
                </div>
              </div>
            </div>

            {/* Quote banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-950/40 via-blue-950/30 to-black border border-purple-500/20 flex items-center gap-4">
              <div className="w-1.5 h-12 rounded-full bg-gradient-to-b from-purple-400 to-cyan-400 shrink-0" />
              <p className="text-xs sm:text-sm font-mono text-gray-300 italic">
                "Real software mastery begins when you understand the memory underneath your variables."
              </p>
            </div>

          </div>

          {/* Right Column: 4 Core Pillars & Interactive Visual Inspector */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* The 4 Small Visual Cards (Grid) */}
            <div className="grid grid-cols-2 gap-3">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                const isSelected = activeTab === pillar.id;
                return (
                  <button
                    key={pillar.id}
                    onClick={() => setActiveTab(pillar.id)}
                    className={`p-4 rounded-2xl text-left transition-all duration-300 border cursor-pointer relative overflow-hidden group ${
                      isSelected
                        ? 'bg-gradient-to-br from-white/10 to-white/[0.03] border-purple-500/60 shadow-lg shadow-purple-900/20'
                        : 'bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.05]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className={`p-2 rounded-xl bg-gradient-to-br ${pillar.color} text-white shadow-sm`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                      )}
                    </div>
                    <div className="font-['Space_Grotesk'] font-bold text-sm text-white group-hover:text-purple-300 transition-colors">
                      {pillar.title}
                    </div>
                    <div className="text-[11px] font-mono text-gray-400 mt-1 truncate">
                      {pillar.badge}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Pillar Detail Box with Interactive Code / Systems Terminal */}
            <div className="p-6 rounded-3xl bg-[#0b0d18]/90 border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2 font-mono text-xs text-purple-400">
                  <Terminal className="w-4 h-4" />
                  <span>core_inspector::{currentPillar.id}.cpp</span>
                </div>
                <span className="text-[11px] font-mono text-gray-500">
                  [Read Only]
                </span>
              </div>

              <h4 className="font-['Space_Grotesk'] text-lg font-bold text-white mb-2 flex items-center gap-2">
                {currentPillar.title}
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {currentPillar.desc}
              </p>

              {/* Key Competency Points */}
              <ul className="space-y-2 mb-4">
                {currentPillar.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs font-mono text-gray-300">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              {/* Code Inspection Snippet */}
              <div className="rounded-xl bg-[#06070b] border border-white/10 p-3 font-mono text-xs text-gray-300 overflow-x-auto">
                <pre className="text-[11px] leading-relaxed text-cyan-300/90 whitespace-pre">
                  {currentPillar.codeSnippet}
                </pre>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
