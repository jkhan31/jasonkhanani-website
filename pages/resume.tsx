
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
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
    <>
      <Head>
        <title>Resume | Jason Kester Hanani</title>
        <meta 
          name="description" 
          content="Industrial Engineer specializing in operations optimization, technical project management, and systems architecture. Experience across e-commerce, logistics, and SaaS." 
        />
        <meta property="og:title" content="Resume - Jason Kester Hanani" />
        <meta property="og:url" content="https://jasonkhanani.com/resume/" />
        <link rel="canonical" href="https://jasonkhanani.com/resume/" />
      </Head>
      
      <div className="min-h-screen p-4 md:p-8 lg:p-12 animate-in slide-in-from-bottom-4 duration-700">
      <div 
        className="max-w-4xl mx-auto border-0.5 p-8 md:p-16 shadow-2xl bg-white relative overflow-hidden" 
        style={{ borderColor: `${colors.rust}20` }}
      >
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-noise"></div>

        <header className="relative z-10 border-b-0.5 pb-10 mb-12" style={{ borderColor: `${colors.ink}10` }}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <h1 className="text-5xl font-serif font-bold tracking-tight mb-2">JASON KESTER HANANI</h1>
              <p className="text-xl font-medium opacity-80 whitespace-normal break-words max-w-full" style={{ color: colors.rust }}>Product Analytics &amp; Operations Lead</p>
              <div className="flex flex-col md:flex-row md:items-center gap-2 mt-6 text-sm font-medium opacity-80">
                <a href="mailto:contact@jasonkhanani.com" className="flex items-center gap-2 hover:text-foxOrange transition w-full md:w-auto break-words"><Mail size={16} /> contact@jasonkhanani.com</a>
                <a href="https://jasonkhanani.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-foxOrange transition w-full md:w-auto break-words mt-2 md:mt-0"><Globe size={16} /> jasonkhanani.com</a>
                <a href="https://www.linkedin.com/in/jasonkhanani/" target="_blank" rel="noreferrer" className="mt-2 md:ml-4 md:mt-0 inline-flex items-center justify-center w-9 h-9 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-shadow">
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
            <a
              href="https://drive.google.com/file/d/1gxsTimlui3GBYkm_bZk_rEyz1c8_L7Fq/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-hankoRust text-ricePaper text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-foxOrange transition-all shadow-xl active:scale-95"
            >
              <Download size={16} /> Download Full Resume (PDF)
            </a>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-12 relative z-10">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 opacity-40">Professional Summary</h2>
          <p className="text-lg leading-relaxed font-serif italic opacity-80 border-l-2 pl-6" style={{ borderColor: colors.orange }}>
            Product analytics and operations leader with 6+ years delivering €1.5M+ in quantified impact through process engineering, AI-augmented workflows, and system-level design for e-commerce and logistics. Focused on diagnostics, system decisions, and measurable outcomes.
          </p>
        </section>

        {/* Core Competencies */}
        <section className="mb-12 relative z-10">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 opacity-40">Core Competencies</h2>
          <ul className="list-disc pl-6 text-sm opacity-80 leading-relaxed">
            <li><strong>Operational Clarity &amp; Analysis:</strong> SQL (for data extraction &amp; EDA), Python (AI-Augmented EDA), Tableau, Looker, Advanced Excel Modeling (scenario planning).</li>
            <li><strong>Systems Architecture &amp; Optimization:</strong> Lean Six Sigma Green Belt, Process Mapping &amp; Optimization, DMAIC, Workflow Automation (n8n/Python), Human Systems Design.</li>
            <li><strong>AI Integration:</strong> AI-Augmented Workflows, Prompt Engineering for Operations, AI-Driven Diagnostics, Prototyping Product Requirements.</li>
            <li><strong>Strategic Impact &amp; Decision Design:</strong> Root cause analysis, BRD development, supply chain optimization, and measurable process improvements.</li>
          </ul>
        </section>

          {/* Professional Experience */}
        <section className="mb-12 relative z-10">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 opacity-40">Professional Experience</h2>
          {/* Commercial PMO (ZALORA Group) */}
          <div className="mb-10 group">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-bold group-hover:text-hankoRust transition-colors">Commercial PMO - ZALORA Group</h3>
              <span className="text-xs font-bold opacity-40 uppercase tracking-widest">Apr 2025 – Present</span>
            </div>
            <ul className="space-y-3 text-sm opacity-80 leading-relaxed list-none">
              <li><span className="text-hankoRust">•</span> Standardized fragmented regional onboarding workflows into a unified global system, reducing cross-functional friction and support volume.</li>
              <li><span className="text-hankoRust">•</span> Designed cross-border inventory optimization model to improve stock availability and regional throughput.</li>
              <li><span className="text-hankoRust">•</span> Built business case and BRDs for multi-warehouse fulfillment; business case estimated a €300K annual revenue uplift (10% sales growth).</li>
            </ul>
          </div>
          {/* Operations Manager (ZALORA Group) */}
          <div className="mb-10 group">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-bold group-hover:text-hankoRust transition-colors">Operations Manager - ZALORA Group</h3>
              <span className="text-xs font-bold opacity-40 uppercase tracking-widest">Oct 2024 – Apr 2025</span>
            </div>
            <ul className="space-y-3 text-sm opacity-80 leading-relaxed list-none">
              <li><span className="text-hankoRust">•</span> Performed margin sensitivity analysis and designed a fee structure supported by a business case estimating €200K revenue uplift.</li>
              <li><span className="text-hankoRust">•</span> Deployed AI-driven support automation for the Seller Helpdesk; achieved 24/7 coverage, increased ticket deflection, and improved SLA adherence.</li>
              <li><span className="text-hankoRust">•</span> Optimized end-to-end marketplace workflows to improve buyer/seller interactions and process efficiency.</li>
            </ul>
          </div>
          {/* Associate Project Manager (ZALORA Group) */}
          <div className="mb-10 group">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-bold group-hover:text-hankoRust transition-colors">Associate Project Manager - ZALORA Group</h3>
              <span className="text-xs font-bold opacity-40 uppercase tracking-widest">Nov 2022 – Sep 2024</span>
            </div>
            <ul className="space-y-3 text-sm opacity-80 leading-relaxed list-none">
              <li><span className="text-hankoRust">•</span> Executed a DMAIC cycle on shipping logistics and redesigned the fee structure to save €520K annually.</li>
              <li><span className="text-hankoRust">•</span> Migrated return logistics to a cashless chargeback system, eliminating cash-on-pickup fraud and reducing failed pickup attempts.</li>
              <li><span className="text-hankoRust">•</span> Performed deep data diagnostics (SQL, Tableau, Looker, Python) to model warehouse and logistics performance for executive decisions.</li>
            </ul>
          </div>
          {/* Graduate Management Trainee (ZALORA Group) */}
          <div className="mb-10 group">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-bold group-hover:text-hankoRust transition-colors">Graduate Management Trainee - ZALORA Group</h3>
              <span className="text-xs font-bold opacity-40 uppercase tracking-widest">Nov 2021 – Oct 2022</span>
            </div>
            <ul className="space-y-3 text-sm opacity-80 leading-relaxed list-none">
              <li><span className="text-hankoRust">•</span> Diagnosed revenue erosion from high return rates and launched an exchange feature that converted 15% of returns, preserving €695K in revenue.</li>
              <li><span className="text-hankoRust">•</span> Analyzed weekly NPS and customer feedback to produce quantitative inputs for operational decision-making.</li>
            </ul>
          </div>
          {/* Product Operations - Paxel */}
          <div className="mb-10 group">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-bold group-hover:text-hankoRust transition-colors">Product Operations - Paxel</h3>
              <span className="text-xs font-bold opacity-40 uppercase tracking-widest">Jan 2020 – Oct 2021</span>
            </div>
            <ul className="space-y-3 text-sm opacity-80 leading-relaxed list-none">
              <li><span className="text-hankoRust">•</span> Re-engineered routing engine workflows, reducing route activation lead time by 60% (5 to 2 days).</li>
              <li><span className="text-hankoRust">•</span> Optimized a 130-node supply chain network and produced capacity/cost analyses supporting hub relocations with under 1-year payback.</li>
              <li><span className="text-hankoRust">•</span> Authored BRDs for strategic system enhancements to enable clear engineering and operational execution.</li>
            </ul>
          </div>
        </section>

        {/* Bottom Grid: Education & Certifications, My Methodology, The Stack */}
        <div className="flex flex-col gap-12 border-t-0.5 pt-12 relative z-10" style={{ borderColor: `${colors.ink}20` }}>
          {/* Education & Certifications */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 opacity-40">Education &amp; Certifications</h2>
            <div className="mb-6">
              <h4 className="font-bold text-base">B.S.E. Industrial &amp; Operations Engineering (Cum Laude)</h4>
              <p className="text-sm opacity-80">University of Michigan, College of Engineering (Dec 2018)</p>
            </div>
            <div className="mb-6">
              <h4 className="font-bold text-base">Six Sigma Green Belt</h4>
              <p className="text-sm opacity-80">Institute of Industrial and Systems Engineers — Certification No. 2558-18401 (Apr 2017)</p>
            </div>
          </section>

          {/* My Methodology (PWA & SFR) */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 opacity-40">Methodology</h2>
              <div className="border-l-2 pl-4" style={{ borderColor: colors.sage }}>
                <h3 className="font-bold text-base" style={{ color: colors.sage, marginBottom: '0.5rem' }}>Diagnostic-first, outcome-driven</h3>
                <p className="text-sm opacity-80 leading-relaxed">
                  Map failure modes, quantify impact, run DMAIC cycles, build BRDs, and deliver system designs that engineering and operations can execute against.
                </p>
              </div>
          </section>

          {/* The Stack (categorized) */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 opacity-40">The Stack</h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-sm mb-2" style={{ color: colors.rust }}>Operational Clarity &amp; Analysis</h4>
                <div className="flex flex-wrap gap-2">
                  {['SQL (EDA)', 'Python (AI-Augmented EDA)', 'Tableau', 'Looker', 'Advanced Excel Modeling', 'Scenario Modeling'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-slate-50 border border-slate-200 text-xs font-semibold rounded-full opacity-80 text-slate-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-sm mb-2" style={{ color: colors.orange }}>Systems Architecture &amp; Automation</h4>
                <div className="flex flex-wrap gap-2">
                  {['n8n Automation', 'Workflow Automation', 'BRD Writing', 'DMAIC'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-slate-50 border border-slate-200 text-xs font-semibold rounded-full opacity-80 text-slate-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-sm mb-2" style={{ color: colors.sage }}>AI Integration</h4>
                <div className="flex flex-wrap gap-2">
                  {['GenAI', 'Prompt Engineering'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-slate-50 border border-slate-200 text-xs font-semibold rounded-full opacity-80 text-slate-700">
                      {skill}
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
    </>
  );
};

export default ResumePage;
