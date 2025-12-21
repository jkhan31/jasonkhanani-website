
import React from 'react';
import { Download, Mail, Linkedin, Globe, Shield, Search, Zap, Code, Terminal, Clock } from 'lucide-react';

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
        className="max-w-4xl mx-auto border-0.5 p-8 md:p-16 shadow-2xl bg-white relative overflow-hidden" 
        style={{ borderColor: `${colors.rust}20` }}
      >
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-noise"></div>

        <header className="relative z-10 border-b-0.5 pb-10 mb-12" style={{ borderColor: `${colors.ink}10` }}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <h1 className="text-5xl font-serif font-bold tracking-tight mb-2">Jason Kester Hanani</h1>
              <p className="text-xl font-medium opacity-80" style={{ color: colors.rust }}>Senior Product & Operations Analyst | Systems Architect</p>
              <div className="flex flex-wrap gap-6 mt-6 text-sm font-medium opacity-60">
                <a href="mailto:jasonkhanani@gmail.com" className="flex items-center gap-2 hover:text-foxOrange transition"><Mail size={16} /> jason@khanani.com</a>
                <a href="https://linkedin.com/in/jasonkhanani" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-foxOrange transition"><Linkedin size={16} /> linkedin.com/in/jasonkhanani</a>
                <a href="https://jasonkhanani.com" className="flex items-center gap-2 hover:text-foxOrange transition"><Globe size={16} /> Global Remote Ready</a>
              </div>
            </div>
            <button 
              className="flex items-center gap-2 px-8 py-4 bg-hankoRust text-ricePaper text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-foxOrange transition-all shadow-xl active:scale-95"
              onClick={() => window.print()}
            >
              <Download size={16} /> Export Dossier
            </button>
          </div>
        </header>

        <section className="mb-16 relative z-10">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-6 opacity-40">The Mandate</h2>
          <p className="text-xl leading-relaxed font-serif italic opacity-80 border-l-4 pl-8" style={{ borderColor: colors.orange }}>
            Bridging the gap between raw marketplace data and high-velocity operational output. 
            I engineer the systems that allow global teams to recover revenue, automate friction, 
            and scale asynchronously via the <span style={{ color: colors.rust, fontWeight: 'bold' }}>Purpose-Wellbeing Axis (PWA)</span>.
          </p>
        </section>

        <section className="mb-16 relative z-10">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-10 opacity-40">Global Experience</h2>
          
          <div className="mb-12 group">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-2xl font-bold group-hover:text-hankoRust transition-colors">ZALORA Group</h3>
              <span className="text-[10px] font-bold opacity-40 uppercase tracking-widest">2021 — PRESENT</span>
            </div>
            <p className="text-xs font-bold uppercase tracking-widest mb-4 opacity-60">Senior Analyst, Product & Commercial Operations</p>
            <div className="mb-6">
              <Badge color={colors.rust} icon={Search}>Revenue Investigator</Badge>
              <Badge color={colors.orange} icon={Zap}>Systems Architect</Badge>
              <Badge color={colors.sage} icon={Globe}>Remote Operations</Badge>
            </div>
            <ul className="space-y-4 text-base opacity-80 leading-relaxed list-none">
              <li className="flex gap-4 font-serif">
                <span className="text-hankoRust mt-1">/</span> 
                <span>Recovered <strong className="text-hankoRust">€695K in annual revenue</strong> leakage by designing a SQL-based forensic reconciliation engine for marketplace exchanges.</span>
              </li>
              <li className="flex gap-4 font-serif">
                <span className="text-hankoRust mt-1">/</span> 
                <span>Architected the automation of seller billing protocols using <strong className="text-foxOrange">n8n and Python</strong>, reducing manual audit overhead by 85%.</span>
              </li>
              <li className="flex gap-4 font-serif">
                <span className="text-hankoRust mt-1">/</span> 
                <span>Engineered the logic for AI-augmented support workflows, achieving 24/7 coverage for global sellers with zero increase in operational headcount.</span>
              </li>
            </ul>
          </div>

          <div className="mb-12 group">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-2xl font-bold group-hover:text-hankoRust transition-colors">Paxel</h3>
              <span className="text-[10px] font-bold opacity-40 uppercase tracking-widest">2019 — 2021</span>
            </div>
            <p className="text-xs font-bold uppercase tracking-widest mb-4 opacity-60">Product Operations Analyst (Supply Chain)</p>
            <ul className="space-y-4 text-base opacity-80 leading-relaxed list-none">
              <li className="flex gap-4 font-serif">
                <span className="text-hankoRust mt-1">/</span> 
                <span>Redesigned the hub-spoke logistics topology using Industrial Engineering optimization, achieving <strong className="text-hankoRust">60% cycle time reduction</strong>.</span>
              </li>
              <li className="flex gap-4 font-serif">
                <span className="text-hankoRust mt-1">/</span> 
                <span>Deployed Six Sigma (DMAIC) methodology to identify and eliminate €500K in annual logistics waste across 130 regional nodes.</span>
              </li>
            </ul>
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-16 border-t-0.5 pt-16 relative z-10" style={{ borderColor: `${colors.ink}10` }}>
          <section>
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-8 opacity-40">Foundation</h2>
            <div className="space-y-8">
              <div>
                <h4 className="font-bold text-lg mb-1">University of Michigan</h4>
                <p className="text-sm opacity-60 font-serif">B.S.E. Industrial & Operations Engineering</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-foxOrange mt-1">Cum Laude &bull; Ann Arbor, MI</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Six Sigma Green Belt</h4>
                <p className="text-sm opacity-60 font-serif">Institute of Industrial & Systems Engineers (IISE)</p>
              </div>
              <div className="p-6 bg-ricePaper border-l-2 border-hankoRust/20">
                <h4 className="font-bold text-sm uppercase tracking-widest mb-2" style={{ color: colors.rust }}>Lead Researcher</h4>
                <p className="text-sm opacity-70 italic font-serif">Founder of the PWA Framework for operational sustainability in high-pressure remote environments.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-8 opacity-40">The Stack</h2>
            <div className="space-y-8">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2"><Terminal size={14} className="text-hankoRust" /> Technical Core</h4>
                <div className="flex flex-wrap gap-2">
                  {['SQL (Postgres)', 'Python', 'BigQuery', 'Tableau', 'Looker', 'n8n Automate', 'GitHub'].map(tool => (
                    <span key={tool} className="px-3 py-1 bg-white border border-hankoRust/10 text-[10px] font-bold uppercase tracking-widest text-sumiInk hover:border-foxOrange transition-all cursor-default">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2"><Clock size={14} className="text-hankoRust" /> Remote Leadership</h4>
                <div className="flex flex-wrap gap-2">
                  {['Async Workflow Design', 'BRD Writing', 'Distributed Teams', 'Loom/Video Protocols', 'Notion/Doc-as-Code'].map(tool => (
                    <span key={tool} className="px-3 py-1 bg-hankoRust/5 border border-hankoRust/5 text-[10px] font-bold uppercase tracking-widest text-hankoRust/70">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          nav, footer, .bg-noise, .bg-grid { display: none !important; }
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
