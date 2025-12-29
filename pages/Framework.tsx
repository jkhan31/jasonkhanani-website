
import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { AxisMarker } from '../components/AxisMarker';
import { Brain, Search, GitBranch, Anchor, Zap, BookOpen, RefreshCw, Shield } from 'lucide-react';

const StaticCard: React.FC<{
  title: string;
  subtitle?: string;
  description: string;
  motto?: string;
  icon?: any;
  accentClass: string;
}> = ({ title, subtitle, description, motto, icon: Icon, accentClass }) => (
  <div className="group relative p-8 border-0.5 border-hankoRust/30 bg-white shadow-sm transition-all duration-500">
    <div className={`absolute top-0 left-0 w-1 h-full ${accentClass} opacity-100 transition-opacity`} />
    <div className="flex justify-between items-start mb-6">
      {Icon && <Icon className="w-8 h-8 text-hankoRust" strokeWidth={1.5} />}
      <span className="text-[10px] font-bold tracking-widest opacity-30 uppercase">{subtitle || 'Component'}</span>
    </div>
    <h3 className="text-2xl font-serif mb-4 text-sumiInk">{title}</h3>
    <p className="text-sm text-sumiInk/70 leading-relaxed mb-6">{description}</p>
    {motto && (
      <div className="pt-6 border-t-0.5 border-hankoRust/10">
        <p className="text-xs font-serif italic text-hankoRust">"{motto}"</p>
      </div>
    )}
  </div>
);

const Framework: React.FC = () => {
  // Use an array to track multiple open sections
  const [openSfrSections, setOpenSfrSections] = useState<string[]>([]);

  const toggleSfr = (id: string) => {
    setOpenSfrSections(prev => 
      prev.includes(id) 
        ? prev.filter(sectionId => sectionId !== id) 
        : [...prev, id]
    );
  };

  const isSfrOpen = (id: string) => openSfrSections.includes(id);

  return (
    <div className="animate-in fade-in duration-1000">
      {/* Header Intro */}
      <header className="px-6 py-24 text-center max-w-3xl mx-auto">
        <SectionHeader title="The Flourishing Framework" eyebrow="Blueprint for Resilience" className="mb-8" />
        <p className="text-lg text-sumiInk/70 mb-8 leading-relaxed">
          The graphic below brings to life the two core components of my system: the <strong className="text-hankoRust">Purpose–Wellbeing Axis (PWA)</strong>, which defines the structural "what" and "why," and the <strong className="text-foxOrange">Sustainable Feedback Rhythm (SFR)</strong>, which defines the operational "how."
        </p>
        <p className="text-sm opacity-50 italic">This interactive guide was stress-tested through personal recovery and industrial performance audits.</p>
      </header>

      {/* PART I: PWA */}
      <section className="px-6 pb-32 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
          <h2 className="text-3xl font-serif text-sumiInk italic">The Structural Core Dynamic</h2>
          <div className="h-px flex-grow bg-hankoRust/10 mx-8 hidden md:block" />
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-30">PWA v2.0</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <StaticCard 
            title="Purpose"
            subtitle="The Vector"
            icon={Search}
            accentClass="bg-hankoRust"
            description="Purpose serves as the long-term motivator that informs identity, values, and decision-making. In engineering terms, it is the vector: it provides magnitude (energy) and direction. Without it, a system drifts."
            motto="Purpose provides the strength to endure challenges."
          />
          <StaticCard 
            title="Wellbeing"
            subtitle="The Capacity"
            icon={Shield}
            accentClass="bg-foxOrange"
            description="Refers to physical, mental, and emotional integrity. This is the systemic capacity. Without it, the axis becomes brittle under load, leading to structural burnout or failure."
            motto="Wellbeing provides the fuel to sustain the journey."
          />
        </div>

        {/* Supporting Pillars */}
        <div className="bg-sumiInk p-12 md:p-16 text-ricePaper relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10"><Brain size={120} /></div>
          <h3 className="text-xs uppercase tracking-widest font-bold mb-12 text-foxOrange">Enabled by 3 Supporting Pillars</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Brain className="text-foxOrange" size={20} />
                <h4 className="text-xl font-serif">Behavioral Science</h4>
              </div>
              <p className="text-sm opacity-80 leading-relaxed">Understanding habit architecture to design for sustained, consistent action and purposeful productivity.</p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="text-foxOrange" size={20} />
                <h4 className="text-xl font-serif">Reflective Practice</h4>
              </div>
              <p className="text-sm opacity-80 leading-relaxed">The learning loop necessary to adapt strategies. Making meaning from experience turns action into wisdom.</p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <GitBranch className="text-foxOrange" size={20} />
                <h4 className="text-xl font-serif">Systems Thinking</h4>
              </div>
              <p className="text-sm opacity-80 leading-relaxed">Recognizing interconnectedness. A holistic lens that balances Purpose and Wellbeing within broader operational contexts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PART II: SFR */}
      <section className="bg-ricePaper border-y-0.5 border-hankoRust/10 px-6 py-32 overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 max-w-2xl mx-auto">
            <SectionHeader title="The Sustainable Feedback Rhythm (SFR)" eyebrow="The Operational Pulse" />
            <p className="text-sumiInk/60 italic">"Stillness is not absence—it is preparation. SFR offers a regenerative rhythm for sustainable living."</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-hankoRust/10 border-0.5 border-hankoRust/10">
            {[
              { 
                id: 'grounding',
                num: '1',
                title: 'Grounding', 
                subtitle: 'The Anchor',
                icon: Anchor,
                text: 'Pausing to reconnect with identity and values before any deployment. Ensures your Momentum is actually aligned with your Axis.', 
                motto: 'Before we move, we must remember who we are.',
                accent: 'bg-hankoRust'
              },
              { 
                id: 'momentum',
                num: '2',
                title: 'Momentum', 
                subtitle: 'The Action',
                icon: Zap,
                text: 'Purpose-aligned, intentional work. Focused, high-leverage movement conscious of energy limits and systemic load.', 
                motto: 'True momentum flows from inner alignment.',
                accent: 'bg-foxOrange'
              },
              { 
                id: 'integration',
                num: '3',
                title: 'Integration', 
                subtitle: 'The Wisdom',
                icon: BookOpen,
                text: 'Synthesizing data from experiences to generate learning. This post-mortem phase turns raw action into wisdom.', 
                motto: 'We grow by absorbing what action teaches us.',
                accent: 'bg-sage'
              },
              { 
                id: 'regeneration',
                num: '4',
                title: 'Regeneration', 
                subtitle: 'The Fuel',
                icon: RefreshCw,
                text: 'Intentional replenishment. Maintenance of the "Capacity" part of the Axis, preparing the system for the next cycle.', 
                motto: 'Stillness is not absence—it is preparation.',
                accent: 'bg-sumiInk'
              },
            ].map((step) => (
              <div 
                key={step.id} 
                className={`bg-ricePaper p-10 group cursor-pointer transition-all duration-500 hover:bg-white overflow-hidden`}
                onClick={() => toggleSfr(step.id)}
              >
                <div className="flex justify-between items-center mb-8">
                  <div className={`w-10 h-10 ${step.accent} rounded-full flex items-center justify-center text-ricePaper shadow-sm`}>
                    <step.icon size={20} />
                  </div>
                  <span className="text-[10px] font-bold opacity-20 uppercase tracking-widest">{step.subtitle}</span>
                </div>
                <h4 className="text-xl font-serif mb-4 text-sumiInk group-hover:text-hankoRust">
                  {step.num}. {step.title}
                </h4>
                <div className={`transition-all duration-500 overflow-hidden ${isSfrOpen(step.id) ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 md:max-h-none md:opacity-100'}`}>
                  <p className="text-sm text-sumiInk/60 leading-relaxed mb-8">{step.text}</p>
                  <div className="pt-6 border-t-0.5 border-hankoRust/10">
                    <p className="text-[11px] font-serif italic text-hankoRust opacity-70">"{step.motto}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Synthesis */}
      <section className="px-6 py-32 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-serif text-sumiInk mb-12">How They Work Together</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-hankoRust/20 border-0.5 border-hankoRust/20">
          <div className="bg-white p-12 text-left">
            <h4 className="text-xs font-bold text-hankoRust tracking-widest uppercase mb-4">PWA (The What & Why)</h4>
            <p className="text-sumiInk/70 leading-relaxed">It defines the structural requirements for a resilient life. It tells you what needs to be in balance to prevent systemic drift or brittle failure.</p>
          </div>
          <div className="bg-white p-12 text-left">
            <h4 className="text-xs font-bold text-foxOrange tracking-widest uppercase mb-4">SFR (The How)</h4>
            <p className="text-sumiInk/70 leading-relaxed">It defines the adaptive process of living. It provides the pulse that maintains balance over time, day by day, phase by phase.</p>
          </div>
        </div>
        <div className="mt-16 p-8 border-0.5 border-hankoRust/10 bg-hankoRust/5 italic text-sm text-sumiInk/60">
          "Together, they provide a values-based alternative to hustle culture and reactive survival."
        </div>
      </section>
    </div>
  );
};

export default Framework;
