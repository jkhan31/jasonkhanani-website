
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
              <p className="text-xl font-medium opacity-80 whitespace-normal break-words max-w-full" style={{ color: colors.rust }}>Industrial Engineer &amp; Business Analyst</p>
              <div className="flex flex-col md:flex-row md:items-center gap-2 mt-6 text-sm font-medium opacity-80">
                <a href="mailto:contact@jasonkhanani.com" className="flex items-center gap-2 hover:text-foxOrange transition w-full md:w-auto break-words"><Mail size={16} /> contact@jasonkhanani.com</a>
                <a href="https://jasonkhanani.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-foxOrange transition w-full md:w-auto break-words mt-2 md:mt-0"><Globe size={16} /> jasonkhanani.com</a>
                <a href="https://www.linkedin.com/in/jasonkhanani/" target="_blank" rel="noreferrer" className="mt-2 md:ml-4 md:mt-0 inline-flex items-center justify-center w-9 h-9 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-shadow">
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
            <a
              href="https://drive.google.com/file/d/1gHOV3YqkQcVMo8u_KbjPxTm3ZY9Z1VLm/view?usp=sharing"
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
            Industrial Engineer &amp; Business Analyst with 6+ years of experience specializing in deep-dive analysis to streamline complexity and build resilient operational systems. Proven track record of delivering <strong>€1.5M+ in quantified impact</strong> through process engineering, systems architecture, and AI-augmented insights in e-commerce and logistics. Developer of <strong>The Purpose-Wellbeing Axis (PWA)</strong>, an engineering-based framework for human systems design, used to architect workflows that prevent burnout and foster <strong>Systemic Resilience</strong> in high-pressure remote environments.
          </p>
        </section>

        {/* Core Competencies */}
        <section className="mb-12 relative z-10">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 opacity-40">Core Competencies</h2>
          <ul className="list-disc pl-6 text-sm opacity-80 leading-relaxed">
            <li><strong>Operational Analysis:</strong> Deep-dive diagnostics, Process Mapping &amp; Optimization, Capacity Planning, A/B Testing, Funnel Analysis, Metric Design (Retention, Conversion).</li>
            <li><strong>Systems Architecture:</strong> Lean Six Sigma (Green Belt), Human Systems Design (PWA/SFR), Business Requirement Documentation (BRD), Systems Thinking.</li>
            <li><strong>AI &amp; Data:</strong> SQL (MySQL, PostgreSQL), Python (AI-Augmented Workflows), Looker, Tableau, Advanced Excel Modeling, Prompt Engineering for Operations.</li>
            <li><strong>Methodology:</strong> Industrial Engineering Principles, DMAIC, Strategic Cost &amp; Efficiency Modeling.</li>
          </ul>
        </section>

          {/* Professional Experience */}
        <section className="mb-12 relative z-10">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 opacity-40">Professional Experience</h2>
          {/* Commercial PMO (Analytics & Systems Architect) */}
          <div className="mb-10 group">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-bold group-hover:text-hankoRust transition-colors">Commercial PMO (Analytics &amp; Systems Architect) - Leading SE Asian E-commerce Platform</h3>
              <span className="text-xs font-bold opacity-40 uppercase tracking-widest">Apr 2025 – Present</span>
            </div>
            <ul className="space-y-3 text-sm opacity-80 leading-relaxed list-none">
              <li><span className="text-hankoRust">•</span> <strong>Complexity Streamlining:</strong> Standardized fragmented regional onboarding workflows into a unified global system, significantly reducing cross-functional friction and support ticket volume.</li>
              <li><span className="text-hankoRust">•</span> <strong>Systemic Resilience:</strong> Applied <strong>PWA/SFR principles</strong> to team workflows during organizational restructuring, maintaining delivery momentum and reducing burnout-related attrition.</li>
              <li><span className="text-hankoRust">•</span> <strong>Inventory Optimization:</strong> Developed SKU-level performance models to optimize cross-border inventory allocation and size fill across Southeast Asian markets, enhancing efficiency.</li>
            </ul>
          </div>
          {/* Operations Manager (Growth & Business Analytics) */}
          <div className="mb-10 group">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-bold group-hover:text-hankoRust transition-colors">Operations Manager (Growth &amp; Business Analytics) - Leading SE Asian E-commerce Platform</h3>
              <span className="text-xs font-bold opacity-40 uppercase tracking-widest">Oct 2024 – Apr 2025</span>
            </div>
            <ul className="space-y-3 text-sm opacity-80 leading-relaxed list-none">
              <li><span className="text-hankoRust">•</span> <strong>Process Engineering:</strong> Performed margin sensitivity analysis across payment methods; designed a targeted handling fee structure projected to deliver <strong style={{ color: colors.rust }}>€200K in annual revenue</strong>.</li>
              <li><span className="text-hankoRust">•</span> <strong>AI-Augmented Efficiency:</strong> Analyzed ticket patterns to design an <strong>AI-driven helpdesk</strong>; achieved 24/7 coverage and significantly improved SLA performance through automated routing logic.</li>
              <li><span className="text-hankoRust">•</span> <strong>Team Leadership &amp; Rhythm:</strong> Managed a cross-functional team of 8; implemented OKR frameworks and <strong>Sustainable Feedback Rhythm (SFR)</strong> principles to improve alignment and delivery on key operational metrics.</li>
            </ul>
          </div>
          {/* Associate Project Manager (Investigator Track) */}
          <div className="mb-10 group">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-bold group-hover:text-hankoRust transition-colors">Associate Project Manager (Investigator Track) - Leading SE Asian E-commerce Platform</h3>
              <span className="text-xs font-bold opacity-40 uppercase tracking-widest">Nov 2022 – Sep 2024</span>
            </div>
            <ul className="space-y-3 text-sm opacity-80 leading-relaxed list-none">
              <li><span className="text-hankoRust">•</span> <strong>Deep-Dive Analysis:</strong> Identified logistics subsidy leakage via SQL diagnostics; redesigned fee structures and minimum spend thresholds to drive a <strong style={{ color: colors.rust }}>31% increase in shipping revenue (€500K impact)</strong>.</li>
              <li><span className="text-hankoRust">•</span> <strong>Cost Optimization:</strong> Modeled 3PL billing discrepancies and implemented a flat-fee trucking model, resulting in a <strong style={{ color: colors.rust }}>58% reduction in subsidies</strong>.</li>
              <li><span className="text-hankoRust">•</span> <strong>Systemic Integrity:</strong> Migrated return logistics to a cashless chargeback system, eliminating cash-on-pickup fraud and reducing failed pickup attempts.</li>
              <li><span className="text-hankoRust">•</span> <strong>Strategic Modeling:</strong> Performed deep-dive diagnostics on warehouse performance and logistics datasets (SQL, Tableau) to guide executive leadership on network performance and strategic cost drivers.</li>
            </ul>
          </div>
          {/* Graduate Management Trainee (Product/Business Analyst) */}
          <div className="mb-10 group">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-bold group-hover:text-hankoRust transition-colors">Graduate Management Trainee (Product/Business Analyst) - Leading SE Asian E-commerce Platform</h3>
              <span className="text-xs font-bold opacity-40 uppercase tracking-widest">Nov 2021 – Oct 2022</span>
            </div>
            <ul className="space-y-3 text-sm opacity-80 leading-relaxed list-none">
              <li><span className="text-hankoRust">•</span> <strong>Problem Identification:</strong> Diagnosed revenue erosion from high return rates; launched a marketplace exchange feature that preserved <strong style={{ color: colors.rust }}>€695K in revenue</strong> with a 15% exchange rate.</li>
              <li><span className="text-hankoRust">•</span> <strong>Operational Clarity:</strong> Utilized NPS and customer feedback loops to provide quantitative service-level diagnostics to regional operations teams.</li>
            </ul>
          </div>
          {/* Product Operations (Systems Architect) - Regional Tech-Logistics Startup */}
          <div className="mb-10 group">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-bold group-hover:text-hankoRust transition-colors">Product Operations (Systems Architect) - Regional Tech-Logistics Startup</h3>
              <span className="text-xs font-bold opacity-40 uppercase tracking-widest">Jan 2020 – Oct 2021</span>
            </div>
            <ul className="space-y-3 text-sm opacity-80 leading-relaxed list-none">
              <li><span className="text-hankoRust">•</span> <strong>Network Optimization:</strong> Optimized a 130-node supply chain network; relocated 7 major hubs with a <strong style={{ color: colors.rust }}>&lt;1 year payback period</strong> through rigorous capacity and cost modeling.</li>
              <li><span className="text-hankoRust">•</span> <strong>Process Redesign:</strong> Authored BRDs for the core routing engine, reducing fleet setup and route activation lead time by <strong style={{ color: colors.rust }}>60% (from 5 days to 2 days)</strong>.</li>
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
              <h4 className="font-bold text-base">Six Sigma Green Belt Certification</h4>
              <p className="text-sm opacity-80">Institute of Industrial and Systems Engineers (IISE)</p>
            </div>
            <div className="mb-6">
              <h4 className="font-bold text-base">Research Lead</h4>
              <p className="text-sm opacity-80">Developed <strong>The Purpose-Wellbeing Axis (PWA)</strong> &amp; <strong>The Sustainable Feedback Rhythm (SFR)</strong>—a human systems design framework for building vocational resilience and fostering systemic well-being.</p>
            </div>
          </section>

          {/* My Methodology (PWA & SFR) */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 opacity-40">My Methodology</h2>
            <div className="border-l-2 pl-4" style={{ borderColor: colors.sage }}>
              <h3 className="font-bold text-base" style={{ color: colors.sage, marginBottom: '0.5rem' }}>The Purpose-Wellbeing Axis (PWA) &amp; The Sustainable Feedback Rhythm (SFR)</h3>
              <p className="text-sm opacity-80 italic leading-relaxed">
                An engineering framework for human systems design, outlining principles for vocational resilience and systemic well-being in high-pressure environments.
              </p>
              <p className="text-sm opacity-80 mt-2">
                <Link href="/framework" className="text-hankoRust hover:text-foxOrange transition-colors" style={{ color: colors.rust }}>Learn more about the PWA &amp; SFR →</Link>
              </p>
            </div>
          </section>

          {/* The Stack */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 opacity-40">The Stack</h2>
            <div className="flex flex-wrap gap-2">
              {['SQL (MySQL, PostgreSQL)', 'Python', 'Tableau', 'Looker', 'Advanced Excel', 'n8n Automation', 'Workflow Automation', 'BRD Writing', 'DMAIC', 'GenAI', 'Prompt Engineering', 'Human Systems Design (PWA/SFR)', 'Systems Thinking'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-slate-50 border border-slate-200 text-xs font-semibold rounded-full opacity-80 text-slate-700">
                  {skill}
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
    </>
  );
};

export default ResumePage;
