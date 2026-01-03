import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { Brain, Search, GitBranch, Anchor, Zap, BookOpen, RefreshCw, Shield, ArrowRight, ExternalLink } from 'lucide-react';

// Final StaticCard: Title next to Icon + Larger Text + Linked Citations
const StaticCard: React.FC<{
  title: string;
  subtitle?: string;
  description: string;
  motto?: string;
  mechanism?: string;
  refNum?: string;
  icon?: any;
  accentClass: string;
}> = ({ title, subtitle, description, mechanism, motto, refNum, icon: Icon, accentClass }) => (
  <div className="group relative p-8 border-0.5 border-hankoRust/30 bg-white shadow-sm transition-all duration-500 hover:shadow-md">
    {/* Accent Bar */}
    <div className={`absolute top-0 left-0 w-1 h-full ${accentClass} opacity-100 transition-opacity`} />

    {/* Header Row: Icon + Title + Reference on Left | Subtitle on Right */}
    <div className="flex justify-between items-start mb-6">
      <div className="flex items-center gap-4">
        {Icon && <Icon className="w-6 h-6 text-hankoRust shrink-0" strokeWidth={1.5} />}

        <div className="flex items-start">
          <h3 className="text-2xl font-serif text-sumiInk leading-none">{title}</h3>

          {/* Superscript Citation */}
          {refNum && (
            <a
              href={`#ref-${refNum}`}
              className="text-[10px] font-serif text-hankoRust/60 -mt-1 ml-1 hover:text-hankoRust hover:underline transition-colors"
              aria-label={`Jump to reference ${refNum}`}
            >
              [{refNum}]
            </a>
          )}
        </div>
      </div>

      {/* Subtitle */}
      <span className="text-[10px] font-bold tracking-widest opacity-30 uppercase pt-1 shrink-0 ml-4">
        {subtitle || 'Component'}
      </span>
    </div>

    <p className="text-sm text-sumiInk/80 leading-relaxed mb-6 font-medium">{description}</p>

    {/* Scientific Mechanism Section */}
    {mechanism && (
      <div className="mb-6 p-5 bg-ricePaper border-l-2 border-sumiInk/10">
        <p className="text-sm text-sumiInk/70 leading-relaxed italic">
          <strong className="not-italic text-sumiInk/90 block mb-2 text-xs uppercase tracking-wider">The Mechanism:</strong>
          {mechanism}
        </p>
      </div>
    )}

    {/* Motto Section */}
    {motto && (
      <div className="pt-6 border-t-0.5 border-hankoRust/10">
        <p className="text-sm font-serif italic text-hankoRust">"{motto}"</p>
      </div>
    )}
  </div>
);

const Framework: React.FC = () => {
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
    <div className="animate-in fade-in duration-1000 scroll-smooth">
      {/* Header Intro */}
      <header className="px-6 py-24 text-center max-w-3xl mx-auto">
        <SectionHeader title="The Flourishing Framework" eyebrow="Blueprint for Resilience" className="mb-8" />

        <p className="text-xl font-serif text-sumiInk italic mb-8">
          A thermal management system for the human operating system.
        </p>

        <p className="text-md text-sumiInk/70 mb-8 leading-relaxed">
          I developed this framework to reverse-engineer a recovery strategy after a systemic burnout. It treats resilience not as a character trait, but as an engineering problem: <strong className="text-hankoRust">How do we maintain high-performance output (Purpose) without overheating the biological hardware (Wellbeing)?</strong>
        </p>
      </header>

      {/* PART I: PWA */}
      <section className="px-6 pb-32 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
          <h2 className="text-3xl font-serif text-sumiInk italic">The Purpose-Wellbeing Axis (PWA)</h2>
          <div className="h-px flex-grow bg-hankoRust/10 mx-8 hidden md:block" />
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-30">The Structural Dynamic</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <StaticCard
            title="Purpose"
            subtitle="The Vector"
            refNum="1"
            icon={Search}
            accentClass="bg-hankoRust"
            description="Purpose serves as the long-term motivator that informs identity, values, and decision-making. In engineering terms, it is the vector: it provides magnitude (energy) and direction. Without it, a system drifts."
            mechanism="Research in eudaimonic psychology shows that a strong sense of purpose downregulates the body's stress response (cortisol), acting as a biological buffer against high-demand environments."
            motto="Purpose provides the strength to endure challenges."
          />
          <StaticCard
            title="Wellbeing"
            subtitle="The Capacity"
            refNum="1"
            icon={Shield}
            accentClass="bg-foxOrange"
            description="Refers to physical, mental, and emotional integrity. This is the systemic capacity. Without it, the axis becomes brittle under load, leading to structural burnout or failure."
            mechanism="Wellbeing is not just the absence of illness; it is the active maintenance of the 'Cooling System' (neuroendocrine and inflammatory regulation) required to handle the heat of a high-purpose life."
            motto="Wellbeing provides the fuel to sustain the journey."
          />
        </div>

        {/* Supporting Pillars */}
        <div className="bg-sumiInk p-12 md:p-16 text-ricePaper relative overflow-hidden rounded-sm">
          <div className="absolute top-0 right-0 p-8 opacity-10"><Brain size={120} /></div>
          <h3 className="text-xs uppercase tracking-widest font-bold mb-12 text-foxOrange">Enabled by 3 Engineered Pillars</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Brain className="text-foxOrange" size={20} />
                <h4 className="text-xl font-serif">
                  Behavioral Science
                  <a href="#ref-3" className="text-xs opacity-50 font-sans align-top ml-1 hover:text-foxOrange hover:underline hover:opacity-100 transition-all">[3]</a>
                </h4>
              </div>
              <p className="text-sm opacity-80 leading-relaxed">
                Leveraging <strong>Friction Management</strong>. We do not rely on willpower; we design the environment to bridge the gap between intention and action.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="text-foxOrange" size={20} />
                <h4 className="text-xl font-serif">
                  Reflective Practice
                  <a href="#ref-4" className="text-xs opacity-50 font-sans align-top ml-1 hover:text-foxOrange hover:underline hover:opacity-100 transition-all">[4]</a>
                </h4>
              </div>
              <p className="text-sm opacity-80 leading-relaxed">
                Using <strong>Experiential Learning Cycles</strong> to convert raw experience into data. This turns "failure" into "system calibration," ensuring that every stumble refines the algorithm.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <GitBranch className="text-foxOrange" size={20} />
                <h4 className="text-xl font-serif">
                  Contextual Design
                  <a href="#ref-5" className="text-xs opacity-50 font-sans align-top ml-1 hover:text-foxOrange hover:underline hover:opacity-100 transition-all">[5]</a>
                </h4>
              </div>
              <p className="text-sm opacity-80 leading-relaxed">
                Applying <strong>Systems Thinking</strong>. Recognizing that you are not an island, but a node in a <strong>Complex Adaptive System</strong> where the environment dictates performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PART II: SFR */}
      <section className="bg-ricePaper border-y-0.5 border-hankoRust/10 px-6 py-32 overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 max-w-2xl mx-auto">
            <SectionHeader title="The Sustainable Feedback Rhythm (SFR)" eyebrow="The Operating Rhythm" />
            <p className="text-sumiInk/60 italic">
              "Replacing linear hustle with a regenerative cycle based on Energy Management."
              <a href="#ref-2" className="text-xs not-italic ml-1 text-hankoRust/60 hover:text-hankoRust hover:underline transition-colors">[2]</a>
            </p>
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
                accent: 'bg-hankoRust',
                ref: '2'
              },
              {
                id: 'momentum',
                num: '2',
                title: 'Momentum',
                subtitle: 'The Action',
                icon: Zap,
                text: 'Purpose-aligned, intentional work. Aligns with biological peaks (Ultradian Rhythms) to maximize focus and flow without incurring cognitive debt.',
                motto: 'True momentum flows from inner alignment.',
                accent: 'bg-foxOrange',
                ref: '2'
              },
              {
                id: 'integration',
                num: '3',
                title: 'Integration',
                subtitle: 'The Wisdom',
                icon: BookOpen,
                text: 'Synthesizing data from experiences to generate learning. This is distinct from rest; it is the active processing of information—logging what worked and what didn\'t.',
                motto: 'We grow by absorbing what action teaches us.',
                accent: 'bg-sage',
                ref: '4'
              },
              {
                id: 'regeneration',
                num: '4',
                title: 'Regeneration',
                subtitle: 'The Fuel',
                icon: RefreshCw,
                text: 'Intentional replenishment. Optimizing the brain\'s Default Mode Network to process data and restore capacity. Resting is an active system function.',
                motto: 'Stillness is not absence—it is preparation.',
                accent: 'bg-sumiInk',
                ref: '2'
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
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-bold opacity-20 uppercase tracking-widest mb-1">{step.subtitle}</span>
                    {step.ref && (
                      <a href={`#ref-${step.ref}`} className="text-[10px] text-hankoRust/40 hover:text-hankoRust hover:underline transition-colors" onClick={(e) => e.stopPropagation()}>
                        [{step.ref}]
                      </a>
                    )}
                  </div>
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

      {/* From Blueprint to Build */}
      <section className="px-6 py-24 bg-white border-b-0.5 border-hankoRust/10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h3 className="text-sm font-bold tracking-widest uppercase text-hankoRust mb-4">From Blueprint to Build</h3>
            <h2 className="text-3xl font-serif text-sumiInk mb-6">The Map is Not the Territory</h2>
            <p className="text-sumiInk/70 leading-relaxed mb-6">
              A framework is neat; life is not. On paper, this system looks perfectly balanced. In reality, a crisis can spike the ambient temperature and threaten the system's integrity.
              This blueprint is not a rigid cage—it is a handrail.
            </p>
            <p className="text-sumiInk/70 leading-relaxed">
              I document the ongoing investigation of applying these principles—both personally and in product operations—in my writing series.
            </p>
          </div>
          <a
            href="/writing"
            className="group flex items-center gap-4 px-8 py-4 bg-sumiInk text-ricePaper hover:bg-hankoRust transition-colors duration-300 rounded-sm"
          >
            <span className="text-sm font-bold tracking-wider uppercase">Explore the Series</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Theoretical Basis (References with IDs and External Links) */}
      <footer className="px-6 py-24 bg-ricePaper max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <h4 className="text-xs font-bold text-sumiInk/30 uppercase tracking-widest mb-8 border-b border-sumiInk/10 pb-4">Theoretical Basis</h4>
          <div className="space-y-6 text-xs text-sumiInk/50 font-sans leading-relaxed">
            <p className="italic mb-6 opacity-70">
              *This framework was originally developed through personal feedback loops (Reflective Practice). It has since been validated against established research in neurobiology, psychology, and systems engineering.*
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              <div id="ref-1" className="scroll-mt-24 transition-colors duration-1000 target:text-sumiInk target:bg-hankoRust/5 p-2 rounded">
                <p className="mb-2"><strong className="text-sumiInk/70">[1] On Purpose & Physiology (PWA):</strong></p>
                <p className="pl-4 border-l border-sumiInk/10">
                  <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4241300/" target="_blank" rel="noopener noreferrer" className="hover:text-hankoRust hover:underline flex items-center gap-1">
                    Ryff, C. D. (2014). <em>Psychological Well-Being Revisited.</em> <ExternalLink size={10} />
                  </a>
                  Validates the link between eudaimonic well-being (Purpose) and physiological health, specifically the regulation of cortisol and inflammatory markers.
                </p>
              </div>

              <div id="ref-2" className="scroll-mt-24 transition-colors duration-1000 target:text-sumiInk target:bg-hankoRust/5 p-2 rounded">
                <p className="mb-2"><strong className="text-sumiInk/70">[2] On Energy Management (SFR):</strong></p>
                <p className="pl-4 border-l border-sumiInk/10">
                  <a href="https://hbr.org/2007/10/manage-your-energy-not-your-time" target="_blank" rel="noopener noreferrer" className="hover:text-hankoRust hover:underline flex items-center gap-1">
                    Schwartz, T. & McCarthy, C. (2007). <em>Manage Your Energy, Not Your Time.</em> <ExternalLink size={10} />
                  </a>
                  Supports the shift from linear productivity to rhythmic oscillation to maintain high performance over long durations.
                </p>
              </div>

              <div id="ref-3" className="scroll-mt-24 transition-colors duration-1000 target:text-sumiInk target:bg-hankoRust/5 p-2 rounded">
                <p className="mb-2"><strong className="text-sumiInk/70">[3] On Habit Architecture:</strong></p>
                <p className="pl-4 border-l border-sumiInk/10">
                  <a href="https://www.annualreviews.org/doi/abs/10.1146/annurev-psych-122414-033417" target="_blank" rel="noopener noreferrer" className="hover:text-hankoRust hover:underline flex items-center gap-1">
                    Wood, W., & Rünger, D. (2016). <em>Psychology of Habit.</em> <ExternalLink size={10} />
                  </a>
                  Explores the mechanism of automaticity and the role of environmental "friction" in sustaining behavior change.
                </p>
              </div>

              <div id="ref-4" className="scroll-mt-24 transition-colors duration-1000 target:text-sumiInk target:bg-hankoRust/5 p-2 rounded">
                <p className="mb-2"><strong className="text-sumiInk/70">[4] On Learning Cycles:</strong></p>
                <p className="pl-4 border-l border-sumiInk/10">
                  <a href="https://www.simplypsychology.org/learning-kolb.html" target="_blank" rel="noopener noreferrer" className="hover:text-hankoRust hover:underline flex items-center gap-1">
                    Kolb, D. A. (1984). <em>Experiential Learning.</em> <ExternalLink size={10} />
                  </a>
                  The scientific basis for the "Integration" phase—proving that learning occurs through the intentional reflection on experience.
                </p>
              </div>

              <div id="ref-5" className="scroll-mt-24 transition-colors duration-1000 target:text-sumiInk target:bg-hankoRust/5 p-2 rounded">
                <p className="mb-2"><strong className="text-sumiInk/70">[5] On Context & Resilience:</strong></p>
                <p className="pl-4 border-l border-sumiInk/10">
                  <span className="text-sumiInk/80">Hollnagel, E. (2011). <em>Resilience Engineering in Practice.</em></span>
                  
                   Shifts the focus from "human error" to "contextual design," treating resilience as a result of the environment, not just the individual.
                </p>
              </div>

            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Framework;