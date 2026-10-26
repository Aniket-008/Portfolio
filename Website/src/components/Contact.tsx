import React, { useState } from 'react';
import { Mail, Send, Copy, Check, AlertCircle, Sparkles, MapPin } from 'lucide-react';
import { SocialIcon } from './Icons';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { getActiveSocialLinks, formatProfileHref } from '../data/socialLinks';

interface ContactProps {
  reducedMotion: boolean;
}

export const Contact: React.FC<ContactProps> = ({ reducedMotion }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCopied, setIsCopied] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'client_redirect'>('idle');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide a message or opportunity brief.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Real client mailto generation with prefilled subject & formatted message
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Aniket,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nSent via Aniket Kumar Portfolio`
    );

    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;

    // Trigger celebration confetti
    if (!reducedMotion) {
      try {
        confetti({
          particleCount: 75,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#9333ea', '#3b82f6', '#06b6d4'],
        });
      } catch {
        // Safe fallback
      }
    }

    // Direct user to open email client with prefilled data
    window.location.href = mailtoUrl;
    setSubmitStatus('client_redirect');
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#06070a] border-t border-white/5">
      {/* Background glow orbs */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 text-purple-400 font-mono text-xs uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
            LET'S BUILD SOMETHING GREAT.
          </h2>
          <p className="text-gray-400 max-w-2xl text-base sm:text-lg">
            Have an interesting idea, project, or opportunity? Let's connect.
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Channels & Information */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 shadow-xl space-y-6">
              <div>
                <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-white mb-2">
                  Direct Channels
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  I'm actively seeking internships, systems/backend engineering roles, and hackathon teammates. Feel free to reach out directly through any of these platforms:
                </p>
              </div>

              {/* Email Card with Copy Button */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/40 transition-colors">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2.5 text-xs font-mono text-gray-400">
                    <Mail className="w-4 h-4 text-purple-400" />
                    <span>Email Address</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-cyan-400 hover:text-cyan-300 cursor-pointer"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-mono text-sm sm:text-base text-white hover:text-purple-300 transition-colors break-all"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>

              {/* Dynamic Profiles List (LinkedIn, GitHub, & added profiles from socialLinks.ts) */}
              {getActiveSocialLinks()
                .filter((link) => link.id !== 'email')
                .map((link) => (
                  <a
                    key={link.id}
                    href={formatProfileHref(link)}
                    target="_blank"
                    rel="noreferrer"
                    className={`block p-4 rounded-2xl bg-white/[0.03] border border-white/10 ${link.colorTheme.borderHover} ${link.colorTheme.bgHover} transition-all group`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2.5 rounded-xl ${link.colorTheme.badgeBg}`}>
                          <SocialIcon name={link.icon} className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-['Space_Grotesk'] font-bold text-white text-sm group-hover:text-cyan-300 transition-colors">
                            {link.name} Profile
                          </div>
                          <div className="text-xs font-mono text-gray-400">
                            {link.handle || link.description || link.name}
                          </div>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-gray-500 group-hover:text-cyan-400">
                        ↗
                      </span>
                    </div>
                  </a>
                ))}

              {/* Location Badge */}
              <div className="flex items-center gap-2 pt-2 text-xs font-mono text-gray-400">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#0c0e1c] to-[#07080f] border border-white/10 shadow-2xl relative overflow-hidden">
              
              <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Fill in the details below. This will launch your default email client with your prefilled inquiry.
              </p>

              {submitStatus === 'client_redirect' && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs font-mono space-y-1">
                  <div className="flex items-center gap-2 font-bold">
                    <Check className="w-4 h-4" /> Message formatted & email client triggered!
                  </div>
                  <p className="text-gray-300">
                    If your email client didn't open automatically, you can send an email directly to <span className="text-emerald-400 underline">{PERSONAL_INFO.email}</span>.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-2">
                    Your Name <span className="text-purple-400">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Chen"
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border ${
                      errors.name ? 'border-red-500/80' : 'border-white/10 focus:border-purple-500'
                    } text-white text-sm font-sans focus:outline-none transition-colors placeholder-gray-600`}
                  />
                  {errors.name && (
                    <div className="flex items-center gap-1.5 text-xs text-red-400 mt-1.5 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </div>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-2">
                    Your Email Address <span className="text-purple-400">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@company.com"
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border ${
                      errors.email ? 'border-red-500/80' : 'border-white/10 focus:border-purple-500'
                    } text-white text-sm font-sans focus:outline-none transition-colors placeholder-gray-600`}
                  />
                  {errors.email && (
                    <div className="flex items-center gap-1.5 text-xs text-red-400 mt-1.5 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-2">
                    Message / Opportunity Brief <span className="text-purple-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Aniket, I came across your portfolio and would like to discuss an opportunity..."
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border ${
                      errors.message ? 'border-red-500/80' : 'border-white/10 focus:border-purple-500'
                    } text-white text-sm font-sans focus:outline-none transition-colors placeholder-gray-600 resize-none`}
                  />
                  {errors.message && (
                    <div className="flex items-center gap-1.5 text-xs text-red-400 mt-1.5 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-xl shadow-purple-900/30 hover:shadow-purple-700/50 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-cyan-300" />
                  <span>Send Message via Email Client</span>
                </button>

                <p className="text-[11px] font-mono text-gray-500 text-center">
                  Honest Transmission Guarantee: Your message will not be swallowed by a fake form handler.
                </p>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
