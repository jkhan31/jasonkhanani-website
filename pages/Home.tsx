
import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from '../components/SectionHeader';
import { AxisMarker } from '../components/AxisMarker';
import { Logo } from '../components/Logo';
import { ARTICLES } from '../constants';
import { ArrowRight, Globe, Layers, Zap, Database, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => (
  <section className="px-6 py-24 md:py-32 lg:py-48 max-w-7xl mx-auto relative overflow-hidden">
    <div className="absolute top-10 right-10 opacity-5 pointer-events-none hidden lg:block">
        <Logo size="xl" />
    </div>
    <div className="max-w-4xl relative z-10">
      <p className="text-hankoRust font-bold tracking-[0.3em] text-[10px] uppercase mb-8 flex items-center">
        <span className="w-8 h-px bg-hankoRust mr-4" /> 
        Senior Operations Analyst & Systems Architect
      </p>
      <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-sumiInk leading-[0.95] mb-10 tracking-tight">
        Architecture for <span className="italic text-foxOrange">Global</span> Operations.
      </h1>
      <p className="text-xl md:text-3xl text-sumiInk/70 max-w-2xl font-serif leading-relaxed mb-16">
        I engineer high-margin systems for remote-first organizations by applying Industrial Engineering rigor to messy operational data.
      </p>
      <div className="flex flex-wrap gap-8">
        <Link 
          to="/evidence" 
          className="px-10 py-5 bg-hankoRust text-ricePaper text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-foxOrange transition-all duration-500 shadow-xl active:scale-95"
        >
          View Diagnostic Portfolio
        </Link>
        <Link 
          to="/framework" 
          className="px-10 py-5 border-0.5 border-hankoRust text-hankoRust text-[10px] font-bold tracking-[0.3em] uppercase hover:text-foxOrange hover:border-foxOrange transition-all duration-300"
        >
          Operating Protocols
        </Link>
      </div>
    </div>
  </section>
);

const RemoteLeverage: React.FC = () => (
  <section className="px-6 py-24 md:py-32 bg-sumiInk text-ricePaper relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.03] bg-grid pointer-events-none" />
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
      <div>
        <SectionHeader eyebrow="The Global Edge" title="Why Industrial Engineering Matters for Remote Teams." className="mb-10 text-ricePaper" />
        <div className="space-y-8 text-lg text-ricePaper/60 font-serif leading-relaxed">
          <p>
            Distributed teams fail when operational friction remains invisible. I bridge the gap by treating your remote company like a precision manufacturing plant—where "communication" is the raw material and "decision-making" is the throughput.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[
              { icon: Database, title: "SQL Forensics", desc: "Tracing revenue leaks across global transaction layers." },
              { icon: Layers, title: "Async Architecture", desc: "Designing protocols that eliminate the meeting tax." },
              { icon: Zap, title: "Velocity Audits", desc: "Identifying bottlenecks in cross-functional delivery." },
              { icon: Globe, title: "Global Compliance", desc: "Systems that scale across regional logic variances." }
            ].map((item, i) => (
              <div key={i} className="group">
                <item.icon className="text-foxOrange mb-4 group-hover:scale-110 transition-transform" size={24} />
                <h4 className="text-ricePaper font-bold text-xs uppercase tracking-widest mb-2">{item.title}</h4>
                <p className="text-sm opacity-80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="border-0.5 border-ricePaper/10 p-4 md:p-12 aspect-square flex flex-col justify-center items-center bg-white/5 backdrop-blur-sm">
           <div className="relative w-full h-full border border-ricePaper/5 flex items-center justify-center">
              <AxisMarker className="absolute h-full opacity-20 bg-ricePaper" />
              <div className="w-3/4 h-3/4 border-0.5 border-dashed border-foxOrange/40 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute text-[10px] font-bold uppercase tracking-[0.5em] text-foxOrange -rotate-90 origin-center left-0">Purpose</div>
              <div className="absolute text-[10px] font-bold uppercase tracking-[0.5em] text-ricePaper right-0 rotate-90 origin-center">Efficiency</div>
              <ShieldCheck className="text-foxOrange" size={48} />
           </div>
        </div>
        <div className="absolute -bottom-6 -left-6 bg-hankoRust p-6 shadow-2xl">
          <span className="text-4xl font-serif">€1.5M+</span>
          <p className="text-[9px] uppercase tracking-widest font-bold opacity-60">Quantified Impact</p>
        </div>
      </div>
    </div>
  </section>
);

const Tracks: React.FC = () => (
  <section className="px-6 py-24 md:py-40 max-w-7xl mx-auto">
    <SectionHeader 
      eyebrow="Execution Tracks" 
      title="How I Build Leverage." 
      className="mb-20 text-center"
    />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="p-12 md:p-20 border-0.5 border-hankoRust/20 bg-white relative group hover:border-hankoRust/60 transition-all duration-500">
        <div className="absolute top-0 right-0 p-8 opacity-5"><Database size={80} /></div>
        <span className="text-hankoRust font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">Persona 01</span>
        <h3 className="text-4xl font-serif mb-8 italic">The Investigator</h3>
        <p className="text-xl text-sumiInk/70 font-serif leading-relaxed mb-12">
          Diagnostic heavy lifting. I dive into your Postgres/BigQuery instances to find where revenue is leaking and why process owners are stuck.
        </p>
        <ul className="space-y-4 mb-12">
          {["Revenue Forensics", "SQL Data Modeling", "Scenario Sensitivity Analysis"].map(item => (
            <li key={item} className="flex items-center text-xs font-bold uppercase tracking-widest text-sumiInk/40">
              <span className="w-4 h-[1px] bg-hankoRust/30 mr-3" /> {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-12 md:p-20 border-0.5 border-hankoRust/20 bg-white relative group hover:border-hankoRust/60 transition-all duration-500">
        <div className="absolute top-0 right-0 p-8 opacity-5"><Layers size={80} /></div>
        <span className="text-foxOrange font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">Persona 02</span>
        <h3 className="text-4xl font-serif mb-8 italic">The Architect</h3>
        <p className="text-xl text-sumiInk/70 font-serif leading-relaxed mb-12">
          Operational blueprinting. I design the automations and documentation that allow teams to scale without adding headcount.
        </p>
        <ul className="space-y-4 mb-12">
          {["Async Workflow Design", "Automated Ops Pipelines", "Distributed System Resilience"].map(item => (
            <li key={item} className="flex items-center text-xs font-bold uppercase tracking-widest text-sumiInk/40">
              <span className="w-4 h-[1px] bg-foxOrange/30 mr-3" /> {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      <Hero />
      <RemoteLeverage />
      <Tracks />
      
      {/* Latest Writing Teaser */}
      <section className="px-6 py-24 md:py-32 max-w-7xl mx-auto border-t-0.5 border-hankoRust/10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
           <div className="max-w-xl">
             <SectionHeader eyebrow="Thinking" title="Tactical Dispatches." className="mb-0" />
           </div>
           <Link to="/writing" className="group flex items-center text-xs font-bold uppercase tracking-widest text-hankoRust">
             Archive <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
           </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {ARTICLES.slice(0, 2).map((article, i) => (
            <Link key={i} to={`/writing/${article.slug}`} className="group p-8 md:p-12 border-0.5 border-hankoRust/10 bg-white hover:shadow-2xl transition-all duration-500">
               <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-hankoRust/40 mb-4 block">{article.date} &bull; {article.category}</span>
               <h4 className="text-2xl md:text-3xl font-serif mb-6 group-hover:text-foxOrange transition-colors">{article.title}</h4>
               <p className="text-sumiInk/60 font-serif mb-8 line-clamp-2">{article.excerpt}</p>
               <span className="text-[10px] uppercase font-bold tracking-widest border-b border-sumiInk/20 group-hover:border-foxOrange transition-all">Read Essay</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Global Contact Hook */}
      <section className="px-6 py-32 bg-ricePaper text-center">
         <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-serif mb-12">Ready for the audit?</h2>
            <p className="text-xl text-sumiInk/60 font-serif mb-16">
              I am currently open to Senior Product Operations or Business Analysis roles with high-leverage remote teams.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
               <a href="mailto:jasonkhanani@gmail.com" className="px-12 py-5 bg-hankoRust text-ricePaper text-[10px] font-bold uppercase tracking-widest shadow-xl hover:bg-foxOrange transition-all">Request Diagnostic Call</a>
               <a href="https://linkedin.com/in/jasonkhanani" target="_blank" className="px-12 py-5 border-0.5 border-sumiInk/20 text-[10px] font-bold uppercase tracking-widest hover:border-foxOrange hover:text-foxOrange transition-all">LinkedIn Profile</a>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;
