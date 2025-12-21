
import React from 'react';
import { Download, Mail, Linkedin, Globe, Shield, Search, Zap } from 'lucide-react';

// Fix: Use React.FC to properly define children prop for JSX compatibility
const Badge: React.FC<{ children: React.ReactNode; color: string; icon?: any }> = ({ children, color, icon: Icon }) => (
  <span 
    className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider mr-2 mb-2 inline-flex items-center border" 
    style={{ borderColor: `${color}40`, color: color, backgroundColor: `${color}10` }}
  > 
    {Icon && <Icon size={10} className="mr-1" />}
    {children} 
  </span>
);

const ResumePage = () => {
  const colors = {
    paper: '#FAF5F0',
    ink: '#1A1A1A',
    rust: '#802B0A',
    orange: '#F07F2E',
    sage: '#4D6B57',
  };

  return (
    <div className="min-h-screen p-4 md:p-8 lg:p-12 animate-in slide-in-from-bottom-4 duration-700">
      <div 
        className="max-w-4xl mx-auto border-0.5 p-8 md:p-16 shadow-sm bg-white relative overflow-hidden" 
        style={{ borderColor: `${colors.rust}30` }}
      >
        {/* Subtle Paper Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/paper-fibers.png")' }}
        ></div>

        {/* Header Section */}
        <header className="relative z-10 border-b-0.5 pb-8 mb-12" style={{ borderColor: `${colors.ink}20` }}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-2">Jason Kester Hanani</h1>
              <p className="text-lg font-medium opacity-80" style={{ color: colors.rust }}>Senior Product & Operations Analyst | Systems Architect</p>
              <div className="flex flex-wrap gap-4 mt-4 text-sm opacity-60">
                <a href="mailto:jasonkhanani@gmail.com" className="flex items-center gap-1 hover:text-foxOrange transition"><Mail size={14} /> jasonkhanani@gmail.com</a>
                <a href="https://linkedin.com/in/jasonkhanani" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-foxOrange transition"><Linkedin size={14} /> linkedin.com/in/jasonkhanani</a>
                <a href="https://jasonkhanani.com" className="flex items-center gap-1 hover:text-foxOrange transition"><Globe size={14} /> jasonkhanani.com</a>
              </div>
            </div>
            <button 
              className="flex items-center gap-2 px-6 py-3 bg-hankoRust text-ricePaper text-[10px] font-bold uppercase tracking-widest hover:bg-foxOrange transition-all shadow-md active:scale-95"
              onClick={() => window.print()}
            >
              <Download size={14} /> Download PDF
            </button>
          </div>
        </header>

        {/* Summary Section */}
        <section className="mb-12 relative z-10">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 opacity-40">Executive Summary</h2>
          <p className="text-lg leading-relaxed font-serif italic opacity-80 border-l-2 pl-6" style={{ borderColor: colors.orange }}>
            Systems-oriented analyst with 6+ years of experience translating complex marketplace and logistics data into €1.5M+ of quantified impact. 
            Developer of the <span style={{ color: colors.sage, fontWeight: 'bold' }}>Purpose-Wellbeing Axis (PWA)</span>—an engineering approach 
            to operational sustainability designed for high-pressure remote environments. Specialized in hypothesis-driven diagnostics and SQL-based re-engineering.
          </p>
        </section>

        {/* Experience Section */}
        <section className="mb-12 relative z-10">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 opacity-40">Professional Experience</h2>
          
          {/* ZALORA - Senior Analyst */}
          <div className="mb-10 group">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-bold group-hover:text-hankoRust transition-colors">ZALORA Group</h3>
              <span className="text-xs font-bold opacity-40 uppercase tracking-widest">Apr 2025 — Present</span>
            </div>
            <p className="text-sm font-bold uppercase tracking-wide mb-3 opacity-70">Senior Analyst, Commercial Product Operations</p>
            <div className="mb-3">
              <Badge color={colors.rust} icon={Search}>Investigator</Badge>
              <Badge color={colors.orange} icon={Shield}>Architect</Badge>
            </div>
            <ul className="space-y-3 text-sm opacity-80 leading-relaxed list-none">
              <li className="flex gap-3"><span className="text-hankoRust">•</span> <span>Optimized regional stock performance by designing a SKU-level velocity model, increasing hub throughput using SQL and capacity planning.</span></li>
              <li className="flex gap-3"><span className="text-hankoRust">•</span> <span>Automated high-volume manual billing workflows for the TRENDER analytics product, standardizing seller data monetization via n8n.</span></li>
              <li className="flex gap-3"><span className="text-hankoRust">•</span> <span>Applied <span style={{ color: colors.sage }}>PWA/SFR</span> principles to team workflows during organizational restructuring to maintain delivery momentum and systemic resilience.</span></li>
            </ul>
          </div>

          {/* ZALORA - Operations Manager */}
          <div className="mb-10 group">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-bold group-hover:text-hankoRust transition-colors">ZALORA Group</h3>
              <span className="text-xs font-bold opacity-40 uppercase tracking-widest">Oct 2024 — Apr 2025</span>
            </div>
            <p className="text-sm font-bold uppercase tracking-wide mb-3 opacity-70">Operations Manager (Growth & Systems)</p>
            <ul className="space-y-3 text-sm opacity-80 leading-relaxed list-none">
              <li className="flex gap-3"><span className="text-hankoRust">•</span> <span>Performed margin sensitivity analysis; designed a targeted handling fee structure projected to deliver <strong style={{ color: colors.rust }}>€200K in annual revenue</strong>.</span></li>
              <li className="flex gap-3"><span className="text-hankoRust">•</span> <span>Engineered AI-driven logic flows for Seller Helpdesk; achieved 24/7 coverage and improved SLA via automated intent-based routing.</span></li>
            </ul>
          </div>

          {/* ZALORA - Assoc PM */}
          <div className="mb-10 group">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-bold group-hover:text-hankoRust transition-colors">ZALORA Group</h3>
              <span className="text-xs font-bold opacity-40 uppercase tracking-widest">Nov 2022 — Sep 2024</span>
            </div>
            <p className="text-sm font-bold uppercase tracking-wide mb-3 opacity-70">Associate Product Manager (Logistics & Analytics)</p>
            <ul className="space-y-3 text-sm opacity-80 leading-relaxed list-none">
              <li className="flex gap-3"><span className="text-hankoRust">•</span> <span>Diagnosed €520K in annual logistics subsidy leakage via SQL; redesigned fee structures to drive a <strong style={{ color: colors.rust }}>31% increase in shipping revenue</strong>.</span></li>
              <li className="flex gap-3"><span className="text-hankoRust">•</span> <span>Converted 15% of marketplace returns into exchanges, preserving <strong style={{ color: colors.rust }}>€695K in potential revenue loss</strong> via new exchange features.</span></li>
            </ul>
          </div>

          {/* Paxel */}
          <div className="mb-10 group">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-bold group-hover:text-hankoRust transition-colors">Paxel</h3>
              <span className="text-xs font-bold opacity-40 uppercase tracking-widest">Jan 2020 — Oct 2021</span>
            </div>
            <p className="text-sm font-bold uppercase tracking-wide mb-3 opacity-70">Product Operations Analyst (Systems Architect)</p>
            <ul className="space-y-3 text-sm opacity-80 leading-relaxed list-none">
              <li className="flex gap-3"><span className="text-hankoRust">•</span> <span>Optimized a 130-node supply chain network; relocated hubs with a <strong style={{ color: colors.rust }}>&lt;1 year payback period</strong>.</span></li>
              <li className="flex gap-3"><span className="text-hankoRust">•</span> <span>Authored BRDs for core routing engine, reducing fleet activation lead time by <strong style={{ color: colors.rust }}>60% (5 days to 2 days)</strong>.</span></li>
            </ul>
          </div>
        </section>

        {/* Bottom Grid: Education & Tools */}
        <div className="grid md:grid-cols-2 gap-12 border-t-0.5 pt-12 relative z-10" style={{ borderColor: `${colors.ink}20` }}>
          
          {/* Foundation */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 opacity-40">Foundation</h2>
            <div className="mb-6">
              <h4 className="font-bold text-base">University of Michigan</h4>
              <p className="text-sm opacity-60">B.S.E. Industrial & Operations Engineering (Cum Laude)</p>
            </div>
            <div className="mb-6">
              <h4 className="font-bold text-base">Six Sigma Green Belt</h4>
              <p className="text-sm opacity-60">Institute of Industrial & Systems Engineers (IISE)</p>
            </div>
            <div>
              <h4 className="font-bold text-base" style={{ color: colors.sage }}>Research Lead</h4>
              <p className="text-xs opacity-60 italic">Purpose-Wellbeing Axis (PWA) - Systemic Resilience Research</p>
            </div>
          </section>

          {/* Stack */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 opacity-40">The Stack</h2>
            <div className="flex flex-wrap gap-2">
              {['SQL (PostgreSQL)', 'Looker', 'Tableau', 'Python', 'n8n Automation', 'Scenario Modeling', 'BRD Writing', 'DMAIC', 'GenAI'].map(tool => (
                <span key={tool} className="px-3 py-1 bg-ricePaper border border-hankoRust/20 text-[10px] font-bold uppercase tracking-widest text-sumiInk rounded-full opacity-80 hover:border-foxOrange hover:text-foxOrange transition-all cursor-default">
                  {tool}
                </span>
              ))}
            </div>
          </section>

        </div>
      </div>
      
      {/* Print-only Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          nav, footer, .bg-noise { display: none !important; }
          body { background-color: white !important; }
          .min-h-screen { padding: 0 !important; margin: 0 !important; }
          .max-w-4xl { border: none !important; box-shadow: none !important; width: 100% !important; max-width: 100% !important; padding: 0 !important; }
          button { display: none !important; }
        }
      `}} />
    </div>
  );
};

export default ResumePage;
