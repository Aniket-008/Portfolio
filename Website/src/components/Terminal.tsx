import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Trash2 } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS_DATA } from '../data/portfolioData';
import { getActiveSocialLinks, formatProfileHref } from '../data/socialLinks';

interface HistoryItem {
  command: string;
  output: string | React.ReactNode;
}

export const TerminalSection: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'init',
      output: (
        <div className="text-gray-300 space-y-1">
          <p className="text-cyan-400 font-bold">Systems CLI v1.0 [Aniket Kumar Kernel]</p>
          <p className="text-xs text-gray-400">Type <span className="text-purple-400 font-bold">help</span> to list available shell commands.</p>
        </div>
      )
    }
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    let output: string | React.ReactNode = '';

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-1 text-xs font-mono text-gray-300">
            <p className="text-purple-400 font-bold">Available Commands:</p>
            <p><span className="text-cyan-300 w-24 inline-block">whoami</span> : Print developer bio and summary</p>
            <p><span className="text-cyan-300 w-24 inline-block">skills</span> : List technical programming capabilities</p>
            <p><span className="text-cyan-300 w-24 inline-block">projects</span> : Show featured architectural concepts</p>
            <p><span className="text-cyan-300 w-24 inline-block">education</span> : Show university & degree information</p>
            <p><span className="text-cyan-300 w-24 inline-block">contact</span> : Display direct communication channels</p>
            <p><span className="text-cyan-300 w-24 inline-block">clear</span> : Clear terminal output history</p>
            <p><span className="text-cyan-300 w-24 inline-block">sudo hire</span> : Execute hire protocol</p>
          </div>
        );
        break;

      case 'whoami':
        output = `${PERSONAL_INFO.name} — ${PERSONAL_INFO.title}. Information Science and Engineering undergraduate at ${PERSONAL_INFO.university}, ${PERSONAL_INFO.location}. Focused on low-level fundamentals, systems programming, and backend architecture.`;
        break;

      case 'skills':
        output = (
          <div className="space-y-1 text-xs">
            <p className="text-cyan-300 font-semibold">Core Technical Competencies:</p>
            <p className="text-gray-300">• Programming: C, C++, Python</p>
            <p className="text-gray-300">• Databases: SQL, MySQL</p>
            <p className="text-gray-300">• Computer Science: Data Structures & Algorithms, Big-O Analysis</p>
            <p className="text-gray-300">• Tools & Environment: Linux, Git, GitHub, Bash CLI</p>
            <p className="text-gray-300">• Web Fundamentals: HTML, CSS</p>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-1 text-xs">
            <p className="text-purple-400 font-semibold">Architectural Projects & Concepts:</p>
            {PROJECTS_DATA.map((p, i) => (
              <p key={i} className="text-gray-300">
                [{i + 1}] <strong className="text-white">{p.title}</strong> ({p.category}) — <span className="text-gray-400">{p.status}</span>
              </p>
            ))}
          </div>
        );
        break;

      case 'education':
        output = `B.Tech in Information Science and Engineering at REVA University, Bengaluru, India. Building strong foundations in operating systems, DSA, computer architecture, and software design.`;
        break;

      case 'contact':
      case 'socials':
        output = (
          <div className="space-y-1 text-xs font-mono">
            <p className="text-purple-400 font-semibold">Active Communication & Profiles:</p>
            {getActiveSocialLinks().map((link) => (
              <p key={link.id} className="text-gray-300">
                • <strong className="text-cyan-300">{link.name}:</strong>{' '}
                <a
                  href={formatProfileHref(link)}
                  target={link.id === 'email' ? undefined : '_blank'}
                  rel="noreferrer"
                  className="text-white hover:underline hover:text-cyan-400"
                >
                  {link.url}
                </a>
              </p>
            ))}
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'sudo hire':
      case 'sudo hire aniket':
        output = (
          <div className="text-emerald-400 font-bold space-y-1">
            <p>ACCESS GRANTED: Protocol initialized!</p>
            <p className="text-gray-300 font-normal">Aniket Kumar is ready for software engineering internships and backend roles. Please visit the Contact section below or email directly.</p>
          </div>
        );
        break;

      default:
        output = `Command not found: "${cmd}". Type "help" for a list of valid commands.`;
        break;
    }

    setHistory((prev) => [...prev, { command: inputVal, output }]);
    setInputVal('');
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#06070a] border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        
        {/* Terminal Header Info */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 font-mono text-xs uppercase tracking-widest mb-2">
            <TerminalIcon className="w-3.5 h-3.5" />
            Interactive Linux Shell
          </div>
          <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-white">
            Systems Terminal Playground
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm max-w-lg mt-1 font-mono">
            Test commands like <span className="text-cyan-400">help</span>, <span className="text-cyan-400">skills</span>, <span className="text-cyan-400">whoami</span>, or <span className="text-purple-400">sudo hire</span>.
          </p>
        </div>

        {/* Terminal Window Box */}
        <div
          className="rounded-3xl bg-[#080a14] border border-white/15 shadow-2xl overflow-hidden font-mono text-sm"
          onClick={() => inputRef.current?.focus()}
        >
          {/* Title Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#0d0f1e] border-b border-white/10 select-none">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              <span className="ml-2 text-xs text-gray-400">aniket@reva-box: ~/portfolio</span>
            </div>
            <div className="flex items-center gap-3 text-gray-500">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setHistory([]);
                }}
                title="Clear Output"
                className="hover:text-gray-300 text-xs flex items-center gap-1 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-5 min-h-[260px] max-h-[380px] overflow-y-auto space-y-3">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-2 text-purple-400 text-xs">
                  <span className="text-emerald-400">aniket@systems:~$</span>
                  <span className="text-white font-medium">{item.command}</span>
                </div>
                <div className="pl-4 text-xs text-gray-300 leading-relaxed">
                  {item.output}
                </div>
              </div>
            ))}

            {/* Input Form */}
            <form onSubmit={handleCommand} className="flex items-center gap-2 pt-2">
              <span className="text-emerald-400 text-xs shrink-0">aniket@systems:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type a command (e.g. help, skills, whoami)..."
                className="flex-1 bg-transparent text-cyan-300 text-xs font-mono focus:outline-none border-none p-0 placeholder-gray-600"
                autoComplete="off"
                spellCheck="false"
              />
              <button type="submit" className="text-gray-500 hover:text-cyan-400 transition-colors cursor-pointer">
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </form>
            <div ref={bottomRef} />
          </div>
        </div>

      </div>
    </section>
  );
};
