import React, { useState } from 'react';
import { Logo } from './Logo';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Copy, Check } from 'lucide-react';

export const Footer = () => {
  const [copied, setCopied] = useState(false);
  const email = "contact@jasonkhanani.com";

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="bg-sumiInk text-ricePaper pt-24 pb-12 px-6 border-t border-ricePaper/5">
      <div className="max-w-7xl mx-auto mb-32">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Identity & Hook */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <Logo size="lg" color="text-ricePaper" />
              <span className="text-2xl font-serif text-ricePaper tracking-tight">Jason K Hanani</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-ricePaper leading-tight">
              Where is the <br />
              <span className="text-foxOrange italic">bottleneck?</span>
            </h2>
            <p className="text-ricePaper/60 max-w-md leading-relaxed text-lg">
              Let's skip the small talk and look at the root cause. What is the one thing holding your team back right now?
            </p>
          </div>

          {/* Right: The Action Block */}
          <div className="lg:pl-24 pt-4 lg:pt-20">
            <div className="flex flex-col gap-8">
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-ricePaper/30 mb-4 block">Start the Diagnostic</span>
                
                {/* Email Row */}
                <div className="flex items-center gap-4">
                  <a 
                    href={`mailto:${email}`} 
                    className="group flex items-center gap-3 text-xl md:text-2xl font-serif text-ricePaper hover:text-foxOrange transition-colors"
                  >
                    <span>{email}</span>
                    <ArrowUpRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </a>
                  
                  <button 
                    onClick={handleCopy}
                    className="p-2 rounded-full bg-ricePaper/5 hover:bg-ricePaper/10 text-ricePaper/50 hover:text-ricePaper transition-all relative"
                    aria-label="Copy email address"
                  >
                    {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Navigation Links - Horizontal Row for neatness */}
              <div className="flex flex-wrap gap-8 text-xs font-bold tracking-widest uppercase text-ricePaper/40">
                <Link to="/evidence" className="hover:text-ricePaper transition-colors">Evidence</Link>
                <Link to="/framework" className="hover:text-ricePaper transition-colors">Framework</Link>
                <Link to="/writing" className="hover:text-ricePaper transition-colors">Writing</Link>
                <Link to="/resume" className="hover:text-ricePaper transition-colors">Resume</Link>
                <a href="https://linkedin.com/in/jasonkhanani" target="_blank" rel="noopener noreferrer" className="hover:text-ricePaper transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Copyright Bar - Matching Hero Tag */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-ricePaper/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-ricePaper/20">
        <span>© 2026 Jason Kester Hanani</span>
        <span>Industrial Engineer • Systems Architect</span>
      </div>
    </footer>
  );
};
