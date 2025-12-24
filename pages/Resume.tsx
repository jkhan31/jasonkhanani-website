
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
              <h1 className="text-5xl font-serif font-bold tracking-tight mb-2">JASON KESTER HANANI</h1>
              <p className="text-xl font-medium opacity-80" style={{ color: colors.rust }}>Industrial Engineer & Business Analyst</p>
              <div className="flex flex-wrap gap-6 mt-6 text-sm font-medium opacity-60">
                <a href="mailto:contact@jasonkhanani.com" className="flex items-center gap-2 hover:text-foxOrange transition"><Mail size={16} /> contact@jasonkhanani.com</a>
                <a href="https://linkedin.com/in/jasonkhanani" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-foxOrange transition"><Linkedin size={16} /> linkedin.com/in/jasonkhanani</a>
                <a href="https://jasonkhanani.com" className="flex items-center gap-2 hover:text-foxOrange transition"><Globe size={16} /> Global Remote Ready</a>
              </div>
            </div>
            <button 
              className="flex items-center gap-2 px-8 py-4 bg-hankoRust text-ricePaper text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-foxOrange transition-all shadow-xl active:scale-95"
              onClick={() => window.print()}
            >
              <Download size={16} /> Download Full Resume
            </button>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-12 relative z-10">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 opacity-40">Professional Summary</h2>
          <p className="text-lg leading-relaxed font-serif italic opacity-80 border-l-2 pl-6" style={{ borderColor: colors.orange }}>
            <strong>Industrial Engineer & Business Analyst</strong> with 6+ years of experience. I specialize in <strong>deep-dive analysis to streamline complexity</strong> and <strong>architect resilient operational systems</strong>. Proven track record of delivering over <strong style={{ color: colors.rust }}>€1.5M in quantified impact</strong> through process engineering, <strong>AI-augmented workflows</strong>, and human systems design in e-commerce and logistics. I focus on fostering <strong style={{ color: colors.sage }}>Systemic Resilience</strong> and high-performing operations.
          </p>
        </section>

        {/* Core Competencies */}
        <section className="mb-12 relative z-10">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 opacity-40">Core Competencies</h2>
          <ul className="list-disc pl-6 text-sm opacity-80 leading-relaxed">
            <li><strong>Operational Clarity &amp; Analysis:</strong> SQL (for data extraction &amp;EDA), Python (AI-Augmented EDA), Tableau, Looker, Advanced Excel Modeling (scenario planning &amp; simulation).</li>
            <li><strong>Systems Architecture &amp; Optimization:</strong> Lean Six Sigma Green Belt, Process Mapping &amp; Optimization, DMAIC, Workflow Automation (n8n/Python), Human Systems Design.</li>
            <li><strong>AI Integration:</strong> AI-Augmented Workflows, Prompt Engineering for Operations, AI-Driven Diagnostics, Prototyping Product Requirements with GenAI.</li>
            <li><strong>Strategic Impact:</strong> Root Cause Analysis, Business Requirement Documentation (BRD), Supply Chain Optimization, Business Process Improvement, Decision Leverage.</li>
          </ul>
        </section>

        {/* Professional Experience */}
        <section className="mb-12 relative z-10">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 opacity-40">Professional Experience</h2>
          {/* Commercial PMO (Analytics & Systems Architect) | Leading SE Asian E-commerce Platform */}
          <div className="mb-10 group">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-bold group-hover:text-hankoRust transition-colors">Commercial PMO (Analytics &amp; Systems Architect)</h3>
              <span className="text-xs font-bold opacity-40 uppercase tracking-widest">Apr 2025 – Present</span>
            </div>
            <ul className="space-y-3 text-sm opacity-80 leading-relaxed list-none">
              <li><span className="text-hankoRust">•</span> Standardized fragmented regional onboarding workflows into a unified global system, significantly reducing cross-functional friction and support ticket volume.</li>
              <li><span className="text-hankoRust">•</span> Applied <span style={{ color: colors.sage }}>PWA/SFR principles</span> to team workflows during organizational restructuring, maintaining delivery momentum and reducing burnout-related attrition.</li>
              <li><span className="text-hankoRust">•</span> Developed SKU-level performance models to optimize cross-border inventory allocation and size fill across Southeast Asian markets, enhancing efficiency.</li>
            </ul>
          </div>
          {/* Operations Manager (Growth & Business Analytics) | Leading SE Asian E-commerce Platform */}
          <div className="mb-10 group">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-bold group-hover:text-hankoRust transition-colors">Operations Manager (Growth &amp; Business Analytics)</h3>
              <span className="text-xs font-bold opacity-40 uppercase tracking-widest">Oct 2024 – Apr 2025</span>
            </div>
            <ul className="space-y-3 text-sm opacity-80 leading-relaxed list-none">
              <li><span className="text-hankoRust">•</span> Performed margin sensitivity analysis across payment methods; designed a targeted handling fee structure projected to deliver <strong style={{ color: colors.rust }}>€200K in annual revenue</strong>.</li>
              <li><span className="text-hankoRust">•</span> Analyzed ticket patterns to design an <strong>AI-driven helpdesk</strong>; achieved 24/7 coverage and significantly improved SLA performance through automated routing logic.</li>
              <li><span className="text-hankoRust">•</span> Managed a cross-functional team of 8; implemented OKR frameworks and <span style={{ color: colors.sage }}>Sustainable Feedback Rhythm (SFR)</span> principles to improve alignment and delivery on key operational metrics.</li>
            </ul>
          </div>
          {/* Associate Project Manager (Investigator Track) | Leading SE Asian E-commerce Platform */}
          <div className="mb-10 group">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-bold group-hover:text-hankoRust transition-colors">Associate Project Manager (Investigator Track)</h3>
              <span className="text-xs font-bold opacity-40 uppercase tracking-widest">Nov 2022 – Sep 2024</span>
            </div>
            <ul className="space-y-3 text-sm opacity-80 leading-relaxed list-none">
              <li><span className="text-hankoRust">•</span> Identified logistics subsidy leakage via SQL diagnostics; redesigned fee structures and minimum spend thresholds to drive a <strong style={{ color: colors.rust }}>31% increase in shipping revenue (€500K impact)</strong>.</li>
              <li><span className="text-hankoRust">•</span> Modeled 3PL billing discrepancies and implemented a flat-fee trucking model, resulting in a <strong style={{ color: colors.rust }}>58% reduction in subsidies</strong>.</li>
              <li><span className="text-hankoRust">•</span> Migrated return logistics to a cashless chargeback system, eliminating cash-on-pickup fraud and reducing failed pickup attempts.</li>
              <li><span className="text-hankoRust">•</span> Performed deep-dive diagnostics on warehouse performance and logistics datasets (SQL, Tableau) to guide executive leadership on network performance and strategic cost drivers.</li>
            </ul>
          </div>
          {/* Graduate Management Trainee (Product/Business Analyst) | Leading SE Asian E-commerce Platform */}
          <div className="mb-10 group">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-bold group-hover:text-hankoRust transition-colors">Graduate Management Trainee (Product/Business Analyst)</h3>
              <span className="text-xs font-bold opacity-40 uppercase tracking-widest">Nov 2021 – Oct 2022</span>
            </div>
            <ul className="space-y-3 text-sm opacity-80 leading-relaxed list-none">
              <li><span className="text-hankoRust">•</span> Diagnosed revenue erosion from high return rates; launched a marketplace exchange feature that preserved <strong style={{ color: colors.rust }}>€695K in revenue</strong> with a 15% exchange rate.</li>
              <li><span className="text-hankoRust">•</span> Utilized NPS and customer feedback loops to provide quantitative service-level diagnostics to regional operations teams.</li>
            </ul>
          </div>
          {/* Product Operations (Systems Architect) | Regional Tech-Logistics Startup */}
          <div className="mb-10 group">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-bold group-hover:text-hankoRust transition-colors">Product Operations (Systems Architect)</h3>
              <span className="text-xs font-bold opacity-40 uppercase tracking-widest">Jan 2020 – Oct 2021</span>
            </div>
            <ul className="space-y-3 text-sm opacity-80 leading-relaxed list-none">
              <li><span className="text-hankoRust">•</span> Optimized a 130-node supply chain network; relocated 7 major hubs with a <strong style={{ color: colors.rust }}>&lt;1 year payback period</strong> through rigorous capacity and cost modeling.</li>
              <li><span className="text-hankoRust">•</span> Authored BRDs for the core routing engine, reducing fleet setup and route activation lead time by <strong style={{ color: colors.rust }}>60% (from 5 days to 2 days)</strong>.</li>
            </ul>
          </div>
        </section>

        {/* Bottom Grid: Education, Research & Stack */}
        <div className="grid md:grid-cols-3 gap-12 border-t-0.5 pt-12 relative z-10" style={{ borderColor: `${colors.ink}20` }}>
          {/* Education */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 opacity-40">Education</h2>
            <div className="mb-6">
              <h4 className="font-bold text-base">University of Michigan</h4>
              <p className="text-sm opacity-60">B.S.E. Industrial &amp; Operations Engineering (Cum Laude) — Dec 2018</p>
            </div>
            <div className="mb-6">
              <h4 className="font-bold text-base">Six Sigma Green Belt Certification</h4>
              <p className="text-sm opacity-60">Institute of Industrial and Systems Engineers — Certification No. 2558-18401 (Apr 2017)</p>
            </div>
          </section>
          {/* Research */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 opacity-40">Research</h2>
            <div>
              <h4 className="font-bold text-base" style={{ color: colors.sage }}>Research Lead</h4>
              <p className="text-xs opacity-60 italic">Developed <span style={{ color: colors.sage }}>The Purpose-Wellbeing Axis (PWA)</span> &amp; <span style={{ color: colors.sage }}>The Sustainable Feedback Rhythm (SFR)</span>—a human systems design framework for building vocational resilience and fostering systemic well-being.</p>
            </div>
          </section>
          {/* Stack */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 opacity-40">The Stack</h2>
            <div className="flex flex-wrap gap-2">
              {['SQL (MySQL, PostgreSQL)', 'Python (AI-Augmented Workflows)', 'Looker', 'Tableau', 'Advanced Excel Modeling', 'n8n Automation', 'Scenario Modeling', 'BRD Writing', 'DMAIC', 'GenAI', 'Prompt Engineering'].map(tool => (
                <span key={tool} className="px-3 py-1 bg-ricePaper border border-hankoRust/20 text-[10px] font-bold uppercase tracking-widest text-sumiInk rounded-full opacity-80 hover:border-foxOrange hover:text-foxOrange transition-all cursor-default">
                  {tool}
                </span>
              ))}
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
