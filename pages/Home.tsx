
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from '../components/SectionHeader';
import { AxisMarker } from '../components/AxisMarker';
import { Logo } from '../components/Logo';
import { ArticlePreviewCard } from '../components/ArticlePreviewCard';
import { ARTICLES } from '../constants';
import { ArrowRight, Globe, Layers, Database, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => (
  <section className="px-6 py-24 md:py-32 lg:py-48 max-w-7xl mx-auto relative overflow-hidden">
    <div className="absolute top-10 right-10 opacity-5 pointer-events-none hidden lg:block">
        <Logo size="xl" />
    </div>
    <div className="max-w-4xl relative z-10">
      <p className="text-hankoRust font-bold tracking-[0.3em] text-[14px] uppercase mb-8 flex items-center">
        INDUSTRIAL ENGINEER &bull; BUSINESS ANALYST
      </p>
      <h1 className="text-6xl md:text-8xl lg:text-7xl font-serif text-sumiInk leading-[0.95] mb-10 tracking-tight">
        Turning Messy Operations into <span className="italic text-foxOrange">Clear Decisions</span>
      </h1>
      <p className="text-sm uppercase text-sumiInk/50 mb-4 font-bold">Operational Clarity. Systemic Resilience.</p>
      <p className="text-xl md:text-3xl text-sumiInk/70 max-w-2xl font-serif leading-relaxed mb-16">
        Specialized in deep-dive analysis to streamline complexity, process optimization, and deploying AI-augmented workflows for high-performing systems.  
      </p>
      <div className="flex flex-wrap gap-8">
        <Link 
          to="/evidence" 
          className="px-10 py-5 bg-hankoRust text-ricePaper text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-foxOrange transition-all duration-500 shadow-xl active:scale-95"
        >
          Explore the Evidence Vault
        </Link>
        <Link 
          to="/framework" 
          className="px-10 py-5 border-0.5 border-hankoRust text-hankoRust text-[10px] font-bold tracking-[0.3em] uppercase hover:text-foxOrange hover:border-foxOrange transition-all duration-300"
        >
          Discover My Framework
        </Link>
      </div>
    </div>
  </section>
);

const RemoteLeverage: React.FC = () => (
  <section className="px-6 py-24 md:py-32 bg-sumiInk text-ricePaper relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.03] bg-grid pointer-events-none" />
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start relative z-10">
      <div>
        <SectionHeader
          eyebrow="Operational Excellence"
          title="Building Operational Excellence: Strategy to System."
          className="text-ricePaper"
          titleClassName="text-5xl md:text-6xl text-ricePaper"
          eyebrowClassName="text-sm md:text-base"
        />
        <div className="space-y-8 text-lg text-ricePaper/60 font-serif leading-relaxed">
          <p>
            In today's dynamic business environment, sustained impact stems from operational clarity and resilient systems. I specialize in dissecting complexity and engineering robust solutions that perform consistently, no matter the organizational structure.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[
              { title: "Deep-Dive Diagnostics", desc: "Uncovering hidden inefficiencies and process leaks at the data level to inform strategic action." },
              { title: "Asynchronous Workflow Design", desc: "Architecting seamless, documentation-driven processes that minimize dependencies and enhance cross-functional efficiency." },
              { title: "Performance Optimization", desc: "Pinpointing friction points and bottlenecks to accelerate system throughput and maximize delivery speed." },
              { title: "Scalable System Design", desc: "Building robust, adaptable processes and tools that reliably perform across diverse teams and evolving business needs." }
            ].map((item, i) => (
              <div key={i} className="group">
                <h4 className="text-ricePaper font-bold text-xs uppercase tracking-widest mb-2">{item.title}</h4>
                <p className="text-sm opacity-80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="border-0.5 border-ricePaper/10 p-6 md:p-12 aspect-square flex flex-col justify-center items-start bg-white/5 backdrop-blur-sm">
          <div className="w-full h-full flex flex-col justify-center gap-6 px-6">
            {[
              { title: "Deep-Dive Diagnostics", short: "Data-level forensics to find leaks and fix root causes." },
              { title: "Async Workflow Design", short: "Documentation-led flows to reduce blockers and context-switching." },
              { title: "Performance Optimization", short: "Targeted tuning of bottlenecks to speed delivery." },
              { title: "Scalable System Design", short: "Processes and tools that adapt across teams and growth." }
            ].map((p, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-foxOrange mt-2" />
                <div>
                  <h4 className="text-ricePaper font-bold text-sm uppercase tracking-widest">{p.title}</h4>
                  <p className="text-ricePaper/70 text-sm">{p.short}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -bottom-6 -left-6 bg-hankoRust p-6 shadow-2xl">
          <span className="text-4xl font-serif">€1.5M+</span>
          <p className="text-[9px] uppercase tracking-widest font-bold opacity-60">Quantified Impact Recovered</p>
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
        <span className="text-hankoRust font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">Investigator</span>
        <h3 className="text-4xl font-serif mb-8 italic">The Investigator</h3>
        <p className="text-xl text-sumiInk/70 font-serif leading-relaxed mb-12">
          I dive into your Postgres/BigQuery instances to find where revenue is leaking and why process owners are stuck.
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
        <span className="text-foxOrange font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">Architect</span>
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
  // Select 3 articles: prioritize featured, then most recent
  const selectedArticles = useMemo(() => {
    // First, get all featured articles sorted by date (most recent first)
    const featured = ARTICLES
      .filter(a => a.tags.includes('featured') || a.category === 'Featured')
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    // If we have 3+ featured articles, return the first 3
    if (featured.length >= 3) {
      return featured.slice(0, 3);
    }
    
    // Otherwise, combine featured articles with most recent non-featured
    const nonFeatured = ARTICLES
      .filter(a => !featured.includes(a))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    return [...featured, ...nonFeatured].slice(0, 3);
  }, []);

  return (
    <div className="animate-in fade-in duration-1000">
      <Hero />
      <RemoteLeverage />
      <Tracks />
      
      {/* Insights & Strategic Thinking */}
      <section className="px-6 py-24 md:py-32 max-w-7xl mx-auto border-t-0.5 border-hankoRust/10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <SectionHeader 
              eyebrow="Insights & Strategic Thinking" 
              title="Latest from the Operations Vault" 
              className="mb-0" 
            />
            <p className="text-sumiInk/60 font-serif mt-6 leading-relaxed">
              Deep dives into operational excellence, system design, and the future of AI-augmented business operations.
            </p>
          </div>
          <Link 
            to="/writing" 
            className="group flex items-center text-xs font-bold uppercase tracking-widest text-hankoRust hover:text-foxOrange transition-colors whitespace-nowrap"
          >
            View All Essays <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
        
        {/* 3-Column Grid of Article Previews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {selectedArticles.map((article) => (
            <ArticlePreviewCard key={article.slug} article={article} compact />
          ))}
        </div>
        
        {/* View All CTA */}
        <div className="mt-16 text-center">
          <Link
            to="/writing"
            className="inline-flex items-center px-10 py-4 border-0.5 border-hankoRust text-hankoRust text-[10px] font-bold tracking-[0.3em] uppercase hover:text-foxOrange hover:border-foxOrange hover:shadow-lg transition-all duration-300"
          >
            View All Essays
          </Link>
        </div>
      </section>

      {/* Global Contact Hook */}
      <section className="px-6 py-32 bg-ricePaper text-center">
         <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-serif mb-12">Let's Connect</h2>
            <p className="text-xl text-sumiInk/60 font-serif mb-16">
              I am currently open to Senior Product Operations or Business Analysis roles with high-leverage remote teams.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <Link to="/contact" className="px-12 py-5 bg-hankoRust text-ricePaper text-[10px] font-bold uppercase tracking-widest shadow-xl hover:bg-foxOrange transition-all">Get In Touch</Link>
              <a href="https://linkedin.com/in/jasonkhanani" target="_blank" className="px-12 py-5 border-0.5 border-sumiInk/20 text-[10px] font-bold uppercase tracking-widest hover:border-foxOrange hover:text-foxOrange transition-all">LinkedIn Profile</a>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;
