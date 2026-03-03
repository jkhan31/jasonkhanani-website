import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const email = "contact@jasonkhanani.com";

  return (
    <footer className="bg-sumiInk text-ricePaper pt-24 pb-12 px-6 border-t border-ricePaper/5">
      <div className="max-w-7xl mx-auto mb-32">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Identity */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-ricePaper leading-tight">
              Jason K Hanani
            </h2>
            <p className="text-xs font-bold tracking-widest uppercase text-foxOrange mb-8">
              Operations &amp; Product Analytics
            </p>
            <p className="text-ricePaper/60 max-w-md leading-relaxed text-lg">
              For inquiries, reach out via email or LinkedIn.
            </p>
          </div>

          {/* Right: Contact */}
          <div className="lg:pl-24 pt-4 lg:pt-20">
            <div className="flex flex-col gap-8">
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-foxOrange mb-4 block">Get in Touch</span>
                <a
                  href={`mailto:${email}`}
                  className="group flex items-center gap-3 text-xl md:text-2xl font-serif text-ricePaper hover:text-foxOrange transition-colors"
                >
                  <span>{email}</span>
                  <ArrowUpRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </a>
              </div>

              <a
                href="https://linkedin.com/in/jasonkhanani"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-foxOrange hover:text-ricePaper transition-colors w-fit"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-ricePaper/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-ricePaper/20">
        <span>© {new Date().getFullYear()} Jason K Hanani</span>
        <span>Operations &amp; Product Analytics</span>
      </div>
    </footer>
  );
};
