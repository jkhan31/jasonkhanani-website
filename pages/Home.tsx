
import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from '../components/SectionHeader';
import { AxisMarker } from '../components/AxisMarker';
import { Logo } from '../components/Logo';
import { ARTICLES } from '../constants';
import { ArrowRight, Mail, ChevronRight, MessageSquare } from 'lucide-react';

const Hero: React.FC = () => (
  <section className="px-6 py-24 md:py-32 lg:py-40 max-w-7xl mx-auto relative">
    <div className="absolute top-10 right-10 opacity-10 pointer-events-none hidden lg:block">
        <Logo size="xl" />
    </div>
    <div className="max-w-4xl">
      <p className="text-hankoRust font-medium tracking-[0.2em] text-xs uppercase mb-6 flex items-center">
        Industrial Engineer <span className="mx-2">•</span> Business Analyst
      </p>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-sumiInk leading-[1.1] mb-8">
        Turning Messy Operations into <span className="italic text-foxOrange">Clear Decisions.</span>
      </h1>
      <p className="text-lg md:text-2xl text-sumiInk/70 max-w-2xl leading-relaxed mb-12">
        Specialized in revenue diagnostics, systems architecture, and sustainable workflow design for high-performing remote teams.
      </p>
      <div className="flex flex-wrap gap-6">
        <Link 
          to="/evidence" 
          className="px-8 py-4 bg-hankoRust text-ricePaper text-sm tracking-widest uppercase hover:bg-foxOrange transition-colors duration-300 shadow-sm"
        >
          Explore the Evidence Vault
        </Link>
        <Link 
          to="/framework" 
          className="px-8 py-4 border-0.5 border-hankoRust text-hankoRust text-sm tracking-widest uppercase hover:text-foxOrange hover:border-foxOrange transition-all duration-300"
        >
          View Framework
        </Link>
      </div>
    </div>
  </section>
);

const ImpactStrip: React.FC = () => (
  <section className="bg-ricePaper border-y-0.5 border-hankoRust/10 px-6 py-20 overflow-hidden">
    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
      {[
        { label: 'Recovered Revenue', value: '€690K+' },
        { label: 'Annual Logistics Savings', value: '€500K+' },
        { label: 'Lead Time Reduction', value: '60%' },
        { label: 'Subsidy Reduction', value: '58%' },
      ].map((stat, idx) => (
        <div key={idx} className="flex flex-col">
          <span className="text-4xl lg:text-5xl font-serif text-hankoRust mb-2">{stat.value}</span>
          <span className="text-[10px] uppercase tracking-widest text-sumiInk/50 font-semibold">{stat.label}</span>
        </div>
      ))}
    </div>
  </section>
);

const AboutJason: React.FC = () => (
  <section className="px-6 py-24 md:py-32 bg-white">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
      <div className="w-full lg:w-1/2">
        <div className="relative inline-block mb-12">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
            alt="Jason Kester Hanani" 
            className="w-full max-w-md grayscale hover:grayscale-0 transition-all duration-1000 border-0.5 border-hankoRust/20"
          />
          <div className="absolute -bottom-6 -right-6 hidden md:block">
            <div className="bg-hankoRust text-ricePaper p-6 text-xs font-bold uppercase tracking-widest">
              Est. 2019 <br/> Operational Analyst
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <SectionHeader eyebrow="The Persona" title="Hi, I'm Jason." className="mb-8" />
        <div className="space-y-6 text-lg text-sumiInk/70 font-serif leading-relaxed">
          <p>
            I'm here to help you navigate the complexities of global operations and build systems rooted in purposeful productivity. 
            With a background in <span className="text-hankoRust font-semibold">Industrial & Operations Engineering</span> from the University of Michigan, 
            I view every bottleneck as a design problem waiting for a structural solution.
          </p>
          <p>
            My work is built upon two research-based frameworks: the <span className="italic">Purpose-Wellbeing Axis (PWA)</span> 
            and the <span className="italic">Sustainable Feedback Rhythm (SFR)</span>. These aren't just theories; they are the operating 
            systems I've used to recover millions in revenue leakage while maintaining team resilience in high-pressure environments.
          </p>
          <p>
            Whether you're streamlining a complex supply chain or architecting a high-leverage remote workflow, I invite you to learn and build alongside me.
          </p>
        </div>
        <div className="mt-12 flex items-center gap-6">
           <Link to="/resume" className="text-xs font-bold uppercase tracking-widest border-b border-hankoRust pb-1 hover:text-foxOrange hover:border-foxOrange transition-all">View Experience</Link>
           <div className="w-12 h-px bg-hankoRust/20" />
           <span className="font-signature text-2xl text-sumiInk opacity-40">Jason Kester Hanani</span>
        </div>
      </div>
    </div>
  </section>
);

const LatestWriting: React.FC = () => {
  const latest = ARTICLES[0];
  if (!latest) return null;

  return (
    <section className="px-6 py-24 bg-ricePaper/30 border-y-0.5 border-hankoRust/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        <div className="w-full md:w-1/3">
          <SectionHeader eyebrow="Fresh Insight" title="From the Desk" className="mb-6" />
          <p className="text-sumiInk/50 text-sm leading-relaxed mb-8">
            Tactical essays on navigating complexity, Industrial Engineering, and high-leverage decision making.
          </p>
          <Link 
            to="/writing" 
            className="text-xs font-bold uppercase tracking-widest text-hankoRust hover:text-foxOrange transition-colors flex items-center group"
          >
            Browse all writing <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="w-full md:w-2/3">
          <Link to={`/writing/${latest.slug}`} className="group">
            <div className="p-8 md:p-12 border-0.5 border-hankoRust/20 hover:border-hankoRust/40 transition-all duration-500 bg-white shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-hankoRust mb-4 block">
                Latest Article &bull; {latest.date}
              </span>
              <h3 className="text-3xl md:text-4xl font-serif mb-6 group-hover:text-foxOrange transition-colors">
                {latest.title}
              </h3>
              <p className="text-lg text-sumiInk/60 mb-8 max-w-xl">
                {latest.excerpt}
              </p>
              <div className="inline-block px-6 py-3 border-b border-sumiInk group-hover:border-foxOrange text-[10px] font-bold uppercase tracking-widest transition-all">
                Read Full Essay
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

const TrackCard: React.FC<{ 
  title: string; 
  persona: string; 
  description: string; 
  accent: string;
  className?: string;
}> = ({ title, persona, description, accent, className = "" }) => (
  <div className={`p-8 md:p-12 border-0.5 border-hankoRust/20 relative group hover:border-hankoRust/40 transition-colors ${className}`}>
    <div className={`absolute top-0 left-0 w-1 h-full ${accent} opacity-50`} />
    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-sumiInk/40 mb-4 block">Persona</span>
    <h3 className="text-3xl font-serif mb-6">{persona}</h3>
    <p className="text-lg text-sumiInk/70 leading-relaxed mb-8">
      {description}
    </p>
    <div className="flex items-center text-xs tracking-widest uppercase font-bold text-hankoRust group-hover:text-foxOrange transition-colors cursor-default">
      Focus: {title}
    </div>
  </div>
);

const Tracks: React.FC = () => (
  <section className="px-6 py-24 md:py-32 max-w-7xl mx-auto">
    <SectionHeader 
      eyebrow="The Methodology" 
      title="Dual Track Execution" 
      className="mb-16"
    />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-0.5 border-hankoRust/10">
      <TrackCard 
        persona="The Investigator"
        title="Diagnostics"
        description="I do the heavy lifting up front—diagnosing the 'why' behind operational leaks through deep-dive SQL forensic analysis and data modeling."
        accent="bg-hankoRust"
      />
      <TrackCard 
        persona="The Architect"
        title="Design"
        description="I build the blueprint for 'what’s next'—designing efficient, streamlined systems that process owners can run with absolute ease."
        accent="bg-foxOrange"
      />
    </div>
  </section>
);

const ContactSection: React.FC = () => (
  <section className="px-6 py-24 md:py-32 bg-sumiInk text-ricePaper border-t-0.5 border-hankoRust/10 overflow-hidden relative">
    <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
       <Logo size="xl" />
    </div>
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
      <div className="lg:w-1/2">
        <SectionHeader eyebrow="Get in Touch" title="Request a Diagnostic Audit." className="mb-8" />
        <p className="text-xl text-ricePaper/60 mb-12 font-serif leading-relaxed">
          Stuck with a scaling bottleneck or a revenue leak you can't trace? Let's apply Industrial Engineering principles to your problem.
        </p>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-hankoRust/20 flex items-center justify-center">
              <Mail size={18} className="text-foxOrange" />
            </div>
            <a href="mailto:jasonkhanani@gmail.com" className="text-lg hover:text-foxOrange transition-colors">jason@khanani.com</a>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-hankoRust/20 flex items-center justify-center">
              <MessageSquare size={18} className="text-foxOrange" />
            </div>
            <span className="text-lg">LinkedIn Messaging Enabled</span>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2">
        <div className="bg-ricePaper/5 p-8 md:p-12 border-0.5 border-ricePaper/10 backdrop-blur-sm">
          <h4 className="text-xs font-bold uppercase tracking-widest mb-8 opacity-60">The Diagnostic Request</h4>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Full Name" className="w-full bg-transparent border-b border-ricePaper/20 py-3 text-sm focus:outline-none focus:border-foxOrange transition-all" />
              <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-ricePaper/20 py-3 text-sm focus:outline-none focus:border-foxOrange transition-all" />
            </div>
            <input type="text" placeholder="Organization / Project" className="w-full bg-transparent border-b border-ricePaper/20 py-3 text-sm focus:outline-none focus:border-foxOrange transition-all" />
            <textarea placeholder="Tell me about your primary operational bottleneck..." rows={4} className="w-full bg-transparent border-b border-ricePaper/20 py-3 text-sm focus:outline-none focus:border-foxOrange transition-all resize-none"></textarea>
            <button className="w-full py-4 bg-hankoRust text-ricePaper text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-foxOrange transition-all shadow-lg">
              Submit Diagnostic Request
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      <Hero />
      <ImpactStrip />
      <AboutJason />
      <LatestWriting />
      <Tracks />
      
      {/* Operational Sustainability Teaser */}
      <section className="bg-sage text-ricePaper px-6 py-24 md:py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[10px] uppercase tracking-widest font-bold mb-4 block opacity-60">The Framework</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Systems for People: The PWA Framework.</h2>
            <p className="text-xl leading-relaxed opacity-80 mb-12">
              "I apply Industrial Engineering principles to human workflows. Most burnout is a design flaw; I build systems that scale without breaking people via the Purpose-Wellbeing Axis."
            </p>
            <Link 
              to="/framework" 
              className="px-8 py-4 border-0.5 border-ricePaper/40 hover:border-ricePaper hover:text-sumiInk hover:bg-ricePaper transition-all text-xs tracking-widest uppercase font-bold"
            >
              Explore the PWA Theory
            </Link>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="relative w-64 h-64 border-0.5 border-ricePaper/20 rounded-full flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                 <AxisMarker className="h-48 opacity-40 bg-ricePaper" />
              </div>
              <div className="w-4 h-4 rounded-full bg-foxOrange animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default Home;
